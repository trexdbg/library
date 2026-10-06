import { works, editionFor, coverUrl } from "./data/catalog.js";

const i18n = {
  fr: {
    tagline: "La bibliothèque vivante",
    eyebrow: "Explorez les rayons",
    search: "Rechercher un livre, un auteur, un univers...",
    scroll: "Molette, glisser ou balayer pour flâner",
    review: "Notre avis",
    edition: "Édition affichée",
    source: "Couverture de démonstration via Open Library.",
    selection: "Sélection Libria",
    languageName: "Français",
    menu: "Explorer",
    note: "Faites défiler la scène ou glissez les livres pour flâner dans le rayon.",
    discover: "Découvrir",
    overview: "Aperçu",
    critique: "Notre critique",
    author: "L’auteur",
    similar: "Similaires"
  },
  en: {
    tagline: "The living library",
    eyebrow: "Explore the shelves",
    search: "Search for a book, an author, a world...",
    scroll: "Scroll, drag or swipe to wander",
    review: "Our review",
    edition: "Displayed edition",
    source: "Demo cover provided via Open Library.",
    selection: "Libria selection",
    languageName: "English",
    menu: "Explore",
    note: "Scroll through the scene or swipe the books to wander along the shelves.",
    discover: "Discover",
    overview: "Overview",
    critique: "Our review",
    author: "The author",
    similar: "Similar"
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
      fr: ["Incontournables", "Magie & écoles", "Grandes aventures"],
      en: ["Essentials", "Magic & schools", "Great adventures"]
    },
    sign: { fr: "Grands univers", en: "Great worlds" }
  },
  scifi: {
    label: { fr: "Science-fiction", en: "Science fiction" },
    intro: {
      fr: "Des futurs possibles, des ailleurs vertigineux et des idées qui déplacent les frontières.",
      en: "Possible futures, dizzying worlds and ideas that move the frontier."
    },
    shelves: {
      fr: ["Mondes cultes", "Grandes idées", "Imaginaire français"],
      en: ["Iconic worlds", "Big ideas", "Further horizons"]
    },
    sign: { fr: "Au-delà du réel", en: "Beyond reality" }
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
    },
    sign: { fr: "Affaires classées", en: "Case files" }
  },
  jeunesse: {
    label: { fr: "Jeunesse", en: "Young readers" },
    intro: {
      fr: "Des histoires pour rêver, rire, grandir et revenir encore demander une dernière page.",
      en: "Stories to dream, laugh, grow and always ask for one more page."
    },
    shelves: {
      fr: ["Intemporels", "Premières aventures", "À lire ensemble"],
      en: ["Timeless", "First adventures", "Read together"]
    },
    sign: { fr: "Petites merveilles", en: "Little wonders" }
  }
};

const els = {
  body: document.body,
  genreNav: document.querySelector("#genreNav"),
  bottomRail: document.querySelector("#bottomRail"),
  roomTitle: document.querySelector("#roomTitle"),
  roomIntro: document.querySelector("#roomIntro"),
  shelfSignText: document.querySelector("#shelfSignText"),
  shelfTop: document.querySelector("#shelfTop"),
  shelfMiddle: document.querySelector("#shelfMiddle"),
  shelfBottom: document.querySelector("#shelfBottom"),
  libraryScene: document.querySelector("#libraryScene"),
  sceneImage: document.querySelector("#sceneImage"),
  searchInput: document.querySelector("#searchInput"),
  languageButton: document.querySelector("#languageButton"),
  brandTagline: document.querySelector("#brandTagline"),
  eyebrow: document.querySelector("#eyebrow"),
  scrollText: document.querySelector("#scrollText"),
  menuCaption: document.querySelector("#menuCaption"),
  genreNote: document.querySelector("#genreNote"),
  discoverButton: document.querySelector("#discoverButton"),
  homeButton: document.querySelector("#homeButton"),
  sceneHint: document.querySelector("#sceneHint"),
  bookPanel: document.querySelector("#bookPanel"),
  panelBackdrop: document.querySelector("#panelBackdrop"),
  panelClose: document.querySelector("#panelClose"),
  panelCover: document.querySelector("#panelCover"),
  panelKicker: document.querySelector("#panelKicker"),
  panelTitle: document.querySelector("#panelTitle"),
  panelSubtitle: document.querySelector("#panelSubtitle"),
  panelAuthor: document.querySelector("#panelAuthor"),
  panelTags: document.querySelector("#panelTags"),
  panelSummary: document.querySelector("#panelSummary"),
  reviewLabel: document.querySelector("#reviewLabel"),
  panelReview: document.querySelector("#panelReview"),
  editionLabel: document.querySelector("#editionLabel"),
  editionPublisher: document.querySelector("#editionPublisher"),
  editionLanguage: document.querySelector("#editionLanguage"),
  sourceNote: document.querySelector("#sourceNote"),
  tabOverview: document.querySelector("#tabOverview"),
  tabReview: document.querySelector("#tabReview"),
  tabAuthor: document.querySelector("#tabAuthor"),
  tabSimilar: document.querySelector("#tabSimilar")
};

const shelfEls = [els.shelfTop, els.shelfMiddle, els.shelfBottom];
const fillerPalette = ["#44372d", "#2f3c37", "#5a4033", "#37323a", "#66513c", "#25363c", "#4b2e32"];

function languageFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  return parts.find(function(part) {
    return part === "fr" || part === "en";
  }) || null;
}

function languageUrl(lang) {
  const url = new URL(window.location.href);
  const parts = url.pathname.split("/");
  const index = parts.findIndex(function(part) {
    return part === "fr" || part === "en";
  });

  if (index >= 0) {
    parts[index] = lang;
  } else {
    if (parts[parts.length - 1] !== "") parts.push("");
    parts.splice(parts.length - 1, 0, lang);
  }

  url.pathname = parts.join("/");
  url.search = "";
  return url.toString();
}

const stored = localStorage.getItem("libria-lang");
const browserLang = (navigator.language || "fr").slice(0, 2);
const routedLang = languageFromPath();

const state = {
  lang: routedLang || ((stored || browserLang) === "en" ? "en" : "fr"),
  genre: "fantasy",
  search: "",
  page: 0
};

function gradient(work) {
  return "linear-gradient(145deg," + work.colors[0] + "," + work.colors[1] + ")";
}

function availableWorks(genre = state.genre) {
  return works.filter(function(work) {
    return work.genre === genre && editionFor(work, state.lang);
  });
}

function visibleWorks() {
  const candidates = availableWorks();
  if (!state.search) return candidates;

  const q = state.search.toLowerCase();
  return candidates.filter(function(work) {
    const edition = editionFor(work, state.lang);
    return edition.title.toLowerCase().includes(q) ||
      work.author.toLowerCase().includes(q) ||
      edition.tags.some(function(tag) {
        return tag.toLowerCase().includes(q);
      });
  });
}

function genreKeys() {
  return Object.keys(genres).filter(function(key) {
    return availableWorks(key).length > 0;
  });
}

function selectGenre(key) {
  if (!genres[key] || !availableWorks(key).length) return;
  state.genre = key;
  state.page = 0;
  state.search = "";
  els.searchInput.value = "";
  closeBook();
  render();
  applySceneOffset(true);
}

function renderNav() {
  els.genreNav.innerHTML = "";
  els.bottomRail.innerHTML = "";

  genreKeys().forEach(function(key) {
    const genre = genres[key];

    const button = document.createElement("button");
    button.className = "genre-button" + (state.genre === key ? " active" : "");
    button.type = "button";
    button.textContent = genre.label[state.lang];
    button.addEventListener("click", function() {
      selectGenre(key);
    });
    els.genreNav.appendChild(button);

    const rail = document.createElement("button");
    rail.className = "rail-button" + (state.genre === key ? " active" : "");
    rail.type = "button";
    rail.textContent = genre.label[state.lang];
    rail.addEventListener("click", function() {
      selectGenre(key);
    });
    els.bottomRail.appendChild(rail);
  });
}

function makeFiller(index, shelfIndex) {
  const filler = document.createElement("span");
  filler.className = "book-filler";
  const width = 15 + ((index * 7 + shelfIndex * 5) % 17);
  const height = 76 + ((index * 17 + shelfIndex * 19) % 43);
  filler.style.setProperty("--w", width + "px");
  filler.style.setProperty("--h", height + "px");
  filler.style.setProperty("--fill", fillerPalette[(index + shelfIndex * 2) % fillerPalette.length]);
  filler.setAttribute("aria-hidden", "true");
  return filler;
}

function makeBookCard(work, index, featured) {
  const edition = editionFor(work, state.lang);
  const button = document.createElement("button");
  const sizeClass = work.size ? " size-" + work.size : "";

  button.className = "book-card" + sizeClass + (featured ? " featured" : "");
  button.type = "button";
  button.style.background = gradient(work);
  button.setAttribute("aria-label", edition.title + " — " + work.author);

  const image = document.createElement("img");
  image.loading = "lazy";
  image.src = coverUrl(edition, "M");
  image.alt = "";
  image.addEventListener("error", function() {
    image.remove();
  });

  const tooltip = document.createElement("span");
  tooltip.className = "book-tooltip";
  tooltip.textContent = edition.title + " · " + work.author;

  button.appendChild(image);
  button.appendChild(tooltip);

  button.addEventListener("click", function(event) {
    event.stopPropagation();
    if (button.classList.contains("pulling")) return;
    button.classList.add("pulling");
    window.setTimeout(function() {
      openBook(work);
      button.classList.remove("pulling");
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 220);
  });

  return button;
}

function populateShelf(target, shelfIndex, candidates) {
  target.innerHTML = "";
  if (!candidates.length) return;

  const realSlots = shelfIndex === 0 ? 7 : 8;
  const items = [];

  for (let i = 0; i < realSlots; i++) {
    const work = candidates[(i + shelfIndex) % candidates.length];
    items.push({ type: "book", work: work, featured: i === 2 && shelfIndex === 0 });

    if (i < realSlots - 1) {
      items.push({ type: "filler", index: i });
      if ((i + shelfIndex) % 2 === 0) items.push({ type: "filler", index: i + 8 });
    }
  }

  items.forEach(function(item, index) {
    if (item.type === "book") {
      target.appendChild(makeBookCard(item.work, index, item.featured));
    } else {
      target.appendChild(makeFiller(item.index, shelfIndex));
    }
  });
}

function renderShelves() {
  const filtered = visibleWorks();
  const all = availableWorks();
  const source = filtered.length ? filtered : all;

  shelfEls.forEach(function(target, shelfIndex) {
    let shelfWorks = source.filter(function(work) {
      return work.shelf === shelfIndex;
    });
    if (!shelfWorks.length) shelfWorks = source;
    populateShelf(target, shelfIndex, shelfWorks);
  });
}

function applySceneOffset(instant) {
  const maxPage = 3;
  state.page = Math.max(0, Math.min(maxPage, state.page));

  const shifts = [
    -state.page * 68,
    -state.page * 52,
    -state.page * 82
  ];

  shelfEls.forEach(function(el, index) {
    if (instant) el.style.transition = "none";
    el.style.setProperty("--shelf-shift", shifts[index] + "px");
    if (instant) {
      requestAnimationFrame(function() {
        el.style.transition = "";
      });
    }
  });

  document.documentElement.style.setProperty("--scene-pan", (-state.page * 7) + "px");
  document.documentElement.style.setProperty("--scene-tilt", (state.page * -0.12) + "deg");

  if (state.page > 0) {
    els.sceneHint.style.opacity = ".45";
  }
}

function moveScene(direction) {
  const previous = state.page;
  state.page = Math.max(0, Math.min(3, state.page + direction));
  if (state.page !== previous) applySceneOffset(false);
}

function setPanelCover(work, edition) {
  const fallback = gradient(work);
  const url = coverUrl(edition, "L");

  els.panelCover.classList.remove("has-cover");
  els.panelCover.style.backgroundImage = fallback;
  els.panelCover.dataset.title = edition.title;

  if (!url) return;

  const image = new Image();
  image.onload = function() {
    els.panelCover.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.02),rgba(0,0,0,.02)),url('" + url + "')";
    els.panelCover.classList.add("has-cover");
  };
  image.onerror = function() {
    els.panelCover.classList.remove("has-cover");
    els.panelCover.style.backgroundImage = fallback;
  };
  image.src = url;
}

function openBook(work) {
  const edition = editionFor(work, state.lang);
  if (!edition) return;
  const t = i18n[state.lang];

  setPanelCover(work, edition);
  els.panelKicker.textContent = t.selection;
  els.panelTitle.textContent = edition.title;
  els.panelSubtitle.textContent = edition.subtitle || "";
  els.panelAuthor.textContent = work.author;
  els.panelTags.innerHTML = "";

  edition.tags.forEach(function(tag) {
    const span = document.createElement("span");
    span.textContent = tag;
    els.panelTags.appendChild(span);
  });

  els.panelSummary.textContent = edition.summary;
  els.reviewLabel.textContent = t.review;
  els.panelReview.textContent = edition.review;
  els.editionLabel.textContent = t.edition;
  els.editionPublisher.textContent = edition.publisher || "";
  els.editionLanguage.textContent = t.languageName;
  els.sourceNote.textContent = t.source;

  els.bookPanel.classList.add("open");
  els.panelBackdrop.classList.add("open");
  els.bookPanel.setAttribute("aria-hidden", "false");
}

function closeBook() {
  els.bookPanel.classList.remove("open");
  els.panelBackdrop.classList.remove("open");
  els.bookPanel.setAttribute("aria-hidden", "true");
}

function firstGenreWithBooks(lang) {
  return Object.keys(genres).find(function(key) {
    return works.some(function(work) {
      return work.genre === key && editionFor(work, lang);
    });
  }) || "fantasy";
}

function renderText() {
  const t = i18n[state.lang];
  const genre = genres[state.genre];

  els.body.dataset.theme = state.genre;
  els.roomTitle.textContent = genre.label[state.lang];
  els.roomIntro.textContent = genre.intro[state.lang];
  els.shelfSignText.textContent = genre.sign[state.lang];
  els.brandTagline.textContent = t.tagline;
  els.eyebrow.textContent = t.eyebrow;
  els.searchInput.placeholder = t.search;
  els.scrollText.textContent = t.scroll;
  els.languageButton.textContent = state.lang.toUpperCase();
  els.menuCaption.textContent = t.menu;
  els.genreNote.textContent = t.note;
  els.discoverButton.textContent = t.discover;
  els.tabOverview.textContent = t.overview;
  els.tabReview.textContent = t.critique;
  els.tabAuthor.textContent = t.author;
  els.tabSimilar.textContent = t.similar;

  document.documentElement.lang = state.lang;
}

function render() {
  if (!availableWorks(state.genre).length) {
    state.genre = firstGenreWithBooks(state.lang);
  }

  renderText();
  renderNav();
  renderShelves();
  applySceneOffset(true);
}

els.searchInput.addEventListener("input", function(event) {
  state.search = event.target.value.trim();
  state.page = 0;
  renderShelves();
  applySceneOffset(true);
});

els.languageButton.addEventListener("click", function() {
  const nextLang = state.lang === "fr" ? "en" : "fr";
  localStorage.setItem("libria-lang", nextLang);
  window.location.href = languageUrl(nextLang);
});

els.homeButton.addEventListener("click", function() {
  const preferred = availableWorks("fantasy").length ? "fantasy" : firstGenreWithBooks(state.lang);
  selectGenre(preferred);
});

els.discoverButton.addEventListener("click", function() {
  const keys = genreKeys();
  const currentIndex = keys.indexOf(state.genre);
  const next = keys[(currentIndex + 1) % keys.length];
  selectGenre(next);
});

els.panelClose.addEventListener("click", closeBook);
els.panelBackdrop.addEventListener("click", closeBook);

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeBook();
  if (event.key === "ArrowRight" && !els.bookPanel.classList.contains("open")) moveScene(1);
  if (event.key === "ArrowLeft" && !els.bookPanel.classList.contains("open")) moveScene(-1);
});

let wheelLock = false;
els.libraryScene.addEventListener("wheel", function(event) {
  if (els.bookPanel.classList.contains("open")) return;
  const amount = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  if (Math.abs(amount) < 8) return;
  event.preventDefault();

  if (wheelLock) return;
  wheelLock = true;
  moveScene(amount > 0 ? 1 : -1);
  window.setTimeout(function() {
    wheelLock = false;
  }, 230);
}, { passive: false });

let pointerStartX = null;
let pointerStartY = null;
els.libraryScene.addEventListener("pointerdown", function(event) {
  if (event.target.closest(".book-card") || event.target.closest("button")) return;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});

els.libraryScene.addEventListener("pointerup", function(event) {
  if (pointerStartX === null) return;
  const dx = event.clientX - pointerStartX;
  const dy = event.clientY - pointerStartY;
  pointerStartX = null;
  pointerStartY = null;

  if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) {
    moveScene(dx < 0 ? 1 : -1);
  }
});

render();