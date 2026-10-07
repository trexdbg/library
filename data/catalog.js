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
  },
  {
    id: "the-hobbit",
    genre: "fantasy",
    shelf: 0,
    size: "short",
    colors: ["#6f5a35", "#263a2f"],
    author: "J. R. R. Tolkien",
    editions: {
      fr: {
        title: "Le Hobbit",
        subtitle: "Un voyage inattendu en Terre du Milieu",
        publisher: "Christian Bourgois",
        isbn: "9780007525492",
        tags: ["Fantasy", "aventure", "Terre du Milieu"],
        summary: "Bilbo Bessac mène une vie tranquille jusqu'au jour où Gandalf et une compagnie de nains l'entraînent vers la Montagne Solitaire, un trésor perdu et un dragon nommé Smaug.",
        review: "Plus léger que Le Seigneur des Anneaux, mais déjà rempli de tout ce qui rend la Terre du Milieu irrésistible : aventure, humour, chansons et paysages immenses."
      },
      en: {
        title: "The Hobbit",
        subtitle: "There and Back Again",
        publisher: "HarperCollins",
        olid: "OL26389331M",
        tags: ["Fantasy", "adventure", "Middle-earth"],
        summary: "Bilbo Baggins is pulled from his quiet life by Gandalf and a company of dwarves bound for the Lonely Mountain, a stolen treasure and the dragon Smaug.",
        review: "A warm, adventurous doorway into Middle-earth, lighter than The Lord of the Rings but already rich with its sense of wonder."
      }
    }
  },
  {
    id: "name-of-the-wind",
    genre: "fantasy",
    shelf: 1,
    size: "tall",
    colors: ["#7c4b36", "#221d1a"],
    author: "Patrick Rothfuss",
    editions: {
      fr: {
        title: "Le Nom du vent",
        subtitle: "Chronique du Tueur de Roi — Première Journée",
        publisher: "Bragelonne",
        olid: "OL24609729M",
        tags: ["Fantasy", "magie", "musique"],
        summary: "Retiré du monde sous une fausse identité, Kvothe accepte de raconter l'histoire derrière sa légende : son enfance, la perte, la rue, puis son entrée dans une université où la magie se paie au prix fort.",
        review: "Une fantasy très incarnée, portée par la voix de son narrateur, la musique et une fascination constante pour la manière dont naissent les légendes."
      },
      en: {
        title: "The Name of the Wind",
        subtitle: "The Kingkiller Chronicle — Day One",
        publisher: "DAW",
        isbn: "9780756404741",
        tags: ["Fantasy", "magic", "music"],
        summary: "Living under an assumed name, Kvothe agrees to tell the truth behind his legend: childhood, loss, poverty, music and his dangerous years at the University.",
        review: "A voice-driven fantasy built around memory, music and the tension between a person's life and the legend told about it."
      }
    }
  },
  {
    id: "game-of-thrones",
    genre: "fantasy",
    shelf: 2,
    size: "wide",
    colors: ["#5b4c3f", "#1f2222"],
    author: "George R. R. Martin",
    editions: {
      fr: {
        title: "Le Trône de fer",
        subtitle: "L'Intégrale 1",
        publisher: "J'ai Lu",
        olid: "OL26425330M",
        tags: ["Fantasy", "politique", "royaumes"],
        summary: "Alors que l'hiver approche, les grandes maisons de Westeros s'affrontent pour le pouvoir tandis qu'au-delà du Mur une menace ancienne recommence à bouger.",
        review: "Une fantasy politique dense et brutale où les alliances, les familles et les ambitions comptent autant que les épées et les dragons."
      },
      en: {
        title: "A Game of Thrones",
        subtitle: "A Song of Ice and Fire — Book 1",
        publisher: "Bantam",
        isbn: "9780553593716",
        tags: ["Epic fantasy", "politics", "kingdoms"],
        summary: "As winter approaches, the great houses of Westeros struggle for power while an older threat begins to stir beyond the Wall.",
        review: "A sprawling political fantasy where families, loyalties and ambition matter as much as swords, prophecies and dragons."
      }
    }
  },
  {
    id: "neuromancer",
    genre: "scifi",
    shelf: 0,
    size: "short",
    colors: ["#31515f", "#171d26"],
    author: "William Gibson",
    editions: {
      fr: {
        title: "Neuromancien",
        subtitle: "La trilogie de la Conurb",
        publisher: "J'ai Lu",
        olid: "OL8910752M",
        tags: ["Cyberpunk", "IA", "réseau"],
        summary: "Case, ancien pirate informatique privé de son accès au cyberespace, reçoit une dernière chance : une mission qui l'entraîne au contact d'intelligences artificielles et de puissances qu'il comprend à peine.",
        review: "Un livre fondateur dont l'énergie, le vocabulaire et les images continuent de définir notre manière d'imaginer le cyberespace."
      },
      en: {
        title: "Neuromancer",
        subtitle: "Sprawl — Book 1",
        publisher: "Ace",
        isbn: "9780441569595",
        tags: ["Cyberpunk", "AI", "cyberspace"],
        summary: "Case, a washed-up data thief locked out of cyberspace, is offered one last job that draws him toward artificial intelligences and powers far beyond his control.",
        review: "A foundational cyberpunk novel whose velocity, language and imagery still shape the way digital futures are imagined."
      }
    }
  },
  {
    id: "hyperion",
    genre: "scifi",
    shelf: 1,
    size: "tall",
    colors: ["#66513f", "#222734"],
    author: "Dan Simmons",
    editions: {
      fr: {
        title: "Hypérion",
        subtitle: "Les Cantos d'Hypérion — Tome 1",
        publisher: "Robert Laffont",
        olid: "OL24961127M",
        tags: ["Space opera", "pèlerinage", "mystère"],
        summary: "Sept pèlerins se rendent sur Hypérion, planète des Tombeaux du Temps et du mystérieux Gritche. En chemin, chacun raconte l'histoire qui l'a conduit jusqu'à ce voyage.",
        review: "Une construction en récits emboîtés qui transforme le space opera en voyage littéraire, tour à tour intime, terrifiant et vertigineux."
      },
      en: {
        title: "Hyperion",
        subtitle: "Hyperion Cantos — Book 1",
        publisher: "Bantam",
        isbn: "9780553283686",
        tags: ["Space opera", "pilgrimage", "mystery"],
        summary: "Seven pilgrims travel to the world of Hyperion and the Time Tombs, each carrying a story that explains why they have joined the final pilgrimage.",
        review: "A mosaic of voices that turns space opera into something literary, intimate, frightening and vast."
      }
    }
  },
  {
    id: "three-body-problem",
    genre: "scifi",
    shelf: 2,
    size: "wide",
    colors: ["#4b6371", "#182229"],
    author: "Liu Cixin",
    editions: {
      fr: {
        title: "Le Problème à trois corps",
        subtitle: "La trilogie des Trois Corps — Tome 1",
        publisher: "Actes Sud",
        olid: "OL46531525M",
        tags: ["Hard SF", "premier contact", "science"],
        summary: "Une série de phénomènes scientifiques inexplicables conduit vers un secret né pendant la Révolution culturelle et vers la possibilité d'un contact avec une civilisation extraterrestre.",
        review: "Une science-fiction d'idées ambitieuse qui commence comme une enquête scientifique avant d'élargir progressivement son échelle jusqu'au cosmique."
      },
      en: {
        title: "The Three-Body Problem",
        subtitle: "Remembrance of Earth's Past — Book 1",
        publisher: "Tor",
        isbn: "9780765382030",
        tags: ["Hard SF", "first contact", "science"],
        summary: "A wave of impossible scientific events leads to a secret rooted in the Cultural Revolution and to the possibility of contact with an alien civilisation.",
        review: "An idea-driven first-contact novel that grows from scientific mystery into a story of genuinely cosmic scale."
      }
    }
  },
  {
    id: "millennium-1",
    genre: "polar",
    shelf: 0,
    size: "tall",
    colors: ["#4b4f4f", "#171919"],
    author: "Stieg Larsson",
    editions: {
      fr: {
        title: "Les hommes qui n'aimaient pas les femmes",
        subtitle: "Millénium — Tome 1",
        publisher: "Actes Sud",
        olid: "OL26541777M",
        tags: ["Enquête", "thriller", "Suède"],
        summary: "Le journaliste Mikael Blomkvist accepte d'enquêter sur une disparition vieille de plusieurs décennies. Sa route croise celle de Lisbeth Salander, enquêtrice hors norme.",
        review: "Un thriller ample qui fonctionne autant par son enquête familiale que par le duo singulier formé par Blomkvist et Salander."
      },
      en: {
        title: "The Girl with the Dragon Tattoo",
        subtitle: "Millennium — Book 1",
        publisher: "Vintage Crime",
        isbn: "9780307454546",
        tags: ["Investigation", "thriller", "Sweden"],
        summary: "Journalist Mikael Blomkvist investigates a decades-old disappearance and joins forces with the extraordinary researcher Lisbeth Salander.",
        review: "A large-scale mystery powered as much by its investigation as by the unlikely partnership at its centre."
      }
    }
  },
  {
    id: "shutter-island",
    genre: "polar",
    shelf: 1,
    size: "short",
    colors: ["#35464b", "#15191a"],
    author: "Dennis Lehane",
    editions: {
      fr: {
        title: "Shutter Island",
        subtitle: "Roman",
        publisher: "Rivages",
        olid: "OL24972649M",
        tags: ["Psychologique", "île", "mystère"],
        summary: "En 1954, deux marshals arrivent sur une île abritant un hôpital psychiatrique pour retrouver une patiente disparue. Une tempête coupe bientôt toute retraite.",
        review: "Une mécanique de doute remarquable, où le décor, la mémoire et la perception deviennent eux-mêmes des pièces de l'enquête."
      },
      en: {
        title: "Shutter Island",
        subtitle: "A novel",
        publisher: "HarperTorch",
        olid: "OL24972649M",
        tags: ["Psychological", "island", "mystery"],
        summary: "In 1954, two U.S. marshals arrive at an island psychiatric hospital to investigate a missing patient just as a storm cuts them off from the mainland.",
        review: "A tightly controlled mystery in which setting, memory and perception become part of the investigation itself."
      }
    }
  },
  {
    id: "silence-of-the-lambs",
    genre: "polar",
    shelf: 2,
    size: "wide",
    colors: ["#654c46", "#22191a"],
    author: "Thomas Harris",
    editions: {
      fr: {
        title: "Le Silence des agneaux",
        subtitle: "Roman",
        publisher: "Albin Michel",
        olid: "OL21794903M",
        tags: ["Thriller", "FBI", "psychologie"],
        summary: "Clarice Starling, jeune stagiaire du FBI, doit obtenir l'aide du psychiatre et meurtrier Hannibal Lecter pour comprendre un tueur en série encore en activité.",
        review: "Un thriller psychologique devenu une référence, construit autour d'un duel verbal aussi inquiétant que fascinant."
      },
      en: {
        title: "The Silence of the Lambs",
        subtitle: "A novel",
        publisher: "St. Martin's Press",
        isbn: "9780312924584",
        tags: ["Thriller", "FBI", "psychology"],
        summary: "FBI trainee Clarice Starling seeks the insight of imprisoned psychiatrist and killer Hannibal Lecter while pursuing another serial murderer.",
        review: "A landmark psychological thriller built around one of crime fiction's most unsettling conversations."
      }
    }
  },
  {
    id: "mystic-river",
    genre: "polar",
    shelf: 0,
    size: "tall",
    colors: ["#3f4e52", "#191d20"],
    author: "Dennis Lehane",
    editions: {
      fr: {
        title: "Mystic River",
        subtitle: "Roman",
        publisher: "Payot & Rivages",
        olid: "OL31955542M",
        tags: ["Crime", "Boston", "amitié"],
        summary: "Trois amis d'enfance séparés par un traumatisme se retrouvent vingt-cinq ans plus tard lorsqu'un meurtre bouleverse leur quartier et ravive tout ce qui n'avait jamais disparu.",
        review: "Un roman noir profondément humain, où l'enquête importe autant que les blessures anciennes et les liens entre les personnages."
      },
      en: {
        title: "Mystic River",
        subtitle: "A novel",
        publisher: "HarperCollins",
        olid: "OL37357839M",
        tags: ["Crime", "Boston", "friendship"],
        summary: "Three childhood friends divided by trauma are brought together again twenty-five years later when a murder tears through their old neighbourhood.",
        review: "A deeply human crime novel in which the investigation matters as much as old wounds and damaged relationships."
      }
    }
  },
  {
    id: "charlie-chocolate",
    genre: "jeunesse",
    shelf: 0,
    size: "short",
    colors: ["#785143", "#35231d"],
    author: "Roald Dahl",
    editions: {
      fr: {
        title: "Charlie et la chocolaterie",
        subtitle: "Roman jeunesse",
        publisher: "Gallimard Jeunesse",
        olid: "OL8839940M",
        tags: ["Humour", "merveilleux", "aventure"],
        summary: "Charlie Bucket trouve l'un des précieux tickets d'or qui lui ouvrent les portes de la fabuleuse chocolaterie de Willy Wonka.",
        review: "Un classique joyeux, drôle et légèrement cruel, dont chaque pièce de la chocolaterie ressemble encore à une invention impossible."
      },
      en: {
        title: "Charlie and the Chocolate Factory",
        subtitle: "A children's classic",
        publisher: "Puffin",
        isbn: "9780142410318",
        tags: ["Humour", "wonder", "adventure"],
        summary: "Charlie Bucket finds one of the golden tickets that opens the gates of Willy Wonka's extraordinary chocolate factory.",
        review: "Funny, strange and just a little cruel, with a sense of invention that still makes every room feel impossible."
      }
    }
  },
  {
    id: "coraline",
    genre: "jeunesse",
    shelf: 1,
    size: "tall",
    colors: ["#49566f", "#252030"],
    author: "Neil Gaiman",
    editions: {
      fr: {
        title: "Coraline",
        subtitle: "Roman",
        publisher: "Albin Michel",
        olid: "OL34825338M",
        tags: ["Fantastique", "courage", "étrange"],
        summary: "Coraline franchit une porte condamnée et découvre une maison presque identique à la sienne, avec une autre mère qui aimerait beaucoup la garder pour toujours.",
        review: "Un conte sombre d'une précision remarquable : assez inquiétant pour faire frissonner, assez lumineux pour rester une histoire de courage."
      },
      en: {
        title: "Coraline",
        subtitle: "A novel",
        publisher: "HarperCollins",
        isbn: "9780380807345",
        tags: ["Fantasy", "courage", "strange"],
        summary: "Coraline steps through a sealed door into another house much like her own, where another mother would very much like her to stay forever.",
        review: "A beautifully exact dark tale: unsettling enough to frighten, but ultimately a story about courage."
      }
    }
  },
  {
    id: "anne-green-gables",
    genre: "jeunesse",
    shelf: 2,
    size: "wide",
    colors: ["#627151", "#2a3326"],
    author: "Lucy Maud Montgomery",
    editions: {
      fr: {
        title: "Anne… la maison aux pignons verts",
        subtitle: "Roman",
        publisher: "Québec Amérique",
        olid: "OL19723823M",
        tags: ["Enfance", "imaginaire", "Canada"],
        summary: "Anne Shirley, orpheline vive et imaginative, arrive par erreur chez Marilla et Matthew Cuthbert et transforme peu à peu leur maison et tout Avonlea.",
        review: "Un roman chaleureux dont la force vient du regard d'Anne : excessif, drôle, sensible et capable de métamorphoser le quotidien."
      },
      en: {
        title: "Anne of Green Gables",
        subtitle: "A novel",
        publisher: "Bantam Classics",
        isbn: "9780553213133",
        tags: ["Childhood", "imagination", "Canada"],
        summary: "Imaginative orphan Anne Shirley arrives by mistake at the Cuthberts' farm and gradually transforms both Green Gables and the community around her.",
        review: "Warm, funny and enduring, driven by Anne's extraordinary ability to turn everyday life into something larger."
      }
    }
  },
  {
    id: "peter-pan",
    genre: "jeunesse",
    shelf: 0,
    size: "short",
    colors: ["#46635d", "#1c2b2b"],
    author: "J. M. Barrie",
    editions: {
      fr: {
        title: "Peter Pan",
        subtitle: "Le garçon qui ne voulait pas grandir",
        publisher: "Édition de référence",
        olid: "OL7704227M",
        tags: ["Aventure", "imaginaire", "enfance"],
        summary: "Peter Pan entraîne Wendy, John et Michael vers le Pays imaginaire, où les attendent fées, enfants perdus, pirates et le capitaine Crochet.",
        review: "Derrière l'aventure se cache un livre plus étrange qu'il n'y paraît, traversé par le temps, l'enfance et la peur de grandir."
      },
      en: {
        title: "Peter Pan",
        subtitle: "The boy who wouldn't grow up",
        publisher: "Gramercy",
        olid: "OL7704227M",
        tags: ["Adventure", "imagination", "childhood"],
        summary: "Peter Pan carries Wendy, John and Michael to Neverland, where fairies, Lost Boys, pirates and Captain Hook await.",
        review: "Beneath the adventure lies a stranger story about time, childhood and the fear of growing up."
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
