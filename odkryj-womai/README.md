# Odkryj WOMAI

Statyczna aplikacja quizowa z panelem administratora.

## Publiczne adresy

Te ścieżki są celowo zachowane:

- `/odkryj-womai/` — panel gościa, niezabezpieczony przez Cloudflare.
- `/odkryj-womai/admin/` — panel administratora, zabezpieczony przez Cloudflare Access.

Nie przenoś plików `odkryj-womai/index.html` ani `odkryj-womai/admin/index.html`, jeśli obecne adresy mają dalej działać bez przekierowań.

## Struktura

```text
odkryj-womai/
  index.html
  admin/
    index.html
  assets/
    logo-womai-white.png
    logo-placeholder.svg
  css/
    theme.css
    guest.css
    admin.css
  js/
    config.js
    api.js
    guest.js
    admin.js
```

## Konfiguracja

Endpoint Google Apps Script jest ustawiony w:

```text
js/config.js
```

Kolory i podstawowe zmienne wyglądu są w:

```text
css/theme.css
```

Gdy będzie gotowa docelowa identyfikacja wizualna, najpierw zmień zmienne w `theme.css`, a dopiero potem szczegóły w `guest.css` i `admin.css`.

## Logo

Panel gościa korzysta obecnie z prawdziwego pliku logo:

```text
assets/logo-womai-white.png
```

Ten plik jest wczytywany w `odkryj-womai/index.html` przez element `img.brand-logo`. Jeśli logo ma zostać zmienione, najprościej podmienić plik `assets/logo-womai-white.png` na nową wersję o tej samej nazwie albo zmienić ścieżkę w `index.html`.

Plik `assets/logo-placeholder.svg` może pozostać jako techniczny placeholder lub zapas dla miejsc, które nie mają jeszcze docelowego logo.

Panel administratora nadal używa klasy `brand-logo-placeholder`, więc jego nagłówek można później osobno dostosować do prawdziwego logo.

## Dostępność

Przy zmianach trzeba pilnować:

- języka dokumentu `lang="pl"`,
- prawdziwych przycisków `<button>`,
- komunikatów `aria-live`,
- kolejności fokusu,
- widocznego fokusu klawiatury,
- kontrastu kolorów,
- działania quizu bez myszy.

## Bezpieczeństwo

Cloudflare chroni ścieżkę `/odkryj-womai/admin/`, ale backend Apps Script nadal musi sprawdzać token i rolę dla każdej operacji administracyjnej. Publiczne `action=guest` powinno zwracać wyłącznie dane przeznaczone dla gościa.
