
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

  matches: [
    { text: "Stora pyramiderna i Giza uppförs", epochs: ["old"], explain: "Pyramiderna byggdes främst under 4:e dynastin (t.ex. Cheops), typiskt för Gamla riket." },
    { text: "Farao ses som en gud på jorden", epochs: ["old"], explain: "Den absoluta kungamakten och gudomlig status tydligast i Gamla riket." },
    { text: "Riket återförenas och styrs från Thebe", epochs: ["middle"], explain: "Efter Första mellantiden återförenas Egypten; Thebe blir maktcentrum." },
    { text: "Kontakt med Hyksos och nya tekniker sprids", epochs: ["middle","new"], explain: "Hyksos påverkan märks i slutet av Mellersta riket och får följder in i Nya riket." },
    { text: "Egypten blir en stormakt med erövringar i Levanten och Nubien", epochs: ["new"], explain: "Under Nya riket expanderar Egypten som mest genom militära kampanjer." },
    { text: "Stora tempel byggs (Karnak, Luxor)", epochs: ["new"], explain: "Monumentala tempelkomplex präglar Nya riket." },
    { text: "Svagare faraoner, torka och hungersnöd", epochs: ["old"], explain: "Bidrog till Gamla rikets fall och Första mellantiden." },
    { text: "Thebe som religiöst centrum", epochs: ["middle","new"], explain: "Thebe är centralt i både Mellersta och Nya riket." },
    { text: "Stridsvagnar används i armén", epochs: ["middle","new"], explain: "Tekniken lärs under Mellersta riket, används brett i Nya riket." }
  ],

  timelineCards: [],

  quiz: [
    { q: "Vilken epok kallas ibland 'pyramidernas tid'?", options: ["Gamla riket","Mellersta riket","Nya riket"], answer: 0, detail: "Storskaliga pyramider uppförs främst under Gamla riket." },
    { q: "Vilken stad var central under Mellersta riket?", options: ["Memfis","Thebe","Alexandria"], answer: 1, detail: "Thebe fungerade som maktcentrum under Mellersta riket." },
    { q: "Under vilken epok nådde Egypten sin största utbredning?", options: ["Gamla riket","Mellersta riket","Nya riket"], answer: 2, detail: "Nya riket präglades av erövringar och militärmakt." },
    { q: "Vilken innovation förknippas med Hyksos?", options: ["Sfinxer","Stridsvagnar","Hieroglyfer"], answer: 1, detail: "Hyksos bidrog till spridningen av stridsvagnar i regionen." },
    { q: "Vem räknas ofta som den sista stora faraonen?", options: ["Ramesses II","Ramesses III","Tutankhamon"], answer: 1, detail: "Ramesses III ses ofta som den sista mäktiga faraonen i Nya riket." }
  ]
};

EGYPT.timelineCards = EGYPT.matches.map(m => ({ label: m.text, epochs: m.epochs, explain: m.explain }));

// Extra frågor
EGYPT.quiz = EGYPT.quiz.concat([
  {
    "q": "Vilken var Gamla rikets huvudstad enligt texten?",
    "options": [
      "Memfis",
      "Thebe",
      "Alexandria"
    ],
    "answer": 0,
    "detail": "Memfis var faraos huvudstad under Gamla riket."
  },
  {
    "q": "Vad var syftet med pyramiderna?",
    "options": [
      "Palats åt prästerna",
      "Gravar åt faraoner",
      "Lagerhus för skörd"
    ],
    "answer": 1,
    "detail": "Pyramiderna var gravar där faraon skulle få evigt liv."
  },
  {
    "q": "Vad bidrog till Gamla rikets fall?",
    "options": [
      "Persiskt anfall",
      "Torka och svält",
      "Vulkanutbrott i Egeiska havet"
    ],
    "answer": 1,
    "detail": "Svagare faraoner, torka och missväxt ledde till svält och konflikter."
  },
  {
    "q": "Vilken stad blev maktcentrum i Mellersta riket?",
    "options": [
      "Giza",
      "Thebe",
      "Avaris"
    ],
    "answer": 1,
    "detail": "Thebe blev ny huvudstad efter oroligheterna."
  },
  {
    "q": "Vilket folk invaderade Egypten under Mellersta riket?",
    "options": [
      "Hyksos",
      "Assyrier",
      "Perser"
    ],
    "answer": 0,
    "detail": "Hyksos invaderade från nordost under cirka 100 år."
  },
  {
    "q": "Vilken militär teknik lärde sig egyptierna av Hyksos?",
    "options": [
      "Krigselefanter",
      "Stridsvagnar",
      "Kastmaskiner"
    ],
    "answer": 1,
    "detail": "Stridsvagnen (häst och vagn) spreds via Hyksos."
  },
  {
    "q": "Vad utmärker Nya riket ekonomiskt?",
    "options": [
      "Endast jordbruk",
      "Handel och tributer",
      "Helt skattefritt"
    ],
    "answer": 1,
    "detail": "Rikedom genom handel, krigsbyte och tributer."
  },
  {
    "q": "Vem kallas ofta den sista stora faraonen i Nya riket?",
    "options": [
      "Ramesses III",
      "Akhenaton",
      "Thutmosis II"
    ],
    "answer": 0,
    "detail": "Ramesses III ses som den sista starka härskaren."
  },
  {
    "q": "Vilken naturresurs var grunden för Egyptens jordbruk?",
    "options": [
      "Eufrat",
      "Nilen",
      "Indus"
    ],
    "answer": 1,
    "detail": "Nilens översvämningar gav bördiga odlingsmarker."
  },
  {
    "q": "Vilka tre årstider använde egyptierna för jordbruket?",
    "options": [
      "Vår, sommar, höst",
      "Sådd, översvämning, skörd",
      "Torka, regn, vinter"
    ],
    "answer": 1,
    "detail": "De delade in året i översvämning, sådd och skörd."
  },
  {
    "q": "Vilken var en vanlig basföda i Egypten?",
    "options": [
      "Ris och fisk",
      "Bröd och öl",
      "Potatis och mjölk"
    ],
    "answer": 1,
    "detail": "Bröd och öl var vanliga baslivsmedel."
  },
  {
    "q": "Vad betyder att många var 'livegna'?",
    "options": [
      "Rösträtt i valet",
      "Frihet att flytta",
      "Inte bestämma över arbete och bostad"
    ],
    "answer": 2,
    "detail": "Livegna saknade friheten att välja arbete och bostad."
  },
  {
    "q": "Vad stämmer om kvinnor i forntida Egypten?",
    "options": [
      "Fick inte äga något",
      "Kunde skilja sig och hade arvsrätt",
      "Fick inte gå i skolan"
    ],
    "answer": 1,
    "detail": "De hade mer rättigheter än man kan tro, t.ex. arvsrätt."
  },
  {
    "q": "Varför var skrivare ett eftertraktat yrke?",
    "options": [
      "Kort utbildning",
      "Hög lön men hårt kroppsarbete",
      "Slapp kroppsarbete och skatt"
    ],
    "answer": 2,
    "detail": "Skrivare slapp kroppsarbete och att betala skatt."
  },
  {
    "q": "Vad kallas egyptiernas skriftspråk?",
    "options": [
      "Kileskrift",
      "Hieroglyfer",
      "Futharken"
    ],
    "answer": 1,
    "detail": "Hieroglyfer ristades/målades på tempel, gravar och papyrus."
  },
  {
    "q": "Vad gjorde Rosettastenen möjlig?",
    "options": [
      "Bygga pyramider",
      "Förstå hieroglyfer",
      "Räkna skördar"
    ],
    "answer": 1,
    "detail": "Den jämförde texter i hieroglyfer och grekiska."
  },
  {
    "q": "Varför uppstod flodkulturer ofta vid floder?",
    "options": [
      "Vackrare utsikt",
      "Översvämningar gav näring och bevattning",
      "För att undvika handel"
    ],
    "answer": 1,
    "detail": "Floder gav bördig jord och möjliggjorde bevattning."
  },
  {
    "q": "Vad var templens roll i samhället?",
    "options": [
      "Små byggnader utan betydelse",
      "Stora arbetsgivare och markägare",
      "Endast skolor för barn"
    ],
    "answer": 1,
    "detail": "Templen ägde mark och sysselsatte många."
  },
  {
    "q": "Var begravdes de döda efter balsamering?",
    "options": [
      "Östra sidan av Nilen",
      "Västra sidan av Nilen",
      "I deltat"
    ],
    "answer": 1,
    "detail": "Västra sidan kallades dödens sida."
  },
  {
    "q": "Vilken effekt kan låg Nil-översvämning ha haft under Nya riket?",
    "options": [
      "Mer skörd",
      "Högre löner",
      "Strejker och brist på mat"
    ],
    "answer": 2,
    "detail": "Torka och lägre översvämningar ledde till brist och strejker."
  }
]);
