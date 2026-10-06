const i18n = {
  fr: {
    tagline: "La bibliothèque vivante",
    eyebrow: "Explorez les rayons",
    search: "Rechercher un livre...",
    scroll: "Faites défiler les rayons",
    review: "Notre avis",
    offers: "Formats & offres",
    demo: "Données de démonstration",
    selection: "Sélection Libria",
    view: "Voir l'offre"
  },
  en: {
    tagline: "The living library",
    eyebrow: "Explore the shelves",
    search: "Search for a book...",
    scroll: "Browse the shelves",
    review: "Our review",
    offers: "Formats & offers",
    demo: "Demo data",
    selection: "Libria selection",
    view: "View offer"
  }
};

const genres = {
  fantasy: {
    label: { fr: "Fantasy", en: "Fantasy" },
    intro: {
      fr: "Des mondes anciens, des quêtes impossibles et des légendes à portée de main.",
      en: "Ancient worlds, impossible quests and legends within reach."
    },
    shelves: {
      fr: ["Incontournables", "Épopées", "Magie & mythes"],
      en: ["Essentials", "Epic journeys", "Magic & myths"]
    }
  },
  scifi: {
    label: { fr: "Science-fiction", en: "Science fiction" },
    intro: {
      fr: "Des futurs possibles, des ailleurs vertigineux et des idées qui déplacent les frontières.",
      en: "Possible futures, dizzying worlds and ideas that move the frontier."
    },
    shelves: {
      fr: ["Grands classiques", "Nouveaux mondes", "Vertiges"],
      en: ["Classics", "New worlds", "Mind-benders"]
    }
  },
  polar: {
    label: { fr: "Polar", en: "Crime" },
    intro: {
      fr: "Des ombres, des indices, des silences et cette envie irrépressible de tourner la page.",
      en: "Shadows, clues, silences and the irresistible urge to turn the page."
    },
    shelves: {
      fr: ["Noir", "Enquêtes", "Psychologique"],
      en: ["Noir", "Investigations", "Psychological"]
    }
  },
  jeunesse: {
    label: { fr: "Jeunesse", en: "Young readers" },
    intro: {
      fr: "Des histoires pour rêver, rire, grandir et revenir encore demander une dernière page.",
      en: "Stories to dream, laugh, grow and always ask for one more page."
    },
    shelves: {
      fr: ["Premières aventures", "9–12 ans", "À lire ensemble"],
      en: ["First adventures", "Ages 9–12", "Read together"]
    }
  }
};

function demoOffers(lang) {
  if (lang === "fr") {
    return [
      { format: "Livre papier", vendor: "Librairie partenaire", price: "12,90 €" },
      { format: "Occasion", vendor: "Vendeur partenaire", price: "6,50 €" },
      { format: "Livre audio", vendor: "Plateforme audio", price: "Essai / 14,99 €" }
    ];
  }
  return [
    { format: "Paperback", vendor: "Partner bookstore", price: "£10.99" },
    { format: "Used", vendor: "Partner seller", price: "£5.40" },
    { format: "Audiobook", vendor: "Audio platform", price: "Trial / £13.99" }
  ];
}

const books = [
  {
    id: "ember-crown", genre: "fantasy", shelf: 0, size: "tall", colors: ["#6a2d33","#2f171b"],
    title: { fr: "La Couronne de braise", en: "The Ember Crown" },
    author: "Mira Valen",
    tags: { fr: ["Fantasy épique","royaumes","quête"], en: ["Epic fantasy","kingdoms","quest"] },
    summary: {
      fr: "Une héritière sans royaume découvre qu'une couronne disparue pourrait réveiller une magie que les anciens avaient juré d'oublier.",
      en: "A crownless heir discovers that a lost relic could awaken a magic the old kingdoms swore to forget."
    },
    review: {
      fr: "Une aventure généreuse et immédiatement accessible, avec juste assez de mystère pour donner envie de rester dans cet univers.",
      en: "A generous, instantly accessible adventure with just enough mystery to make you want to stay in its world."
    }
  },
  {
    id: "forest-stars", genre: "fantasy", shelf: 0, size: "wide", colors: ["#315d51","#16312b"],
    title: { fr: "La Forêt des étoiles", en: "Forest of Stars" },
    author: "Elias Thorn",
    tags: { fr: ["nature","magie","aventure"], en: ["nature","magic","adventure"] },
    summary: {
      fr: "Au-delà des frontières connues, une forêt s'illumine chaque nuit d'étoiles qui ne devraient pas exister.",
      en: "Beyond the known borders, a forest lights up each night with stars that should not exist."
    },
    review: {
      fr: "Un roman d'atmosphère, contemplatif mais jamais immobile, parfait pour le rayon des découvertes.",
      en: "An atmospheric novel, contemplative but never still, perfect for a discovery shelf."
    }
  },
  {
    id: "last-griffin", genre: "fantasy", shelf: 1, size: "short", colors: ["#8b6a3b","#342718"],
    title: { fr: "Le Dernier Griffon", en: "The Last Griffin" },
    author: "Nora Kes",
    tags: { fr: ["créatures","aventure"], en: ["creatures","adventure"] },
    summary: {
      fr: "Un jeune cartographe reçoit pour mission de retrouver la dernière créature mythique aperçue au nord du monde.",
      en: "A young cartographer is sent north to find the last mythical creature ever seen."
    },
    review: {
      fr: "Très visuel, très rythmé : le genre de livre que l'on attrape sur une étagère sans savoir qu'on va le finir le soir même.",
      en: "Visual and fast-paced: the sort of book you pull from a shelf without knowing you'll finish it that night."
    }
  },
  {
    id: "red-orbit", genre: "scifi", shelf: 0, size: "tall", colors: ["#763f3c","#241b21"],
    title: { fr: "Orbite rouge", en: "Red Orbit" },
    author: "J. R. Hale",
    tags: { fr: ["Mars","exploration","thriller"], en: ["Mars","exploration","thriller"] },
    summary: {
      fr: "Une mission martienne perd brutalement le contact avec la Terre au moment où une anomalie apparaît sous la glace.",
      en: "A Mars mission loses contact with Earth just as an anomaly appears beneath the ice."
    },
    review: {
      fr: "Une science-fiction très lisible qui mélange exploration, tension et émerveillement.",
      en: "Highly readable science fiction mixing exploration, tension and wonder."
    }
  },
  {
    id: "memory-city", genre: "scifi", shelf: 1, size: "wide", colors: ["#2d6671","#142d36"],
    title: { fr: "La Cité mémoire", en: "Memory City" },
    author: "Sana Orlov",
    tags: { fr: ["IA","mémoire","ville"], en: ["AI","memory","city"] },
    summary: {
      fr: "Dans une mégalopole où les souvenirs peuvent être archivés, une femme retrouve la mémoire d'un crime qu'elle n'a jamais vécu.",
      en: "In a city where memories can be archived, a woman finds the memory of a crime she never lived."
    },
    review: {
      fr: "Une excellente porte d'entrée vers une SF d'idées, sans sacrifier le plaisir du récit.",
      en: "A fine gateway into idea-driven science fiction without sacrificing story."
    }
  },
  {
    id: "night-platform", genre: "polar", shelf: 0, size: "slim", colors: ["#343c3c","#151919"],
    title: { fr: "Quai de nuit", en: "Night Platform" },
    author: "Claire Monnet",
    tags: { fr: ["enquête","ville","nocturne"], en: ["mystery","city","night"] },
    summary: {
      fr: "Chaque jeudi à 23 h 17, le même train arrive vide sur un quai qui n'existe sur aucun plan.",
      en: "Every Thursday at 11:17 p.m., the same empty train arrives at a platform missing from every map."
    },
    review: {
      fr: "Une enquête compacte, sombre et élégante, avec une vraie personnalité visuelle.",
      en: "A compact, dark and elegant mystery with a strong visual identity."
    }
  },
  {
    id: "silent-room", genre: "polar", shelf: 2, size: "tall", colors: ["#4f2730","#1f1417"],
    title: { fr: "La Chambre silencieuse", en: "The Silent Room" },
    author: "Jonas Reeve",
    tags: { fr: ["psychologique","huis clos"], en: ["psychological","locked room"] },
    summary: {
      fr: "Six personnes, une maison isolée et une pièce dont personne ne reconnaît la clé.",
      en: "Six people, an isolated house and a room whose key nobody recognizes."
    },
    review: {
      fr: "On vient pour l'énigme, on reste pour les personnages et le sentiment constant que quelque chose cloche.",
      en: "You come for the puzzle and stay for the characters and the constant feeling that something is wrong."
    }
  },
  {
    id: "moon-pocket", genre: "jeunesse", shelf: 0, size: "short", colors: ["#6f6689","#342f4d"],
    title: { fr: "La Lune dans ma poche", en: "The Moon in My Pocket" },
    author: "Lina Bell",
    tags: { fr: ["rêve","8+","aventure"], en: ["dreams","8+","adventure"] },
    summary: {
      fr: "Une enfant découvre un soir un minuscule morceau de lune dans la poche de son manteau.",
      en: "One evening, a child finds a tiny piece of the moon in her coat pocket."
    },
    review: {
      fr: "Doux, drôle et poétique sans être mièvre : exactement le genre de livre que l'on a envie d'offrir.",
      en: "Gentle, funny and poetic without being sugary: exactly the sort of book you want to give."
    }
  },
  {
    id: "clockwork-fox", genre: "jeunesse", shelf: 1, size: "wide", colors: ["#b0724c","#54331f"],
    title: { fr: "Le Renard mécanique", en: "The Clockwork Fox" },
    author: "Theo March",
    tags: { fr: ["10+","aventure","mystère"], en: ["10+","adventure","mystery"] },
    summary: {
      fr: "Dans l'atelier de son grand-père, Milo réveille un renard mécanique qui connaît le chemin vers une ville disparue.",
      en: "In his grandfather's workshop, Milo wakes a clockwork fox that knows the road to a vanished city."
    },
    review: {
      fr: "Une aventure pleine de charme, idéale pour donner envie de passer du temps dans le rayon jeunesse.",
      en: "A charming adventure, ideal for making you want to linger in the young readers section."
    }
  }
];

const els = {
  body: document.body,
  genreNav: document.querySelector("#genreNav"),
  roomTitle: document.querySelector("#roomTitle"),
  roomIntro: document.querySelector("#roomIntro"),
  wallSign: document.querySelector("#wallSign"),
  shelfViewport: document.querySelector("#shelfViewport"),
  shelfTrack: document.querySelector("#shelfTrack"),
  searchInput: document.querySelector("#searchInput"),
  languageButton: document.querySelector("#languageButton"),
  brandTagline: document.querySelector("#brandTagline"),
  eyebrow: document.querySelector("#eyebrow"),
  scrollText: document.querySelector("#scrollText"),
  bookPanel: document.querySelector("#bookPanel"),
  panelBackdrop: document.querySelector("#panelBackdrop"),
  panelClose: document.querySelector("#panelClose"),
  panelCover: document.querySelector("#panelCover"),
  panelKicker: document.querySelector("#panelKicker"),
  panelTitle: document.querySelector("#panelTitle"),
  panelAuthor: document.querySelector("#panelAuthor"),
  panelTags: document.querySelector("#panelTags"),
  panelSummary: document.querySelector("#panelSummary"),
  reviewLabel: document.querySelector("#reviewLabel"),
  panelReview: document.querySelector("#panelReview"),
  offersTitle: document.querySelector("#offersTitle"),
  offersUpdated: document.querySelector("#offersUpdated"),
  offerList: document.querySelector("#offerList")
};

const stored = localStorage.getItem("libria-lang");
const browserLang = (navigator.language || "fr").slice(0,2);
const state = {
  lang: (stored || browserLang) === "en" ? "en" : "fr",
  genre: "fantasy",
  search: ""
};

function gradient(book) {
  return "linear-gradient(145deg," + book.colors[0] + "," + book.colors[1] + ")";
}

function currentBooks() {
  return books.filter(function(book) {
    if (book.genre !== state.genre) return false;
    if (!state.search) return true;
    const q = state.search.toLowerCase();
    return book.title[state.lang].toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.tags[state.lang].some(function(tag) { return tag.toLowerCase().includes(q); });
  });
}

function renderNav() {
  els.genreNav.innerHTML = "";
  Object.keys(genres).forEach(function(key) {
    const button = document.createElement("button");
    button.className = "genre-button" + (state.genre === key ? " active" : "");
    button.textContent = genres[key].label[state.lang];
    button.addEventListener("click", function() {
      state.genre = key;
      state.search = "";
      els.searchInput.value = "";
      render();
      els.shelfViewport.scrollTo({ left: 0, behavior: "smooth" });
    });
    els.genreNav.appendChild(button);
  });
}

function makeBook(book, sizeOverride) {
  const button = document.createElement("button");
  button.className = "book " + (sizeOverride || book.size || "");
  button.type = "button";
  button.style.setProperty("--cover-bg", gradient(book));
  button.setAttribute("aria-label", book.title[state.lang] + " — " + book.author);
  const spine = document.createElement("span");
  spine.className = "book-spine";
  spine.textContent = book.title[state.lang];
  button.appendChild(spine);
  button.addEventListener("click", function() { openBook(book); });
  return button;
}

function renderShelves() {
  const genre = genres[state.genre];
  const filtered = currentBooks();
  const allGenreBooks = books.filter(function(book) { return book.genre === state.genre; });
  els.shelfTrack.innerHTML = "";

  genre.shelves[state.lang].forEach(function(label, shelfIndex) {
    const unit = document.createElement("section");
    unit.className = "shelf-unit";
    const shell = document.createElement("div");
    shell.className = "shelf-case";
    const title = document.createElement("div");
    title.className = "shelf-label";
    title.textContent = label;

    let shelfBooks = filtered.filter(function(book) { return book.shelf === shelfIndex; });
    if (!shelfBooks.length) shelfBooks = filtered.length ? filtered : allGenreBooks;

    [0,1].forEach(function(rowIndex) {
      const row = document.createElement("div");
      row.className = "shelf-row";
      const count = rowIndex === 0 ? 8 : 9;
      for (let i = 0; i < count; i++) {
        if (!shelfBooks.length) break;
        const book = shelfBooks[i % shelfBooks.length];
        let size = book.size;
        if (i % 5 === 0) size = "slim";
        else if (i % 4 === 0) size = "short";
        row.appendChild(makeBook(book, size));
      }
      shell.appendChild(row);
    });

    unit.appendChild(title);
    unit.appendChild(shell);
    els.shelfTrack.appendChild(unit);
  });
}

function openBook(book) {
  const t = i18n[state.lang];
  els.panelCover.style.setProperty("--cover-bg", gradient(book));
  els.panelCover.dataset.title = book.title[state.lang];
  els.panelKicker.textContent = t.selection;
  els.panelTitle.textContent = book.title[state.lang];
  els.panelAuthor.textContent = book.author;
  els.panelTags.innerHTML = "";
  book.tags[state.lang].forEach(function(tag) {
    const span = document.createElement("span");
    span.textContent = tag;
    els.panelTags.appendChild(span);
  });
  els.panelSummary.textContent = book.summary[state.lang];
  els.reviewLabel.textContent = t.review;
  els.panelReview.textContent = book.review[state.lang];
  els.offersTitle.textContent = t.offers;
  els.offersUpdated.textContent = t.demo;
  els.offerList.innerHTML = "";

  demoOffers(state.lang).forEach(function(offer) {
    const row = document.createElement("div");
    row.className = "offer-row";

    const meta = document.createElement("div");
    const strong = document.createElement("strong");
    strong.textContent = offer.format;
    const detail = document.createElement("span");
    detail.textContent = offer.vendor + " · " + offer.price;
    meta.appendChild(strong);
    meta.appendChild(detail);

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = t.view;
    link.addEventListener("click", function(event) { event.preventDefault(); });

    row.appendChild(meta);
    row.appendChild(link);
    els.offerList.appendChild(row);
  });

  els.bookPanel.classList.add("open");
  els.panelBackdrop.classList.add("open");
  els.bookPanel.setAttribute("aria-hidden", "false");
}

function closeBook() {
  els.bookPanel.classList.remove("open");
  els.panelBackdrop.classList.remove("open");
  els.bookPanel.setAttribute("aria-hidden", "true");
}

function renderText() {
  const t = i18n[state.lang];
  const genre = genres[state.genre];
  els.body.dataset.theme = state.genre;
  els.roomTitle.textContent = genre.label[state.lang];
  els.roomIntro.textContent = genre.intro[state.lang];
  els.wallSign.textContent = genre.label[state.lang].toUpperCase();
  els.brandTagline.textContent = t.tagline;
  els.eyebrow.textContent = t.eyebrow;
  els.searchInput.placeholder = t.search;
  els.scrollText.textContent = t.scroll;
  els.languageButton.textContent = state.lang.toUpperCase();
  document.documentElement.lang = state.lang;
}

function render() {
  renderText();
  renderNav();
  renderShelves();
}

els.searchInput.addEventListener("input", function(event) {
  state.search = event.target.value.trim();
  renderShelves();
});

els.languageButton.addEventListener("click", function() {
  state.lang = state.lang === "fr" ? "en" : "fr";
  localStorage.setItem("libria-lang", state.lang);
  render();
});

els.panelClose.addEventListener("click", closeBook);
els.panelBackdrop.addEventListener("click", closeBook);
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeBook();
});

let dragging = false;
let startX = 0;
let startScroll = 0;

els.shelfViewport.addEventListener("pointerdown", function(event) {
  dragging = true;
  startX = event.clientX;
  startScroll = els.shelfViewport.scrollLeft;
  els.shelfViewport.setPointerCapture(event.pointerId);
});
els.shelfViewport.addEventListener("pointermove", function(event) {
  if (!dragging) return;
  els.shelfViewport.scrollLeft = startScroll - (event.clientX - startX) * 1.25;
});
els.shelfViewport.addEventListener("pointerup", function() { dragging = false; });
els.shelfViewport.addEventListener("pointercancel", function() { dragging = false; });
els.shelfViewport.addEventListener("wheel", function(event) {
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    event.preventDefault();
    els.shelfViewport.scrollLeft += event.deltaY;
  }
}, { passive: false });

render();