
# Forntida Egypten – Tre Riken (Spel)

Statisk webbapp med tre spel:
1. **Matchning** – para ihop händelser med rätt epok.
2. **Tidslinje** – dra och släpp händelser till rätt årtal (tolerans ±40 år).
3. **Quiz** – flervalsfrågor med förklaringar efter varje svar.

## Mappstruktur

```
egypt-kingdoms-game/
├── index.html
├── match.html
├── timeline.html
├── quiz.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js
│   │   ├── match.js
│   │   ├── timeline.js
│   │   └── quiz.js
│   └── img/
│       ├── pyramider.jpg
│       ├── thebe.jpg
│       ├── tempel.jpg
│       ├── tidslinje.jpg
│       ├── ramses_iii.jpg
│       ├── hyksos.jpg
│       ├── stridsvagn.jpg
│       ├── nilen.jpg
│       └── karnak.jpg
└── README.md
```

> Du behöver **själv lägga in bilderna** (se filnamn ovan) i `assets/img/`. Bilderna används i framsidan samt kan användas i undervisningen.

## Rekommenderade bildnamn och placering

Lägg dessa i `assets/img/`:

- `pyramider.jpg` (Gamla riket/pyramider i Giza)
- `thebe.jpg` (Thebe/Tempel i Mellersta riket)
- `tempel.jpg` (Stort egyptiskt tempel – t.ex. Karnak/Luxor) 
- `tidslinje.jpg` (symbolisk tidslinjebild/ikon)
- `ramses_iii.jpg` (porträtt/relief av Ramesses III)
- `hyksos.jpg` (illustration/foto relaterat till Hyksos)
- `stridsvagn.jpg` (egyptisk/forntida stridsvagn)
- `nilen.jpg` (Nilen och jordbruk)
- `karnak.jpg` (Karnak-templet)

Du kan byta bilder när som helst – filnamnen i `index.html` använder `pyramider.jpg`, `tidslinje.jpg`, `tempel.jpg`. Övriga är för utbyggnad.

## Så kör du lokalt

Öppna `index.html` i en webbläsare, eller kör en enkel server:

```bash
# Python 3
python -m http.server 8000
# Surfa till http://localhost:8000
```

## Publicera på GitHub Pages

1. Skapa ett nytt repo på GitHub, t.ex. `egypt-kingdoms-game`.
2. Lägg in filerna i roten (inte under en extra mapp).
3. Aktivera **Settings → Pages** och välj branch `main` och rot (`/root`).
4. Din sida blir tillgänglig via GitHub Pages-URL:en.

## Innehållsnot

- Årtal är avrundade och används pedagogiskt för ordning/översikt.
- Du kan lägga till fler händelser, frågor och matchningskort i `assets/js/data.js`.
- När elever placerar rätt i matchning/tidslinje visas en **fördjupning** (knytning till epoken).

## Licens

MIT – fritt att använda och anpassa i undervisning.
