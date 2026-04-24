# Plan strony PT Projects

Ten plik jest roboczą pamięcią projektu strony. Ma pomagać utrzymać porządek podczas dłuższej pracy nad treścią, strukturą i dostępnością.

## Cel strony

Strona PT Projects ma być spokojnym, prostym i dostępnym miejscem na projekty, wpisy, informacje o dostępności oraz projekty muzyczne Piotra Tarasewicza.

Nie ma udawać dużego portalu ani komercyjnego serwisu. Ma być czytelna, uczciwa i wygodna dla osób korzystających z klawiatury oraz czytników ekranu.

## Ton i styl

- pisać naturalnie, bez sztucznego marketingu,
- unikać tekstów brzmiących jak wygenerowane automatycznie,
- jasno oddzielać projekty gotowe od testowych,
- nie obiecywać więcej, niż faktycznie jest dostępne,
- stawiać na prostotę, konkret i dostępność,
- używać zrozumiałych linków i logicznych nagłówków.

## Główne działy strony

### Start

Krótki wstęp do strony i najważniejsze odnośniki.

### O mnie

Osobisty, spokojny opis Piotra, zainteresowań, podejścia do technologii i dostępności.

### Projekty

Miejsce na projekty techniczne i dostępnościowe.

Obecnie najważniejszy projekt: Google Calendar Reader for NVDA.

### Google Calendar Reader for NVDA

Status: wersja testowa.

Najważniejsze zasady opisu:

- nie przedstawiać dodatku jako gotowego publicznego produktu,
- jasno pisać, że nie przeszedł pełnej weryfikacji Google,
- zachęcać zainteresowane osoby do kontaktu mailowego,
- uczciwie opisywać zakres dostępu do Google Calendar,
- zaznaczać, że dodatek może odczytywać, tworzyć, edytować i usuwać wydarzenia,
- informować, że dane potrzebne do działania są przechowywane lokalnie.

Proponowane zdanie pozycjonujące:

> To mój testowy projekt dla NVDA, rozwijany z myślą o wygodniejszej pracy z Google Calendar bez wzroku. Nie jest jeszcze publicznie dostępny dla każdego. Jeśli chcesz porozmawiać o testach, napisz do mnie.

### Wpisy

Miejsce na krótkie i dłuższe teksty. Możliwe tematy:

- dostępność cyfrowa,
- NVDA i czytniki ekranu,
- praca nad własnymi projektami,
- notatki techniczne,
- przemyślenia o używaniu technologii bez wzroku,
- aktualizacje projektów.

### Muzyka

Miejsce na projekty muzyczne Piotra: kompozycje, szkice, urywki utworów i materiały, które z czasem mogą zostać pokazane szerzej.

Nie jest to dział na notatki głosowe ani ogólne polecenia muzyczne.

### Dostępność

Strona opisująca założenia dostępnościowe PT Projects:

- logiczna struktura nagłówków,
- czytelne nazwy linków,
- skip link,
- obsługa z klawiatury,
- prosty układ,
- brak zbędnych skryptów,
- wygoda dla użytkowników czytników ekranu.

### Kontakt

Prosty kontakt mailowy i link do profilu GitHub. Bez formularza kontaktowego, żeby nie zbierać niepotrzebnych danych.

## Zrobione zmiany

### 2026-04-24

- poprawiono stronę kontaktu i link do profilu GitHub,
- dodano stronę projektu `projects/google-calendar-reader/index.html`,
- opisano Google Calendar Reader jako projekt testowy,
- dodano informację o braku pełnej weryfikacji Google,
- poprawiono politykę prywatności zgodnie z realnym zakresem działania dodatku,
- poprawiono warunki korzystania,
- zaktualizowano `README.md` i `README_pl.md`,
- doprecyzowano funkcje dodatku,
- poprawiono opis odczytu przez syntezator mowy używany w NVDA,
- poprawiono dział `Muzyka`, żeby dotyczył projektów muzycznych.

## Najbliższe kroki

1. Dodać w stopce linki do polityki prywatności i warunków korzystania.
2. Wygładzić `about.html`.
3. Wygładzić i doprecyzować `accessibility.html`.
4. Uporządkować strukturę przyszłych wpisów.
5. Rozważyć dodanie prostego archiwum zmian strony.

## Zasady pracy nad zmianami

- większe zmiany robić etapami,
- po każdej serii zmian zapisać krótkie podsumowanie w tym pliku,
- nie usuwać informacji o statusie testowym Google Calendar Reader,
- nie opisywać dodatku jako publicznie gotowego, dopóki faktycznie taki nie będzie,
- przy zmianach związanych z prywatnością najpierw sprawdzić realne działanie kodu,
- dbać o dostępność przed wyglądem.
