// Catalogue éditorial.
// Une entrée = une œuvre. Chaque langue possède sa propre édition.
// Les couvertures de démonstration sont servies par Open Library Covers API.

export const works = [
  {
    id: "fellowship-of-the-ring",
    genre: "fantasy",
    shelf: 0,
    size: "tall",
    colors: ["#315345", "#152820"],
    author: "J. R. R. Tolkien",
    editions: {
      fr: {
        title: "La Communauté de l'Anneau",
        subtitle: "Le Seigneur des Anneaux — Tome I",
        publisher: "Christian Bourgois",
        olid: "OL18928910M",
        tags: ["Fantasy épique", "Terre du Milieu", "quête"],
        summary: "Frodon hérite d'un anneau dont le destin dépasse largement la Comté. Commence alors un voyage à travers la Terre du Milieu pour empêcher son pouvoir de retomber entre de mauvaises mains.",
        review: "Le monument de la fantasy moderne. À placer très tôt dans la promenade : c'est exactement le type de livre que l'on s'attend à trouver dans une grande bibliothèque."
      },
      en: {
        title: "The Fellowship of the Ring",
        subtitle: "The Lord of the Rings — Part I",
        publisher: "Houghton Mifflin",
        olid: "OL26451900M",
        tags: ["Epic fantasy", "Middle-earth", "quest"],
        summary: "Frodo inherits a ring whose fate reaches far beyond the Shire and begins a journey across Middle-earth to keep its power from returning to the enemy.",
        review: "A cornerstone of modern fantasy and a natural anchor for the first shelf of an immersive fantasy room."
      }
    }
  },
  {
    id: "harry-potter-1",
    genre: "fantasy",
    shelf: 1,
    size: "wide",
    colors: ["#713b31", "#2e1b19"],
    author: "J. K. Rowling",
    editions: {
      fr: {
        title: "Harry Potter à l'école des sorciers",
        subtitle: "Harry Potter — Tome 1",
        publisher: "Gallimard Jeunesse",
        olid: "OL26142480M",
        tags: ["Magie", "école", "jeunesse"],
        summary: "À onze ans, Harry découvre qu'il appartient au monde des sorciers et rejoint Poudlard, une école où l'émerveillement côtoie déjà de sérieux dangers.",
        review: "Un excellent livre-passerelle : immédiatement reconnaissable, familial et parfait pour montrer que les rayons peuvent mélanger classiques populaires et découvertes."
      },
      en: {
        title: "Harry Potter and the Philosopher's Stone",
        subtitle: "Harry Potter — Book 1",
        publisher: "Bloomsbury",
        olid: "OL61027603M",
        tags: ["Magic", "school", "young readers"],
        summary: "At eleven, Harry discovers that he belongs to the wizarding world and enters Hogwarts, where wonder and danger arrive together.",
        review: "An instantly recognisable gateway book that makes the virtual shelves feel familiar from the very first visit."
      }
    }
  },
  {
    id: "dune",
    genre: "scifi",
    shelf: 0,
    size: "tall",
    colors: ["#9b6640", "#40281e"],
    author: "Frank Herbert",
    editions: {
      fr: {
        title: "Dune",
        subtitle: "Le cycle de Dune",
        publisher: "Pocket",
        olid: "OL27031171M",
        tags: ["Science-fiction", "politique", "écologie"],
        summary: "Sur Arrakis, planète désertique au cœur des rivalités impériales, Paul Atréides découvre un monde où se croisent pouvoir, religion, écologie et destin.",
        review: "Une œuvre idéale pour notre concept : riche, immédiatement identifiable et capable d'ouvrir plusieurs chemins de découverte vers la politique, l'écologie ou le space opera."
      },
      en: {
        title: "Dune",
        subtitle: "Dune — Book 1",
        publisher: "Ace",
        isbn: "9780441172719",
        tags: ["Science fiction", "politics", "ecology"],
        summary: "On the desert planet Arrakis, Paul Atreides enters a world shaped by imperial rivalry, religion, ecology and destiny.",
        review: "A perfect discovery hub: iconic on its own, yet connected to politics, ecology, adventure and the wider space-opera tradition."
      }
    }
  },
  {
    id: "foundation",
    genre: "scifi",
    shelf: 1,
    size: "short",
    colors: ["#566a75", "#26343c"],
    author: "Isaac Asimov",
    editions: {
      fr: {
        title: "Fondation",
        subtitle: "Le cycle de Fondation — Tome 1",
        publisher: "Denoël",
        olid: "OL26210211M",
        tags: ["Empire", "futur", "civilisation"],
        summary: "Hari Seldon prévoit l'effondrement de l'Empire galactique et imagine un projet destiné à réduire les millénaires de chaos qui doivent suivre.",
        review: "Moins sensoriel que Dune mais extraordinairement stimulant : parfait pour un rayon consacré aux grandes idées de la science-fiction."
      },
      en: {
        title: "Foundation",
        subtitle: "Foundation — Book 1",
        publisher: "Del Rey",
        olid: "OL10684101M",
        tags: ["Empire", "future", "civilisation"],
        summary: "Hari Seldon foresees the collapse of the Galactic Empire and creates a project intended to shorten the dark age that will follow.",
        review: "A classic of idea-driven science fiction and a strong counterpoint to the more adventurous books surrounding it."
      }
    }
  },
  {
    id: "horde-du-contrevent",
    genre: "scifi",
    shelf: 2,
    size: "wide",
    colors: ["#665943", "#2d2921"],
    author: "Alain Damasio",
    editions: {
      fr: {
        title: "La Horde du Contrevent",
        subtitle: "Folio Science-Fiction",
        publisher: "Gallimard",
        olid: "OL28149494M",
        tags: ["Vent", "expédition", "imaginaire français"],
        summary: "Une horde formée depuis l'enfance remonte un monde balayé par des vents violents pour tenter d'en atteindre l'origine.",
        review: "Un livre qui donne immédiatement envie de créer un rayon plus étrange et plus sensoriel. Il apporte aussi une vraie identité française au catalogue."
      }
    }
  },
  {
    id: "les-rivieres-pourpres",
    genre: "polar",
    shelf: 0,
    size: "tall",
    colors: ["#6b2f36", "#241619"],
    author: "Jean-Christophe Grangé",
    editions: {
      fr: {
        title: "Les Rivières pourpres",
        subtitle: "Roman",
        publisher: "Albin Michel",
        olid: "OL20194477M",
        tags: ["Polar", "enquête", "suspense"],
        summary: "Deux enquêtes apparemment distinctes conduisent vers un même territoire isolé et vers des secrets de plus en plus inquiétants.",
        review: "Un excellent point de départ pour une salle Polar beaucoup plus sombre, presque pluvieuse, sans changer un seul geste de navigation."
      }
    }
  },
  {
    id: "le-petit-prince",
    genre: "jeunesse",
    shelf: 0,
    size: "short",
    colors: ["#587a8a", "#283b46"],
    author: "Antoine de Saint-Exupéry",
    editions: {
      fr: {
        title: "Le Petit Prince",
        subtitle: "Conte",
        publisher: "Édition française",
        olid: "OL43362753M",
        tags: ["Conte", "poésie", "famille"],
        summary: "Un aviateur rencontre dans le désert un enfant venu d'une minuscule planète, dont les récits transforment peu à peu notre regard sur les adultes et sur l'essentiel.",
        review: "Parfait pour montrer que le rayon Jeunesse peut rester élégant et poétique sans devenir une interface criarde réservée aux enfants."
      },
      en: {
        title: "The Little Prince",
        subtitle: "A poetic tale",
        publisher: "English edition",
        olid: "OL19301522M",
        tags: ["Tale", "poetry", "family"],
        summary: "A stranded aviator meets a child from a tiny planet whose stories gradually reshape the way we look at grown-ups and at what matters.",
        review: "A perfect example of a young-readers shelf that can feel poetic and timeless rather than overly childish."
      }
    }
  }
];

export function editionFor(work, lang) {
  return work.editions[lang] || null;
}

export function coverUrl(edition, size = "L") {
  if (!edition) return "";
  if (edition.olid) {
    return "https://covers.openlibrary.org/b/olid/" + edition.olid + "-" + size + ".jpg";
  }
  if (edition.isbn) {
    return "https://covers.openlibrary.org/b/isbn/" + edition.isbn + "-" + size + ".jpg";
  }
  return "";
}
