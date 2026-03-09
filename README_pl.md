# Google Calendar Reader

English version: [README.md](README.md)

Google Calendar Reader to dodatek do NVDA dla systemu Windows, który umożliwia szybkie logowanie do Kalendarza Google, wybór kalendarzy oraz odczytywanie wydarzeń przy użyciu skrótów klawiaturowych.

## Funkcje

Dodatek umożliwia:

- logowanie do konta Google przez przeglądarkę
- odczytywanie wydarzeń z Kalendarza Google na dziś i kolejne dni
- wybór kalendarzy, które mają być uwzględniane przy odczycie
- przełączanie między trybem krótkim i pełnym
- informowanie o wydarzeniach trwających
- pomijanie zakończonych wydarzeń z bieżącego dnia

## Wymagania

- Windows
- NVDA 2023.1 lub nowszy
- dostęp do Internetu
- konto Google z włączonym Kalendarzem Google

## Instalacja

1. Zainstaluj dodatek w NVDA.
2. Uruchom ponownie NVDA, jeśli będzie to wymagane.
3. Upewnij się, że dodatek jest aktywny.

## Pierwsze logowanie

Aby zalogować się do Kalendarza Google:

1. Naciśnij:
   `NVDA+Control+Shift+0`
2. Otworzy się przeglądarka internetowa.
3. Zaloguj się do konta Google i zaakceptuj dostęp do kalendarza.
4. Po zakończeniu logowania wróć do NVDA.
5. Naciśnij ponownie:
   `NVDA+Control+Shift+0`

Jeśli logowanie zakończyło się powodzeniem, dodatek ogłosi, że użytkownik jest zalogowany do Google Calendar.

## Skróty klawiaturowe

### Logowanie i status

`NVDA+Control+Shift+0`

- rozpoczyna logowanie do Google, jeśli użytkownik nie jest zalogowany
- sprawdza stan logowania, jeśli użytkownik jest już zalogowany

### Odczyt wydarzeń

`NVDA+Control+Shift+1`  
Odczyt wydarzeń na dziś

`NVDA+Control+Shift+2`  
Odczyt wydarzeń na jutro

`NVDA+Control+Shift+3`  
Odczyt wydarzeń na pojutrze

`NVDA+Control+Shift+4`  
Odczyt wydarzeń za 3 dni

`NVDA+Control+Shift+5`  
Odczyt wydarzeń za 4 dni

`NVDA+Control+Shift+6`  
Odczyt wydarzeń za 5 dni

`NVDA+Control+Shift+7`  
Odczyt wydarzeń za 6 dni

### Tryb odczytu

`NVDA+Control+Shift+8`

Przełącza tryb odczytu między:

- trybem krótkim
- trybem pełnym

### Wybór kalendarzy

`NVDA+Control+Shift+9`

Otwiera okno wyboru kalendarzy, które mają być uwzględniane podczas odczytu wydarzeń.

## Wybór kalendarzy

Po otwarciu okna wyboru kalendarzy:

- strzałki góra/dół przemieszczają po liście
- spacja zaznacza lub odznacza wybrany kalendarz
- Enter zapisuje wybór i zamyka okno
- Escape zamyka okno bez zapisywania zmian

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

- pomija wydarzenia już zakończone
- informuje, jeśli wydarzenie trwa
- odczytuje wydarzenia nadchodzące

Przykład:

`do 15:00, trwa Spotkanie zespołu`

Dla kolejnych dni odczytywane są wszystkie wydarzenia w danym dniu.

## Język dodatku

Dodatek automatycznie dostosowuje język komunikatów do języka NVDA.

Obecnie obsługiwane są:

- polski
- angielski

## Pliki użytkownika

Dodatek może tworzyć lokalnie następujące pliki:

- `token.json` — lokalny token logowania Google
- `settings.json` — zapis wybranych kalendarzy i trybu odczytu
- `last_oauth_error.txt` — plik pomocniczy używany przy diagnostyce błędów logowania

Pliki te są przechowywane lokalnie na komputerze użytkownika.

## Prywatność

Dodatek korzysta z Google Calendar API wyłącznie w zakresie odczytu wydarzeń.

Dodatek:

- nie tworzy wydarzeń
- nie edytuje wydarzeń
- nie usuwa wydarzeń
- nie przesyła danych kalendarza na zewnętrzne serwery autora

Dane wydarzeń są wykorzystywane lokalnie, wyłącznie do odczytu przez NVDA.

## Rozwiązywanie problemów

### Dodatek mówi, że użytkownik nie jest zalogowany

Naciśnij:
`NVDA+Control+Shift+0`

i wykonaj logowanie w przeglądarce.

### Otwiera się przeglądarka, ale logowanie nie kończy się poprawnie

Sprawdź połączenie z Internetem oraz upewnij się, że konto Google ma dostęp do Kalendarza Google.

### Dodatek nie czyta wydarzeń z właściwego kalendarza

Naciśnij:
`NVDA+Control+Shift+9`

i sprawdź, które kalendarze są zaznaczone.

### Dodatek czyta zbyt dużo lub zbyt mało informacji

Naciśnij:
`NVDA+Control+Shift+8`

aby przełączyć tryb odczytu.

## Autor

Piotr Tarasewicz
