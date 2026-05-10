# Google Calendar Reader

English version: [README.md](README.md)

Google Calendar Reader to testowy dodatek do NVDA dla systemu Windows. Umożliwia logowanie do Google Calendar, wybór kalendarzy, odczytywanie wydarzeń oraz wykonywanie operacji na wydarzeniach przy użyciu klawiatury.

## Status projektu

Projekt jest obecnie w wersji testowej.

Dodatek może być pobrany publicznie, ale logowanie Google działa tylko dla zatwierdzonych użytkowników testowych, ponieważ projekt Google OAuth nadal działa w trybie testowym.

Jeśli chcesz przetestować dodatek, skontaktuj się z autorem przez adres e-mail podany na stronie projektu:

- https://ptprojects.app

## Funkcje

Dodatek umożliwia:

- logowanie do konta Google przez przeglądarkę,
- odczytywanie wydarzeń z Google Calendar na dziś i kolejne 7 dni,
- podgląd wydarzeń dla innego, wybranego dnia,
- wybór kalendarzy używanych przy odczycie, zapisie i edycji,
- przełączanie między trybem krótkim i pełnym,
- informowanie o wydarzeniach trwających,
- pomijanie zakończonych wydarzeń z bieżącego dnia,
- tworzenie wydarzeń,
- edytowanie wydarzeń,
- usuwanie jednego lub wielu wydarzeń,
- działanie z poziomu warstwowych skrótów klawiaturowych NVDA.

## Wymagania

- Windows
- NVDA 2023.1 lub nowszy
- dostęp do Internetu
- konto Google z włączonym Google Calendar

Aktualna działająca wersja została pomyślnie przetestowana z NVDA 2026.1.

## Instalacja

1. Zainstaluj dodatek w NVDA.
2. Uruchom ponownie NVDA, jeśli będzie to wymagane.
3. Upewnij się, że dodatek jest aktywny.

## Pierwsze logowanie

Aby zalogować się do Google Calendar:

1. Naciśnij `NVDA+Shift+G`.
2. Naciśnij `0`.
3. Otworzy się przeglądarka internetowa.
4. Zaloguj się do konta Google i zaakceptuj wymagany dostęp do kalendarza.
5. Po zakończeniu logowania wróć do NVDA.
6. Naciśnij ponownie `NVDA+Shift+G`, a następnie `0`.

Jeśli logowanie zakończyło się powodzeniem, dodatek ogłosi, że użytkownik jest zalogowany do Google Calendar.

## Warstwowe skróty klawiaturowe

Dodatek używa warstwowego systemu poleceń.

Najpierw naciśnij:

`NVDA+Shift+G`

Następnie naciśnij jeden z poniższych klawiszy:

- `0` — logowanie lub sprawdzenie stanu logowania
- `1` — odczyt wydarzeń na dziś
- `2` — odczyt wydarzeń na jutro
- `3` — odczyt wydarzeń na pojutrze
- `4` — odczyt wydarzeń za 3 dni
- `5` — odczyt wydarzeń za 4 dni
- `6` — odczyt wydarzeń za 5 dni
- `7` — odczyt wydarzeń za 6 dni
- `8` — przełączanie trybu odczytu
- `9` — wybór kalendarzy
- `N` — dodawanie wydarzenia
- `E` — edycja wydarzenia
- `U` — usuwanie wydarzeń
- `P` — pokazanie wydarzeń dla wybranego dnia

## Skróty bezpośrednie

Dodatek udostępnia także bezpośrednie skróty dla najważniejszych operacji edycji:

- `NVDA+Control+Shift+N` — dodawanie wydarzenia
- `NVDA+Control+Shift+E` — edycja wydarzenia
- `NVDA+Control+Shift+U` — usuwanie wydarzeń

## Wybór kalendarzy

Po otwarciu okna wyboru kalendarzy:

- strzałki góra/dół przemieszczają po liście,
- spacja zaznacza lub odznacza wybrany kalendarz,
- Enter zapisuje wybór i zamyka okno,
- Escape zamyka okno bez zapisywania zmian.

Jeżeli użytkownik nie zaznaczy żadnego kalendarza, dodatek automatycznie używa kalendarza głównego.

## Tryby odczytu

### Tryb krótki

W trybie krótkim dodatek odczytuje skrócone informacje o wydarzeniach.

Przykłady:

- `14:30, Spotkanie`
- `do 15:00, trwa Spotkanie zespołu`
- `całodniowe, Urlop`

Tryb krótki jest przeznaczony do szybkiego sprawdzania kalendarza.

### Tryb pełny

W trybie pełnym dodatek odczytuje pełniejsze informacje.

Przykłady:

- `14:30 do 15:30, Spotkanie`
- `do 15:00, trwa Spotkanie zespołu`
- `wydarzenie całodniowe, Urlop`

Jeśli odczytywanych jest kilka kalendarzy, dodatek może podać również nazwę kalendarza.

## Zachowanie przy wydarzeniach bieżących

Dla bieżącego dnia dodatek:

- pomija wydarzenia już zakończone,
- informuje, jeśli wydarzenie trwa,
- odczytuje wydarzenia nadchodzące.

Przykład:

`do 15:00, trwa Spotkanie zespołu`

Dla kolejnych dni odczytywane są wszystkie wydarzenia w danym dniu.

## Operacje zmieniające kalendarz

Aktualna wersja dodatku może tworzyć, edytować i usuwać wydarzenia w Google Calendar. Przed wykonaniem takiej operacji upewnij się, że wybrany kalendarz oraz dane wydarzenia są poprawne.

## Język dodatku

Dodatek automatycznie dostosowuje język komunikatów do języka NVDA.

Obecnie obsługiwane są:

- polski
- angielski

## Pliki użytkownika

Dodatek może tworzyć lokalnie następujące pliki:

- `token.json` — lokalny token logowania Google,
- `settings.json` — zapis wybranych kalendarzy i trybu odczytu,
- `last_oauth_error.txt` — plik pomocniczy używany przy diagnostyce błędów logowania,
- pliki diagnostyczne związane z błędami tworzenia, edycji lub usuwania wydarzeń.

Pliki te są przechowywane lokalnie na komputerze użytkownika. Pliki diagnostyczne mogą zawierać techniczne informacje o błędach, a czasem także dane wpisane w formularzu wydarzenia.

## Prywatność

Dodatek komunikuje się z usługami Google potrzebnymi do logowania i obsługi Google Calendar API. Nie wysyła danych kalendarza na zewnętrzny serwer autora i nie prowadzi osobnej bazy wydarzeń użytkowników.

Aktualna wersja używa zakresu dostępu pozwalającego na odczyt kalendarzy i wydarzeń oraz na tworzenie, edycję i usuwanie wydarzeń, gdy użytkownik uruchomi odpowiednią funkcję.

## Rozwiązywanie problemów

### Dodatek mówi, że użytkownik nie jest zalogowany

Naciśnij `NVDA+Shift+G`, a następnie `0`, i wykonaj logowanie w przeglądarce.

### Otwiera się przeglądarka, ale logowanie nie kończy się poprawnie

Sprawdź połączenie z Internetem oraz upewnij się, że konto Google ma dostęp do Google Calendar.

### Dodatek nie czyta wydarzeń z właściwego kalendarza

Naciśnij `NVDA+Shift+G`, a następnie `9`, i sprawdź, które kalendarze są zaznaczone.

### Dodatek czyta zbyt dużo lub zbyt mało informacji

Naciśnij `NVDA+Shift+G`, a następnie `8`, aby przełączyć tryb odczytu.

## Autor

Piotr Tarasewicz
