(function () {
  'use strict';

  const config = window.WOMAI_CONFIG || {};
  const api = window.WOMAI_API;
  const positiveFeedbackLeads = ['Brawo.', 'Super.', 'Świetnie.', 'Bardzo dobrze.', 'Dokładnie tak.'];
  const negativeFeedbackLeads = ['Nie do końca.', 'Tym razem nie.', 'To jeszcze nie to.', 'Spójrzmy na to inaczej.'];

  const startView = document.getElementById('startView');
  const quizView = document.getElementById('quizView');
  const summaryView = document.getElementById('summaryView');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const playAgainBtn = document.getElementById('playAgainBtn');
  const helpBtn = document.getElementById('helpBtn');
  const helpBox = document.getElementById('helpBox');
  const loadingBox = document.getElementById('loadingBox');
  const errorBox = document.getElementById('errorBox');
  const progressLabel = document.getElementById('progressLabel');
  const progressFill = document.getElementById('progressFill');
  const progressBar = progressFill.closest('[role="progressbar"]');
  const sessionMeta = document.getElementById('sessionMeta');
  const categoryBadge = document.getElementById('categoryBadge');
  const questionTitle = document.getElementById('questionTitle');
  const choicesWrap = document.getElementById('choicesWrap');
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackText = document.getElementById('feedbackText');
  const selectionState = document.getElementById('selectionState');
  const nextBtn = document.getElementById('nextBtn');
  const scoreText = document.getElementById('scoreText');
  const summaryHeading = document.getElementById('summaryHeading');

  const STORAGE_KEY = config.guest?.storageKey || 'womai_guest_progress_v2';
  const preferredCategoryOrder = config.guest?.preferredCategoryOrder || ['ciemność', 'światło', 'eksperymenty', 'womai'];

  let WOMAI_DATA = null;
  let sessionQuestions = [];
  let currentIndex = 0;
  let selectedChoiceId = null;
  let feedbackShown = false;
  let answers = {};

  function defaultMemory() {
    return {
      sessionsCompleted: 0,
      totalCorrectAnswers: 0,
      totalQuestionsAnswered: 0,
      seenQuestionIds: [],
      lastPlayedAt: '',
      lastFirstQuestionId: ''
    };
  }

  function loadMemory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultMemory();
      const parsed = JSON.parse(raw);
      return {
        sessionsCompleted: Number(parsed.sessionsCompleted || 0),
        totalCorrectAnswers: Number(parsed.totalCorrectAnswers || 0),
        totalQuestionsAnswered: Number(parsed.totalQuestionsAnswered || 0),
        seenQuestionIds: Array.isArray(parsed.seenQuestionIds) ? parsed.seenQuestionIds : [],
        lastPlayedAt: String(parsed.lastPlayedAt || ''),
        lastFirstQuestionId: String(parsed.lastFirstQuestionId || '')
      };
    } catch (error) {
      return defaultMemory();
    }
  }

  let memory = loadMemory();

  function saveMemory() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
  }

  function randomIndex(maxExclusive) {
    if (window.crypto && window.crypto.getRandomValues) {
      const arr = new Uint32Array(1);
      window.crypto.getRandomValues(arr);
      return arr[0] % maxExclusive;
    }
    return Math.floor(Math.random() * maxExclusive);
  }

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = randomIndex(i + 1);
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function categoryLabel(id) {
    if (!WOMAI_DATA || !Array.isArray(WOMAI_DATA.categories)) return id;
    const hit = WOMAI_DATA.categories.find(c => c.id === id);
    return hit ? hit.label : id;
  }

  function pickOneByCategory(categoryId, excludedIds) {
    const candidates = WOMAI_DATA.questions.filter(q => q.active && q.isCore && q.categoryId === categoryId && !excludedIds.has(q.id));
    if (!candidates.length) return null;
    return shuffle(candidates)[0];
  }

  function shuffledQuestion(question) {
    return {
      id: question.id,
      categoryId: question.categoryId,
      prompt: question.prompt,
      correctChoiceId: question.correctChoiceId,
      explanation: question.explanation,
      active: question.active,
      isCore: question.isCore,
      choices: shuffle(question.choices.map(choice => ({ id: choice.id, text: choice.text })))
    };
  }

  function avoidSameFirstQuestion(session) {
    if (!Array.isArray(session) || session.length < 2) return session;
    const lastFirst = memory.lastFirstQuestionId || '';
    if (!lastFirst || session[0].id !== lastFirst) return session;
    const swapIndex = 1 + randomIndex(session.length - 1);
    const copy = session.slice();
    const tmp = copy[0];
    copy[0] = copy[swapIndex];
    copy[swapIndex] = tmp;
    return copy;
  }

  function buildSessionQuestions() {
    const targetCount = Number(WOMAI_DATA.settings?.sessionQuestionCount || config.guest?.sessionQuestionCountFallback || 4);
    const chosen = [];
    const excluded = new Set();

    preferredCategoryOrder.forEach(categoryId => {
      if (chosen.length >= targetCount) return;
      const question = pickOneByCategory(categoryId, excluded);
      if (question) {
        chosen.push(shuffledQuestion(question));
        excluded.add(question.id);
      }
    });

    const remaining = shuffle(
      WOMAI_DATA.questions.filter(q => q.active && !excluded.has(q.id))
    );

    while (chosen.length < targetCount && remaining.length) {
      const next = remaining.shift();
      chosen.push(shuffledQuestion(next));
      excluded.add(next.id);
    }

    const session = shuffle(chosen).slice(0, targetCount);
    return avoidSameFirstQuestion(session);
  }

  function currentQuestion() {
    return sessionQuestions[currentIndex];
  }

  function randomLead(ok) {
    const pool = ok ? positiveFeedbackLeads : negativeFeedbackLeads;
    return pool[randomIndex(pool.length)];
  }

  function correctCount() {
    return sessionQuestions.reduce((sum, q) => sum + (answers[q.id] === q.correctChoiceId ? 1 : 0), 0);
  }

  function focusQuestionHeading() {
    requestAnimationFrame(() => questionTitle.focus());
  }

  function focusSelectedChoice() {
    requestAnimationFrame(() => {
      const selectedButton = Array.from(choicesWrap.querySelectorAll('.choice')).find(
        button => button.dataset.choiceId === selectedChoiceId
      );
      if (selectedButton) selectedButton.focus();
    });
  }

  function focusFeedback() {
    requestAnimationFrame(() => feedbackTitle.focus());
  }

  function focusSummary() {
    requestAnimationFrame(() => summaryHeading.focus());
  }

  function persistFinishedSession() {
    const correct = correctCount();
    memory.sessionsCompleted += 1;
    memory.totalCorrectAnswers += correct;
    memory.totalQuestionsAnswered += sessionQuestions.length;
    memory.lastPlayedAt = new Date().toISOString();
    const seen = new Set(memory.seenQuestionIds);
    sessionQuestions.forEach(question => seen.add(question.id));
    memory.seenQuestionIds = Array.from(seen);
    saveMemory();
  }

  function showError(text) {
    errorBox.textContent = text;
    errorBox.classList.remove('hidden');
  }

  function hideError() {
    errorBox.textContent = '';
    errorBox.classList.add('hidden');
  }

  function render() {
    const showSummary = sessionQuestions.length > 0 && currentIndex >= sessionQuestions.length;
    startView.classList.toggle('hidden', sessionQuestions.length > 0);
    quizView.classList.toggle('hidden', sessionQuestions.length === 0 || showSummary);
    summaryView.classList.toggle('hidden', !showSummary);

    if (showSummary) {
      scoreText.textContent = `${correctCount()} / ${sessionQuestions.length}`;
      focusSummary();
      return;
    }

    if (!sessionQuestions.length) return;

    const question = currentQuestion();
    const progress = Math.round(((currentIndex + 1) / sessionQuestions.length) * 100);

    progressLabel.textContent = `Pytanie ${currentIndex + 1} z ${sessionQuestions.length}`;
    progressFill.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', String(progress));
    sessionMeta.textContent = 'Nowa sesja, nowe pytania';
    categoryBadge.textContent = categoryLabel(question.categoryId);
    questionTitle.textContent = question.prompt;
    choicesWrap.innerHTML = '';
    feedbackBox.classList.add('hidden');

    question.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice';
      btn.dataset.choiceId = choice.id;
      btn.textContent = choice.text;

      const isSelected = selectedChoiceId === choice.id;
      btn.setAttribute('aria-pressed', String(isSelected));
      if (isSelected) btn.classList.add('selected');

      if (feedbackShown) {
        if (choice.id === question.correctChoiceId) btn.classList.add('correct');
        if (isSelected && choice.id !== question.correctChoiceId) btn.classList.add('wrong');
      }

      btn.addEventListener('click', () => {
        if (feedbackShown) return;
        selectedChoiceId = choice.id;
        selectionState.textContent = `Wybrano odpowiedź: ${choice.text}`;
        nextBtn.disabled = false;
        render();
        focusSelectedChoice();
      });

      choicesWrap.appendChild(btn);
    });

    if (feedbackShown) {
      const ok = selectedChoiceId === question.correctChoiceId;
      const correctText = question.choices.find(c => c.id === question.correctChoiceId)?.text || '';
      feedbackTitle.textContent = randomLead(ok);
      feedbackText.textContent = ok
        ? question.explanation
        : `Poprawna odpowiedź: ${correctText}. ${question.explanation}`;
      feedbackBox.classList.remove('hidden');
    }

    nextBtn.textContent = feedbackShown
      ? (currentIndex === sessionQuestions.length - 1 ? 'Zobacz podsumowanie' : 'Dalej')
      : 'Sprawdź odpowiedź';
    nextBtn.disabled = !selectedChoiceId;
  }

  function startSession() {
    sessionQuestions = buildSessionQuestions();
    currentIndex = 0;
    selectedChoiceId = null;
    feedbackShown = false;
    answers = {};
    if (sessionQuestions.length > 0) {
      memory.lastFirstQuestionId = sessionQuestions[0].id;
      saveMemory();
    }
    render();
    focusQuestionHeading();
  }

  async function loadGuestData() {
    try {
      WOMAI_DATA = await api.getGuestData();
      if (!WOMAI_DATA.questions || WOMAI_DATA.questions.length < 4) {
        throw new Error('Za mało aktywnych pytań do uruchomienia sesji.');
      }
      loadingBox.textContent = `Pobrano ${WOMAI_DATA.questions.length} pytań.`;
      startBtn.disabled = false;
      hideError();
    } catch (error) {
      loadingBox.textContent = 'Nie udało się pobrać pytań.';
      showError(error.message || 'Nie udało się pobrać pytań.');
      startBtn.disabled = true;
    }
  }

  nextBtn.addEventListener('click', () => {
    const question = currentQuestion();
    if (!selectedChoiceId) return;

    if (!feedbackShown) {
      answers[question.id] = selectedChoiceId;
      feedbackShown = true;
      render();
      focusFeedback();
      return;
    }

    currentIndex += 1;
    selectedChoiceId = null;
    feedbackShown = false;
    selectionState.textContent = '';

    if (currentIndex >= sessionQuestions.length) {
      persistFinishedSession();
    }

    render();
    if (currentIndex < sessionQuestions.length) {
      focusQuestionHeading();
    }
  });

  startBtn.addEventListener('click', startSession);
  restartBtn.addEventListener('click', startSession);
  playAgainBtn.addEventListener('click', startSession);

  helpBtn.addEventListener('click', () => {
    const willShow = helpBox.hidden;
    helpBox.hidden = !willShow;
    helpBox.classList.toggle('hidden', !willShow);
    helpBtn.setAttribute('aria-expanded', String(willShow));
  });

  loadGuestData();
}());
