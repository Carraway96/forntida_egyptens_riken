
# Forntida Egypten – Tre Riken (Spel) – v2

Förbättringar:
- **Tidslinje = Memory+Tidslinje**: Dra händelser till **epoker** (Gamla/Mellersta/Nya). Vissa kort är **giltiga i flera epoker**.
- **Tydligare UI**: Ljus bakgrund, starka kontraster, stora knappar, tydlig felfeedback (röd skakning).
- **Quiz utökat**: Totalt **25 frågor** med förklaringar.

## Mappstruktur
```
egypt-kingdoms-game-v2/
├── index.html
├── match.html
├── timeline.html
├── quiz.html
├── assets/
│   ├── css/style.css
│   ├── js/data.js
│   ├── js/match.js
│   ├── js/timeline.js
│   └── js/quiz.js
└── assets/img/ (lägg in riktiga bilder)
```

## Bilder (placera i `assets/img/`)
- pyramider.jpg, tidslinje.jpg, tempel.jpg, thebe.jpg, ramses_iii.jpg, hyksos.jpg, stridsvagn.jpg, nilen.jpg, karnak.jpg

## Kör lokalt
Öppna `index.html` direkt eller kör `python -m http.server` och surfa till `http://localhost:8000`.

## GitHub Pages
Lägg upp allt i repo-roten. Aktivera **Settings → Pages → Deploy from branch**.
