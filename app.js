import { works, editionFor, coverUrl } from "./data/catalog.js";

const copy = {
  fr: {
    brand: "La bibliothèque vivante",
    locationHall: "Hall",
    searchButton: "Rechercher",
    walkHint: "Molette, glisser ou balayer pour se promener",
    hallEyebrow: "Entrez. Prenez votre temps.",
    hallTitle: "Une bibliothèque à parcourir, pas un catalogue à faire défiler.",
    hallIntro: "Avancez de salle en salle, arrêtez-vous devant un rayon et laissez un livre attirer votre regard.",
    enter: "Commencer la promenade",
    search: "Chercher dans la bibliothèque",
    searchEyebrow: "Catalogue Libria",
    searchTitle: "Trouver un livre",
    searchPlaceholder: "Titre, auteur, univers…",
    noResults: "Aucun livre ne correspond à cette recherche.",
    selection: "Sélection Libria",
    review: "Notre regard",
    edition: "Édition présentée",
    language: "Français",
    roomEyebrow: "Salle",
    shelfLabel: "À portée de main",
    openBook: "Ouvrir",
    roomCount: "ouvrages dans cette salle",
    rooms: {
      fantasy: {
        label: "Fantasy",
        title: "La galerie des mondes",
        intro: "Des cartes oubliées, des royaumes anciens et des quêtes qui commencent au détour d'un rayon.",
        marker: "Aile I"
      },
      scifi: {
        label: "Science-fiction",
        title: "L'observatoire",
        intro: "Des futurs possibles, des civilisations lointaines et des idées assez vastes pour déplacer les murs.",
        marker: "Aile II"
      },
      polar: {
        label: "Polar",
        title: "Le cabinet des ombres",
        intro: "Ici, chaque silence est un indice et chaque couverture promet une nuit un peu plus longue.",
        marker: "Aile III"
      },
      jeunesse: {
        label: "Jeunesse",
        title: "Le salon des merveilles",
        intro: "Des histoires pour rêver, grandir et retrouver l'émerveillement d'une première bibliothèque.",
        marker: "Aile IV"
      }
    }
  },
  en: {
    brand: "The living library",
    locationHall: "Hall",
    searchButton: "Search",
    walkHint: "Scroll, drag or swipe to wander",
    hallEyebrow: "Come in. Take your time.",
    hallTitle: "A library to wander through, not a catalogue to scroll.",
    hallIntro: "Move from room to room, stop by a shelf and let a book catch your eye.",
    enter: "Begin the walk",
    search: "Search the library",
    searchEyebrow: "Libria catalogue",
    searchTitle: "Find a book",
    searchPlaceholder: "Title, author, world…",
    noResults: "No book matches this search.",
    selection: "Libria selection",
    review: "Our take",
    edition: "Featured edition",
    language: "English",
    roomEyebrow: "Room",
    shelfLabel: "Within reach",
    openBook: "Open",
    roomCount: "books in this room",
    rooms: {
      fantasy: {
        label: "Fantasy",
        title: "The gallery of worlds",
        intro: "Forgotten maps, ancient kingdoms and quests waiting at the turn of a shelf.",
        marker: "Wing I"
      },
      scifi: {
        label: "Science fiction",
        title: "The observatory",
        intro: "Possible futures, distant civilisations and ideas large enough to move the walls.",
        marker: "Wing II"
      },
      polar: {
        label: "Crime",
        title: "The cabinet of shadows",
        intro: "Here every silence is a clue and every cover promises a slightly longer night.",
        marker: "Wing III"
      },
      jeunesse: {
        label: "Young readers",
        title: "The room of wonders",
        intro: "Stories to dream, grow and rediscover the wonder of a first library.",
        marker: "Wing IV"
      }
    }
  }
};

const genreOrder = ["fantasy", "scifi", "polar", "jeunesse"];

const els = {
  body: document.body,
  world: document.querySelector("#world"),
  viewport: document.querySelector("#viewport"),
  homeButton: document.querySelector("#homeButton"),
  brandTagline: document.querySelector("#brandTagline"),
  locationLabel: document.querySelector("#locationLabel"),
  searchButton: document.querySelector("#searchButton"),
  searchButtonLabel: document.querySelector("#searchButtonLabel"),
  languageButton: document.querySelector("#languageButton"),
  walkHintText: document.querySelector("#walkHintText"),
  previousRoom: document.querySelector("#previousRoom"),
  nextRoom: document.querySelector("#nextRoom"),
  compassRooms: document.querySelector("#compassRooms"),
  searchDialog: document.querySelector("#searchDialog"),
  searchEyebrow: document.querySelector("#searchEyebrow"),
  searchTitle: document.querySelector("#searchTitle"),
  searchInput: document.querySelector("#searchInput"),
  searchResults: document.querySelector("#searchResults"),
  bookDialog: document.querySelector("#bookDialog"),
  bookCover: document.querySelector("#bookCover"),
  bookKicker: document.querySelector("#bookKicker"),
  bookTitle: document.querySelector("#bookTitle"),
  bookSubtitle: document.querySelector("#bookSubtitle"),
  bookAuthor: document.querySelector("#bookAuthor"),
  bookTags: document.querySelector("#bookTags"),
  bookSummary: document.querySelector("#bookSummary"),
  reviewLabel: document.querySelector("#reviewLabel"),
  bookReview: document.querySelector("#bookReview"),
  editionLabel: document.querySelector("#editionLabel"),
  editionPublisher: document.querySelector("#editionPublisher"),
  editionLanguage: document.querySelector("#editionLanguage")
};

function languageFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  return parts.find((part) => part === "fr" || part === "en") || null;
}

function languageUrl(lang) {
  const url = new URL(window.location.href);
  const parts = url.pathname.split("/");
  const current = parts.findIndex((part) => part === "fr" || part === "en");

  if (current >= 0) {
    parts[current] = lang;
    url.pathname = parts.join("/");
  } else {
    const base = url.pathname.replace(/index\\.html$/i, "").replace(/\\/?$/, "/");
    url.pathname = base + lang + "/";
  }

  url.search = "";
  url.hash = "";
  return url.toString();
}

const storedLang = localStorage.getItem("libria-lang");
const browserLang = (navigator.language || "fr").slice(0, 2);
const state = {
  lang: languageFromPath() || ((storedLang || browserLang) === "en" ? "en" : "fr"),
  roomIndex: 0,
  roomWidth: window.innerWidth,
  cameraCurrent: 0,
  cameraTarget: 0,
  pointerId: null,
  pointerStartX: 0,
  pointerStartTarget: 0,
  wheelLocked: false,
  hasMoved: false
};

function t() {
  return copy[state.lang];
}

function workAvailable(work) {
  return Boolean(editionFor(work, state.lang));
}

function worksForGenre(genre) {
  return works.filter((work) => work.genre === genre && workAvailable(work));
}

function availableGenres() {
  return genreOrder.filter((genre) => worksForGenre(genre).length > 0);
}

function rooms() {
  return ["hall", ...availableGenres()];
}

function gradient(work) {
  return `linear-gradient(145deg, ${work.colors[0]}, ${work.colors[1]})`;
}

function createHall() {
  const room = document.createElement("section");
  room.className = "room room--hall";
  room.dataset.room = "hall";
  room.innerHTML = `
    <div class="room__backdrop" aria-hidden="true"></div>
    <div class="room__light" aria-hidden="true"></div>
    <div class="room__architecture" aria-hidden="true">
      <span class="arch arch--left"></span>
      <span class="arch arch--right"></span>
    </div>
    <div class="hall-copy">
      <p class="room-marker">${t().hallEyebrow}</p>
      <h1>${t().hallTitle}</h1>
      <p class="hall-copy__intro">${t().hallIntro}</p>
      <div class="hall-actions">
        <button class="primary-action" id="enterLibrary" type="button">
          <span>${t().enter}</span><span aria-hidden="true">→</span>
        </button>
        <button class="text-action" id="hallSearch" type="button">
          <span aria-hidden="true">⌕</span><span>${t().search}</span>
        </button>
      </div>
    </div>
    <div class="hall-plaque" aria-hidden="true">
      <span>EST.</span><strong>LIBRIA</strong><span>MMXXVI</span>
    </div>
    <div class="room__foreground room__foreground--left" aria-hidden="true"></div>
    <div class="room__foreground room__foreground--right" aria-hidden="true"></div>
  `;
  return room;
}

function createBookButton(work) {
  const edition = editionFor(work, state.lang);
  const button = document.createElement("button");
  button.type = "button";
  button.className = `display-book size-${work.size || "tall"}`;
  button.dataset.workId = work.id;
  button.setAttribute("aria-label", `${edition.title} — ${work.author}`);
  button.style.setProperty("--book-a", work.colors[0]);
  button.style.setProperty("--book-b", work.colors[1]);

  const cover = document.createElement("span");
  cover.className = "display-book__cover";
  cover.style.background = gradient(work);

  const imageUrl = coverUrl(edition, "L");
  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => img.remove());
    cover.appendChild(img);
  }

  const caption = document.createElement("span");
  caption.className = "display-book__caption";
  caption.innerHTML = `<strong>${edition.title}</strong><small>${work.author}</small>`;

  button.append(cover, caption);
  button.addEventListener("click", () => openBook(work));
  return button;
}

function createGenreRoom(genre) {
  const meta = t().rooms[genre];
  const roomWorks = worksForGenre(genre);
  const room = document.createElement("section");
  room.className = `room room--${genre}`;
  room.dataset.room = genre;

  room.innerHTML = `
    <div class="room__backdrop" aria-hidden="true"></div>
    <div class="room__light" aria-hidden="true"></div>
    <div class="room__architecture" aria-hidden="true">
      <span class="arch arch--left"></span>
      <span class="arch arch--right"></span>
    </div>
    <div class="room-copy">
      <div class="room-copy__index">
        <span>${meta.marker}</span>
        <span class="room-copy__rule"></span>
        <span>${String(roomWorks.length).padStart(2, "0")}</span>
      </div>
      <p class="room-marker">${t().roomEyebrow} · ${meta.label}</p>
      <h2>${meta.title}</h2>
      <p>${meta.intro}</p>
    </div>
    <div class="collection">
      <div class="collection__heading">
        <span>${t().shelfLabel}</span>
        <small>${roomWorks.length} ${t().roomCount}</small>
      </div>
      <div class="display-books" data-books></div>
      <div class="collection__shelf" aria-hidden="true"></div>
    </div>
    <div class="room-number" aria-hidden="true">${meta.marker}</div>
    <div class="room__foreground room__foreground--left" aria-hidden="true"></div>
    <div class="room__foreground room__foreground--right" aria-hidden="true"></div>
  `;

  const books = room.querySelector("[data-books]");
  roomWorks.forEach((work) => books.appendChild(createBookButton(work)));
  return room;
}

function renderWorld() {
  els.world.innerHTML = "";
  els.world.appendChild(createHall());
  availableGenres().forEach((genre) => els.world.appendChild(createGenreRoom(genre)));

  const enter = document.querySelector("#enterLibrary");
  const hallSearch = document.querySelector("#hallSearch");
  enter?.addEventListener("click", () => goToRoom(1));
  hallSearch?.addEventListener("click", openSearch);
}

function renderCompass() {
  els.compassRooms.innerHTML = "";
  rooms().forEach((key, index) => {
    const label = key === "hall" ? t().locationHall : t().rooms[key].label;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "compass__room";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", label);
    button.innerHTML = `<span></span><small>${label}</small>`;
    button.addEventListener("click", () => goToRoom(index));
    els.compassRooms.appendChild(button);
  });
  updateNavigationState();
}

function renderStaticText() {
  document.documentElement.lang = state.lang;
  els.brandTagline.textContent = t().brand;
  els.searchButtonLabel.textContent = t().searchButton;
  els.walkHintText.textContent = t().walkHint;
  els.searchEyebrow.textContent = t().searchEyebrow;
  els.searchTitle.textContent = t().searchTitle;
  els.searchInput.placeholder = t().searchPlaceholder;
  els.bookKicker.textContent = t().selection;
  els.reviewLabel.textContent = t().review;
  els.editionLabel.textContent = t().edition;

  const nextLang = state.lang === "fr" ? "en" : "fr";
  els.languageButton.textContent = nextLang.toUpperCase();
  els.languageButton.href = languageUrl(nextLang);
  els.languageButton.hreflang = nextLang;
}

function resizeCamera() {
  const oldWidth = state.roomWidth || window.innerWidth;
  const fractional = oldWidth ? state.cameraTarget / oldWidth : state.roomIndex;
  state.roomWidth = els.viewport.clientWidth || window.innerWidth;
  state.roomIndex = Math.max(0, Math.min(rooms().length - 1, Math.round(fractional)));
  state.cameraTarget = state.roomIndex * state.roomWidth;
  state.cameraCurrent = state.cameraTarget;
  applyCamera();
}

function maxCamera() {
  return Math.max(0, (rooms().length - 1) * state.roomWidth);
}

function applyCamera() {
  els.world.style.transform = `translate3d(${-state.cameraCurrent}px, 0, 0)`;

  const roomEls = els.world.querySelectorAll(".room");
  roomEls.forEach((room, index) => {
    const local = (state.cameraCurrent - index * state.roomWidth) / state.roomWidth;
    const bounded = Math.max(-1.5, Math.min(1.5, local));
    room.style.setProperty("--room-offset", bounded.toFixed(3));
    room.classList.toggle("is-current", Math.abs(local) < 0.5);
  });

  const nearest = Math.max(0, Math.min(rooms().length - 1, Math.round(state.cameraCurrent / state.roomWidth)));
  if (nearest !== state.roomIndex) {
    state.roomIndex = nearest;
    updateNavigationState();
  }
}

function animateCamera() {
  const distance = state.cameraTarget - state.cameraCurrent;
  if (Math.abs(distance) < 0.25) {
    state.cameraCurrent = state.cameraTarget;
  } else {
    state.cameraCurrent += distance * 0.115;
  }
  applyCamera();
  requestAnimationFrame(animateCamera);
}

function markMoved() {
  if (state.hasMoved) return;
  state.hasMoved = true;
  document.body.classList.add("has-walked");
}

function goToRoom(index) {
  const targetIndex = Math.max(0, Math.min(rooms().length - 1, index));
  state.roomIndex = targetIndex;
  state.cameraTarget = targetIndex * state.roomWidth;
  markMoved();
  updateNavigationState();
}

function updateNavigationState() {
  const key = rooms()[state.roomIndex] || "hall";
  const label = key === "hall" ? t().locationHall : t().rooms[key].label;
  els.locationLabel.textContent = label;
  els.body.dataset.room = key;

  els.compassRooms.querySelectorAll(".compass__room").forEach((button, index) => {
    const active = index === state.roomIndex;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "location");
    else button.removeAttribute("aria-current");
  });

  els.previousRoom.disabled = state.roomIndex === 0;
  els.nextRoom.disabled = state.roomIndex === rooms().length - 1;
}

function openSearch() {
  renderSearchResults("");
  if (!els.searchDialog.open) els.searchDialog.showModal();
  requestAnimationFrame(() => els.searchInput.focus());
}

function searchableText(work, edition) {
  const room = t().rooms[work.genre]?.label || work.genre;
  return [edition.title, edition.subtitle, work.author, room, ...edition.tags].join(" ").toLowerCase();
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const matches = works
    .filter(workAvailable)
    .filter((work) => {
      const edition = editionFor(work, state.lang);
      return !q || searchableText(work, edition).includes(q);
    });

  els.searchResults.innerHTML = "";
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = t().noResults;
    els.searchResults.appendChild(empty);
    return;
  }

  matches.forEach((work) => {
    const edition = editionFor(work, state.lang);
    const result = document.createElement("button");
    result.type = "button";
    result.className = "search-result";

    const thumb = document.createElement("span");
    thumb.className = "search-result__cover";
    thumb.style.background = gradient(work);
    const url = coverUrl(edition, "S");
    if (url) {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "";
      img.loading = "lazy";
      img.addEventListener("error", () => img.remove());
      thumb.appendChild(img);
    }

    const text = document.createElement("span");
    text.className = "search-result__text";
    text.innerHTML = `<strong>${edition.title}</strong><small>${work.author} · ${t().rooms[work.genre].label}</small>`;

    const arrow = document.createElement("span");
    arrow.className = "search-result__arrow";
    arrow.textContent = "→";

    result.append(thumb, text, arrow);
    result.addEventListener("click", () => {
      const target = rooms().indexOf(work.genre);
      els.searchDialog.close();
      if (target >= 0) goToRoom(target);
      window.setTimeout(() => openBook(work), 620);
    });
    els.searchResults.appendChild(result);
  });
}

function openBook(work) {
  const edition = editionFor(work, state.lang);
  if (!edition) return;

  els.bookKicker.textContent = `${t().selection} · ${t().rooms[work.genre].label}`;
  els.bookTitle.textContent = edition.title;
  els.bookSubtitle.textContent = edition.subtitle || "";
  els.bookAuthor.textContent = work.author;
  els.bookSummary.textContent = edition.summary;
  els.bookReview.textContent = edition.review;
  els.reviewLabel.textContent = t().review;
  els.editionLabel.textContent = t().edition;
  els.editionPublisher.textContent = edition.publisher || "";
  els.editionLanguage.textContent = t().language;

  els.bookTags.innerHTML = "";
  edition.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    els.bookTags.appendChild(span);
  });

  els.bookCover.classList.remove("has-image");
  els.bookCover.style.backgroundImage = gradient(work);
  els.bookCover.dataset.title = edition.title;

  const url = coverUrl(edition, "L");
  if (url) {
    const image = new Image();
    image.onload = () => {
      els.bookCover.style.backgroundImage = `url("${url}")`;
      els.bookCover.classList.add("has-image");
    };
    image.src = url;
  }

  if (!els.bookDialog.open) els.bookDialog.showModal();
}

els.searchInput.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

els.searchButton.addEventListener("click", openSearch);
els.homeButton.addEventListener("click", () => goToRoom(0));
els.previousRoom.addEventListener("click", () => goToRoom(state.roomIndex - 1));
els.nextRoom.addEventListener("click", () => goToRoom(state.roomIndex + 1));

els.languageButton.addEventListener("click", () => {
  const nextLang = state.lang === "fr" ? "en" : "fr";
  localStorage.setItem("libria-lang", nextLang);
});

els.viewport.addEventListener("wheel", (event) => {
  if (els.searchDialog.open || els.bookDialog.open) return;
  const amount = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  if (Math.abs(amount) < 7) return;
  event.preventDefault();
  if (state.wheelLocked) return;

  state.wheelLocked = true;
  goToRoom(state.roomIndex + (amount > 0 ? 1 : -1));
  window.setTimeout(() => {
    state.wheelLocked = false;
  }, 620);
}, { passive: false });

els.viewport.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button, a")) return;
  state.pointerId = event.pointerId;
  state.pointerStartX = event.clientX;
  state.pointerStartTarget = state.cameraTarget;
  els.viewport.setPointerCapture?.(event.pointerId);
  els.viewport.classList.add("is-dragging");
});

els.viewport.addEventListener("pointermove", (event) => {
  if (state.pointerId !== event.pointerId) return;
  const dx = event.clientX - state.pointerStartX;
  state.cameraTarget = Math.max(0, Math.min(maxCamera(), state.pointerStartTarget - dx * 1.05));
  markMoved();
});

function finishPointer(event) {
  if (state.pointerId !== event.pointerId) return;
  state.pointerId = null;
  els.viewport.classList.remove("is-dragging");
  const nearest = Math.round(state.cameraTarget / state.roomWidth);
  goToRoom(nearest);
}

els.viewport.addEventListener("pointerup", finishPointer);
els.viewport.addEventListener("pointercancel", finishPointer);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !els.searchDialog.open && !els.bookDialog.open) {
    event.preventDefault();
    openSearch();
    return;
  }
  if (els.searchDialog.open || els.bookDialog.open) return;
  if (event.key === "ArrowRight") goToRoom(state.roomIndex + 1);
  if (event.key === "ArrowLeft") goToRoom(state.roomIndex - 1);
  if (event.key === "Home") goToRoom(0);
});

window.addEventListener("resize", resizeCamera);

renderStaticText();
renderWorld();
renderCompass();
resizeCamera();
animateCamera();
