import { works, editionFor, coverUrl } from "./data/catalog.js";

const i18n = {
  fr: {
    tagline: "La bibliothèque vivante",
    eyebrow: "Explorez les rayons",
    search: "Rechercher un livre...",
    scroll: "Faites défiler les rayons",
    review: "Notre avis",
    edition: "Édition affichée",
    source: "Couverture de démonstration via Open Library.",
    selection: "Sélection Libria",
    languageName: "Français"
  },
  en: {
    tagline: "The living library",
    eyebrow: "Explore the shelves",
    search: "Search for a book...",
    scroll: "Browse the shelves",
    review: "Our review",
    edition: "Displayed edition",
    source: "Demo cover provided via Open Library.",
    selection: "Libria selection",
    languageName: "English"
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
    }
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
      fr: ["Intemporels", "Premières aventures", "À lire ensemble"],
      en: ["Timeless", "First adventures", "Read together"]
    }
  }
};

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
  panelSubtitle: document.querySelector("#panelSubtitle"),
  panelAuthor: document.querySelector("#panelAuthor"),
  panelTags: document.querySelector("#panelTags"),
  panelSummary: document.querySelector("#panelSummary"),
  reviewLabel: document.querySelector("#reviewLabel"),
  panelReview: document.querySelector("#panelReview"),
  editionLabel: document.querySelector("#editionLabel"),
  editionPublisher: document.querySelector("#editionPublisher"),
  editionLanguage: document.querySelector("#editionLanguage"),
  sourceNote: document.querySelector("#sourceNote")
};

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
  search: ""
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

function renderNav() {
  els.genreNav.innerHTML = "";

  Object.keys(genres).forEach(function(key) {
    if (!availableWorks(key).length) return;

    const button = document.createElement("button");
    button.className = "genre-button" + (state.genre === key ? " active" : "");
    button.textContent = genres[key].label[state.lang];

    button.addEventListener("click", function() {
      state.genre = key;
      state.search = "";
      els.searchInput.value = "";
      closeBook();
      render();
      els.shelfViewport.scrollTo({ left: 0, behavior: "smooth" });
    });

    els.genreNav.appendChild(button);
  });
}

function makeBook(work, sizeOverride) {
  const edition = editionFor(work, state.lang);
  const button = document.createElement("button");

  button.className = "book " + (sizeOverride || work.size || "");
  button.type = "button";
  button.style.setProperty("--cover-bg", gradient(work));
  button.setAttribute("aria-label", edition.title + " — " + work.author);

  const cover = coverUrl(edition, "M");
  if (cover) {
    button.style.setProperty("--book-cover", "url('" + cover + "')");
    button.classList.add("with-cover");
  }

  const spine = document.createElement("span");
  spine.className = "book-spine";
  spine.textContent = edition.title;

  button.appendChild(spine);
  button.addEventListener("click", function() {
    openBook(work);
  });

  return button;
}

function renderShelves() {
  const genre = genres[state.genre];
  const filtered = visibleWorks();
  const all = availableWorks();

  els.shelfTrack.innerHTML = "";

  genre.shelves[state.lang].forEach(function(label, shelfIndex) {
    const unit = document.createElement("section");
    unit.className = "shelf-unit";

    const shell = document.createElement("div");
    shell.className = "shelf-case";

    const title = document.createElement("div");
    title.className = "shelf-label";
    title.textContent = label;

    let shelfBooks = filtered.filter(function(work) {
      return work.shelf === shelfIndex;
    });

    if (!shelfBooks.length) {
      shelfBooks = filtered.length ? filtered : all;
    }

    [0, 1].forEach(function(rowIndex) {
      const row = document.createElement("div");
      row.className = "shelf-row";
      const count = rowIndex === 0 ? 8 : 9;

      for (let i = 0; i < count; i++) {
        if (!shelfBooks.length) break;

        const work = shelfBooks[i % shelfBooks.length];
        let size = work.size;

        if (i % 5 === 0) size = "slim";
        else if (i % 4 === 0) size = "short";

        row.appendChild(makeBook(work, size));
      }

      shell.appendChild(row);
    });

    unit.appendChild(title);
    unit.appendChild(shell);
    els.shelfTrack.appendChild(unit);
  });
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
      "linear-gradient(rgba(0,0,0,.03),rgba(0,0,0,.03)),url('" + url + "')";
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
  const nextLang = state.lang === "fr" ? "en" : "fr";
  localStorage.setItem("libria-lang", nextLang);
  window.location.href = languageUrl(nextLang);
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
  els.shelfViewport.scrollLeft =
    startScroll - (event.clientX - startX) * 1.25;
});

els.shelfViewport.addEventListener("pointerup", function() {
  dragging = false;
});

els.shelfViewport.addEventListener("pointercancel", function() {
  dragging = false;
});

els.shelfViewport.addEventListener("wheel", function(event) {
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    event.preventDefault();
    els.shelfViewport.scrollLeft += event.deltaY;
  }
}, { passive: false });

els.shelfViewport.addEventListener("scroll", function() {
  const x = els.shelfViewport.scrollLeft;
  document.documentElement.style.setProperty("--scene-shift", (x * -0.035) + "px");
  document.documentElement.style.setProperty("--foreground-shift", (x * -0.07) + "px");
});

render();