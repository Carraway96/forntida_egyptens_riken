
// All speldata på svenska
const EGYPT = {
  epochs: {
    old: {
      name: "Gamla riket",
      years: "ca 2700–2200 f.v.t.",
      image: "pyramider.jpg",
      summary: "Pyramidernas tid. Farao ses som gud och staten är starkt centraliserad. Stora pyramider byggs i Giza.",
      economy: "Jordbruk längs Nilen, staten äger mycket mark och samlar in skatt i naturaprodukter.",
      decline: "Svagare faraoner, torka och missväxt leder till svält och konflikter → Första mellantiden."
    },
    middle: {
      name: "Mellersta riket",
      years: "ca 2050–1650 f.v.t.",
      image: "thebe.jpg",
      summary: "Återförening och stabilitet från Thebe. Farao som 'folkets herde'. Konst och litteratur blomstrar.",
      eventsNote: "Kontakt och konflikter med Hyksos i norr.",
      tech: "Lär sig använda stridsvagnar (häst och vagn)."
    },
    new: {
      name: "Nya riket",
      years: "ca 1550–1070 f.v.t.",
      image: "tempel.jpg",
      summary: "Egyptens största utbredning och militärmakt. Stora tempel (t.ex. Karnak/Luxor).",
      pharaohs: "Kända faraoner: Hatshepsut, Thutmosis III, Akhenaton, Tutankhamon, Ramesses II; senare Ramesses III som sista stora farao.",
      economy: "Rikedom genom krigsbyte, handel och tributer."
    }
  },

  // Matchning: händelse -> korrekt epok + fördjupning
  matches: [
    {
      text: "Stora pyramiderna i Giza uppförs",
      epoch: "old",
      explain: "Pyramiderna byggdes främst under 4:e dynastin (t.ex. Cheops), typiskt för Gamla riket."
    },
    {
      text: "Farao ses som en gud på jorden",
      epoch: "old",
      explain: "Den absoluta kungamakten och gudomlig status tydligast i Gamla riket."
    },
    {
      text: "Riket återförenas och styrs från Thebe",
      epoch: "middle",
      explain: "Efter Första mellantiden återförenas Egypten; Thebe blir maktcentrum."
    },
    {
      text: "Kontakt med Hyksos och nya tekniker sprids",
      epoch: "middle",
      explain: "Hyksos introducerar bl.a. stridsvagnar; påverkar militär utveckling."
    },
    {
      text: "Egypten blir en stormakt med erövringar i Levanten och Nubien",
      epoch: "new",
      explain: "Under Nya riket expanderar Egypten som mest genom militära kampanjer."
    },
    {
      text: "Stora tempel byggs (Karnak, Luxor)",
      epoch: "new",
      explain: "Monumentala tempelkomplex präglar Nya riket."
    }
  ],

  // Tidslinje: varje händelse med ungefärligt år (negativa tal = f.v.t.)
  timeline: [
    { label: "Pyramidbyggen i Giza (Cheops m.fl.)", year: -2550, explain: "Kulmen under 4:e dynastin i Gamla riket." },
    { label: "Första mellantiden", year: -2150, explain: "Period av splittring och svag centralmakt." },
    { label: "Återförening under Thebe (början Mellersta riket)", year: -2050, explain: "Stabilitet och kulturell blomstring." },
    { label: "Hyksos i norr; nya vapen (stridsvagn)", year: -1700, explain: "Teknologiska och militära förändringar." },
    { label: "Starten på Nya riket", year: -1550, explain: "Thebe driver ut Hyksos; expansion följer." },
    { label: "Ramesses II bygger stora monument", year: -1250, explain: "Nya rikets höjdpunkt, tempel och inskrifter." },
    { label: "Ramesses III – sista stora faraon", year: -1170, explain: "Försvarar riket mot 'sjöfolken'." }
  ],

  // Quiz-frågor
  quiz: [
    {
      q: "Vilken epok kallas ibland 'pyramidernas tid'?",
      options: ["Gamla riket", "Mellersta riket", "Nya riket"],
      answer: 0,
      detail: "Storskaliga pyramider uppförs främst under Gamla riket."
    },
    {
      q: "Vilken stad var central under Mellersta riket?",
      options: ["Memfis", "Thebe", "Alexandria"],
      answer: 1,
      detail: "Thebe fungerade som maktcentrum under Mellersta riket."
    },
    {
      q: "Under vilken epok nådde Egypten sin största utbredning?",
      options: ["Gamla riket", "Mellersta riket", "Nya riket"],
      answer: 2,
      detail: "Nya riket präglades av erövringar och militärmakt."
    },
    {
      q: "Vilken innovation förknippas med Hyksos?",
      options: ["Sfinxer", "Stridsvagnar", "Hieroglyfer"],
      answer: 1,
      detail: "Hyksos bidrog till spridningen av stridsvagnar i regionen."
    },
    {
      q: "Vem räknas ofta som den sista stora faraonen?",
      options: ["Ramesses II", "Ramesses III", "Tutankhamon"],
      answer: 1,
      detail: "Ramesses III ses ofta som den sista mäktiga faraonen i Nya riket."
    }
  ]
};
