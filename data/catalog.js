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
  },
  {
    id:"priory-orange-tree", genre:"fantasy", shelf:1, size:"tall",
    colors:["#7d4c3c","#2d1f25"], author:"Samantha Shannon",
    editions:{
      fr:{title:"Le Prieuré de l'Oranger",subtitle:"Roman",publisher:"De Saxus",tags:["Fantasy","dragons","royaumes"],summary:"Un royaume sans héritière, une reine menacée et un ancien ennemi qui s'éveille : plusieurs destins convergent autour d'un monde partagé entre traditions rivales.",review:"Une fantasy ample et moderne, idéale pour élargir l'aile au-delà des grands cycles historiques."},
      en:{title:"The Priory of the Orange Tree",subtitle:"A novel",publisher:"Bloomsbury",isbn:"9781635570304",tags:["Fantasy","dragons","kingdoms"],summary:"A queen without an heir, an ancient enemy and rival traditions collide in an expansive world shaped by dragons and power.",review:"A modern epic that broadens the wing beyond the historical pillars of fantasy."}
    }
  },
  {
    id:"way-of-kings", genre:"fantasy", shelf:2, size:"wide",
    colors:["#536d77","#252f36"], author:"Brandon Sanderson",
    editions:{
      fr:{title:"La Voie des rois",subtitle:"Les Archives de Roshar",publisher:"Le Livre de Poche",tags:["Fantasy épique","tempêtes","guerre"],summary:"Sur Roshar, monde battu par des tempêtes surnaturelles, soldats, nobles et érudits avancent vers une crise qui dépasse leurs guerres ordinaires.",review:"Un excellent représentant de la fantasy épique contemporaine et de ses mondes à très grande échelle."},
      en:{title:"The Way of Kings",subtitle:"The Stormlight Archive — Book 1",publisher:"Tor",isbn:"9780765365279",tags:["Epic fantasy","storms","war"],summary:"On storm-lashed Roshar, soldiers, nobles and scholars move toward a crisis larger than their ordinary wars.",review:"A defining example of contemporary large-scale epic fantasy."}
    }
  },
  {
    id:"project-hail-mary", genre:"scifi", shelf:0, size:"tall",
    colors:["#8a7352","#28373d"], author:"Andy Weir",
    editions:{
      fr:{title:"Projet Dernière Chance",subtitle:"Roman",publisher:"Bragelonne",tags:["Science-fiction","espace","survie"],summary:"Un homme se réveille seul dans un vaisseau sans savoir qui il est. Peu à peu, il comprend que sa mission pourrait décider de la survie de l'humanité.",review:"Une SF accessible, rythmée et très efficace pour attirer aussi les lecteurs moins habitués au genre."},
      en:{title:"Project Hail Mary",subtitle:"A novel",publisher:"Ballantine",isbn:"9780593135204",tags:["Science fiction","space","survival"],summary:"A man wakes alone aboard a spacecraft with no memory and slowly discovers that his mission may determine humanity's survival.",review:"Accessible, fast and inventive science fiction with broad crossover appeal."}
    }
  },
  {
    id:"left-hand-darkness", genre:"scifi", shelf:1, size:"short",
    colors:["#60758b","#242c38"], author:"Ursula K. Le Guin",
    editions:{
      fr:{title:"La Main gauche de la nuit",subtitle:"Roman",publisher:"Le Livre de Poche",tags:["Science-fiction","société","genre"],summary:"Un envoyé humain tente de convaincre la planète Gethen de rejoindre une coalition interstellaire, tout en découvrant une société qui bouleverse ses propres certitudes.",review:"Une œuvre essentielle pour montrer que la science-fiction peut explorer les sociétés aussi profondément que les technologies."},
      en:{title:"The Left Hand of Darkness",subtitle:"A novel",publisher:"Ace",isbn:"9780441478125",tags:["Science fiction","society","gender"],summary:"A human envoy tries to bring the world of Gethen into an interstellar coalition while confronting assumptions about identity and society.",review:"A landmark demonstration of science fiction as social and anthropological inquiry."}
    }
  },
  {
    id:"gone-girl", genre:"polar", shelf:1, size:"tall",
    colors:["#61646b","#242429"], author:"Gillian Flynn",
    editions:{
      fr:{title:"Les Apparences",subtitle:"Roman",publisher:"Sonatine",tags:["Thriller","couple","disparition"],summary:"Le jour de son anniversaire de mariage, Amy disparaît. Très vite, son mari devient le suspect idéal et le récit se transforme en duel de versions.",review:"Un thriller contemporain particulièrement fort pour renouveler le rayon avec des narrateurs ambigus."},
      en:{title:"Gone Girl",subtitle:"A novel",publisher:"Crown",isbn:"9780307588371",tags:["Thriller","marriage","disappearance"],summary:"On the day of their wedding anniversary, Amy disappears and her husband quickly becomes the perfect suspect.",review:"A sharp contemporary thriller built on manipulation, image and unreliable narration."}
    }
  },
  {
    id:"snowman-nesbo", genre:"polar", shelf:2, size:"short",
    colors:["#d5d6d2","#374148"], author:"Jo Nesbø",
    editions:{
      fr:{title:"Le Bonhomme de neige",subtitle:"Une enquête de Harry Hole",publisher:"Folio Policier",tags:["Polar nordique","tueur en série","Oslo"],summary:"À Oslo, des disparitions de femmes semblent reliées à d'étranges bonshommes de neige. Harry Hole découvre un motif ancien et inquiétant.",review:"Un polar nordique très lisible, froid et visuel, parfait pour renforcer l'identité de cette aile."},
      en:{title:"The Snowman",subtitle:"A Harry Hole novel",publisher:"Vintage Crime",isbn:"9780307595867",tags:["Nordic noir","serial killer","Oslo"],summary:"In Oslo, missing women appear connected to mysterious snowmen and Harry Hole uncovers an older pattern.",review:"Cold, visual Nordic noir that strengthens the atmosphere of the crime wing."}
    }
  },
  {
    id:"alice-wonderland", genre:"jeunesse", shelf:1, size:"short",
    colors:["#527a86","#d29a62"], author:"Lewis Carroll",
    editions:{
      fr:{title:"Alice au pays des merveilles",subtitle:"Conte",publisher:"Gallimard Jeunesse",tags:["Merveilleux","absurde","aventure"],summary:"En suivant un lapin blanc, Alice tombe dans un monde où les règles changent sans cesse et où le langage lui-même devient un terrain de jeu.",review:"Un classique idéal pour relier jeunesse, imaginaire et littérature sans frontière d'âge."},
      en:{title:"Alice's Adventures in Wonderland",subtitle:"A classic",publisher:"Penguin Classics",isbn:"9780141439761",tags:["Wonder","nonsense","adventure"],summary:"Following a white rabbit, Alice falls into a world where rules constantly shift and language becomes part of the adventure.",review:"A timeless bridge between children's literature, fantasy and literary play."}
    }
  },
  {
    id:"secret-garden", genre:"jeunesse", shelf:2, size:"tall",
    colors:["#557057","#2d3b31"], author:"Frances Hodgson Burnett",
    editions:{
      fr:{title:"Le Jardin secret",subtitle:"Roman jeunesse",publisher:"Gallimard Jeunesse",tags:["Nature","enfance","amitié"],summary:"Mary découvre un jardin fermé depuis des années. En le ramenant à la vie avec de nouveaux amis, elle transforme aussi son propre quotidien.",review:"Un récit doux et très visuel qui apporte au rayon une dimension plus intime et contemplative."},
      en:{title:"The Secret Garden",subtitle:"A classic",publisher:"Penguin Classics",isbn:"9780142437056",tags:["Nature","childhood","friendship"],summary:"Mary discovers a garden locked away for years and, by bringing it back to life, changes the people around her too.",review:"A gentle, visual classic that adds a quieter register to the young-readers wing."}
    }
  },
  {
    id:"pride-prejudice", genre:"classics", shelf:0, size:"tall",
    colors:["#76624f","#2f2924"], author:"Jane Austen",
    editions:{
      fr:{title:"Orgueil et Préjugés",subtitle:"Roman",publisher:"Folio classique",tags:["Classique","société","amour"],summary:"Elizabeth Bennet refuse de laisser les conventions décider pour elle, tandis que sa relation avec Mr Darcy évolue entre orgueil, préjugés et lucidité.",review:"Un classique vif et ironique qui reste étonnamment moderne dans ses dialogues et son regard social."},
      en:{title:"Pride and Prejudice",subtitle:"A novel",publisher:"Penguin Classics",isbn:"9780141439518",tags:["Classic","society","love"],summary:"Elizabeth Bennet refuses to let convention decide for her as her relationship with Mr Darcy evolves through pride, prejudice and self-knowledge.",review:"A witty, socially sharp classic that still feels remarkably modern."}
    }
  },
  {
    id:"nineteen-eighty-four", genre:"classics", shelf:1, size:"wide",
    colors:["#8b3932","#292426"], author:"George Orwell",
    editions:{
      fr:{title:"1984",subtitle:"Roman",publisher:"Folio",tags:["Dystopie","politique","surveillance"],summary:"Dans un régime où le langage, le passé et jusqu'aux pensées sont contrôlés, Winston Smith tente de préserver un espace de vérité intérieure.",review:"Un texte devenu culturellement incontournable, à la frontière entre classique, politique et anticipation."},
      en:{title:"Nineteen Eighty-Four",subtitle:"A novel",publisher:"Signet Classics",isbn:"9780451524935",tags:["Dystopia","politics","surveillance"],summary:"In a regime that controls language, history and thought, Winston Smith tries to preserve an inner space for truth.",review:"A cultural landmark sitting at the crossroads of classic literature, politics and speculative fiction."}
    }
  },
  {
    id:"the-stranger", genre:"classics", shelf:1, size:"short",
    colors:["#c49d67","#4f493f"], author:"Albert Camus",
    editions:{
      fr:{title:"L'Étranger",subtitle:"Roman",publisher:"Folio",tags:["Classique","absurde","Algérie"],summary:"Meursault traverse les événements avec une distance qui dérange son entourage et finit par être jugé autant pour son attitude que pour son crime.",review:"Un roman court, limpide et déstabilisant, essentiel pour donner à l'aile Classiques une vraie identité française."},
      en:{title:"The Stranger",subtitle:"A novel",publisher:"Vintage International",isbn:"9780679720201",tags:["Classic","absurd","Algeria"],summary:"Meursault moves through events with a detachment that unsettles those around him and is judged as much for his attitude as for his crime.",review:"Brief, lucid and unsettling — a cornerstone of twentieth-century literature."}
    }
  },
  {
    id:"les-miserables", genre:"classics", shelf:2, size:"tall",
    colors:["#563b2e","#1f1b18"], author:"Victor Hugo",
    editions:{
      fr:{title:"Les Misérables",subtitle:"Roman",publisher:"Folio classique",tags:["Classique","justice","Paris"],summary:"Autour de Jean Valjean, Hugo déploie une fresque de pauvreté, justice, révolte et rédemption dans la France du XIXe siècle.",review:"Une œuvre-monument qui justifie à elle seule une grande salle de classiques dans une bibliothèque virtuelle."},
      en:{title:"Les Misérables",subtitle:"A novel",publisher:"Penguin Classics",isbn:"9780140444308",tags:["Classic","justice","Paris"],summary:"Around Jean Valjean, Hugo builds a vast story of poverty, justice, revolt and redemption in nineteenth-century France.",review:"A monumental novel that naturally belongs at the heart of a virtual classics room."}
    }
  },
  {
    id:"seven-husbands-evelyn-hugo", genre:"romance", shelf:0, size:"tall",
    colors:["#28685b","#d6a971"], author:"Taylor Jenkins Reid",
    editions:{
      fr:{title:"Les Sept Maris d'Evelyn Hugo",subtitle:"Roman",publisher:"Hauteville",tags:["Romance","Hollywood","secrets"],summary:"Une star vieillissante d'Hollywood choisit une jeune journaliste inconnue pour raconter enfin la vérité sur sa carrière, ses mariages et son grand amour.",review:"Une excellente porte d'entrée pour une zone Romance qui ne se limite pas au pur récit sentimental."},
      en:{title:"The Seven Husbands of Evelyn Hugo",subtitle:"A novel",publisher:"Atria",isbn:"9781501161933",tags:["Romance","Hollywood","secrets"],summary:"An ageing Hollywood icon chooses an unknown journalist to tell the truth about her career, marriages and greatest love.",review:"A strong anchor for a romance zone with ambition beyond straightforward love stories."}
    }
  },
  {
    id:"me-before-you", genre:"romance", shelf:1, size:"short",
    colors:["#d64d5f","#f2eee7"], author:"Jojo Moyes",
    editions:{
      fr:{title:"Avant toi",subtitle:"Roman",publisher:"Milady",tags:["Romance","vie","choix"],summary:"Louisa accepte un emploi auprès de Will, devenu tétraplégique après un accident. Leur rencontre bouleverse les certitudes de chacun.",review:"Un succès populaire très accessible qui apporte une dimension émotionnelle forte à la nouvelle zone."},
      en:{title:"Me Before You",subtitle:"A novel",publisher:"Penguin",isbn:"9780143124542",tags:["Romance","life","choices"],summary:"Louisa takes a job caring for Will after an accident leaves him quadriplegic, and their meeting changes both of their lives.",review:"An accessible emotional bestseller that gives the romance zone immediate recognition."}
    }
  },
  {
    id:"time-travelers-wife", genre:"romance", shelf:1, size:"wide",
    colors:["#4d5b70","#c7b7a7"], author:"Audrey Niffenegger",
    editions:{
      fr:{title:"Le Temps n'est rien",subtitle:"Roman",publisher:"J'ai Lu",tags:["Romance","temps","fantastique"],summary:"Henry voyage involontairement dans le temps. Sa relation avec Clare se construit donc dans un ordre impossible, entre retrouvailles et absences.",review:"Une romance qui dialogue avec le fantastique et permet de créer des passerelles naturelles entre les ailes."},
      en:{title:"The Time Traveler's Wife",subtitle:"A novel",publisher:"Harvest",isbn:"9780156029438",tags:["Romance","time","speculative"],summary:"Henry involuntarily travels through time, so his relationship with Clare unfolds in an impossible order of meetings and absences.",review:"A romance with a speculative hook that creates natural bridges between library zones."}
    }
  },
  {
    id:"the-notebook", genre:"romance", shelf:2, size:"short",
    colors:["#617a74","#d8c7a4"], author:"Nicholas Sparks",
    editions:{
      fr:{title:"Les Pages de notre amour",subtitle:"Roman",publisher:"Pocket",tags:["Romance","mémoire","amour"],summary:"Un homme lit une histoire d'amour à une femme dont la mémoire s'efface, faisant remonter le récit d'un couple séparé puis réuni.",review:"Un classique du roman sentimental contemporain et une référence immédiatement identifiable."},
      en:{title:"The Notebook",subtitle:"A novel",publisher:"Warner",isbn:"9780446605236",tags:["Romance","memory","love"],summary:"A man reads a love story to a woman losing her memory, bringing back the story of a couple separated and reunited.",review:"A defining modern romantic bestseller and an instantly recognisable reference point."}
    }
  },
  {
    id:"dracula", genre:"horror", shelf:0, size:"tall",
    colors:["#6b1e24","#171314"], author:"Bram Stoker",
    editions:{
      fr:{title:"Dracula",subtitle:"Roman",publisher:"Folio classique",tags:["Horreur","vampire","gothique"],summary:"Des journaux, lettres et témoignages racontent l'arrivée du comte Dracula en Angleterre et la lutte menée pour l'arrêter.",review:"Le grand classique gothique : impossible d'imaginer une aile Horreur sans lui."},
      en:{title:"Dracula",subtitle:"A novel",publisher:"Penguin Classics",isbn:"9780141439846",tags:["Horror","vampire","gothic"],summary:"Diaries, letters and testimony recount Count Dracula's arrival in England and the attempt to stop him.",review:"The defining Gothic vampire novel and an essential anchor for the horror room."}
    }
  },
  {
    id:"frankenstein", genre:"horror", shelf:0, size:"wide",
    colors:["#435348","#1b201d"], author:"Mary Shelley",
    editions:{
      fr:{title:"Frankenstein",subtitle:"ou le Prométhée moderne",publisher:"Folio classique",tags:["Gothique","science","création"],summary:"Victor Frankenstein donne vie à une créature puis fuit sa propre création, déclenchant une tragédie faite de solitude et de responsabilité.",review:"À la fois horreur, science-fiction et classique : un livre parfait pour matérialiser les ponts entre zones."},
      en:{title:"Frankenstein",subtitle:"or, The Modern Prometheus",publisher:"Penguin Classics",isbn:"9780141439471",tags:["Gothic","science","creation"],summary:"Victor Frankenstein gives life to a creature and then abandons his creation, setting off a tragedy of isolation and responsibility.",review:"Horror, science fiction and classic literature at once — ideal for showing connections between zones."}
    }
  },
  {
    id:"the-shining", genre:"horror", shelf:1, size:"tall",
    colors:["#9a6a3b","#2b211a"], author:"Stephen King",
    editions:{
      fr:{title:"Shining",subtitle:"L'Enfant lumière",publisher:"Le Livre de Poche",tags:["Horreur","hôtel","isolement"],summary:"Une famille passe l'hiver seule dans un hôtel isolé. Peu à peu, le lieu amplifie les failles du père et les visions de son fils.",review:"Une référence moderne de l'horreur psychologique, idéale pour une salle très atmosphérique."},
      en:{title:"The Shining",subtitle:"A novel",publisher:"Anchor",isbn:"9780307743657",tags:["Horror","hotel","isolation"],summary:"A family spends winter alone in an isolated hotel, where the building magnifies the father's instability and the son's visions.",review:"A modern benchmark for psychological horror and an obvious atmospheric centrepiece."}
    }
  },
  {
    id:"it-stephen-king", genre:"horror", shelf:2, size:"wide",
    colors:["#b5a28c","#28201d"], author:"Stephen King",
    editions:{
      fr:{title:"Ça",subtitle:"Roman",publisher:"Le Livre de Poche",tags:["Horreur","enfance","Derry"],summary:"À Derry, un groupe d'enfants affronte une présence qui exploite leurs peurs. Des années plus tard, ils doivent revenir terminer ce qu'ils avaient commencé.",review:"Un roman massif qui mêle horreur et mémoire de l'enfance, parfait pour donner de la profondeur à cette nouvelle aile."},
      en:{title:"It",subtitle:"A novel",publisher:"Scribner",isbn:"9781501142970",tags:["Horror","childhood","Derry"],summary:"In Derry, a group of children confronts an entity that feeds on fear. Years later they must return to finish what they started.",review:"A huge novel mixing horror with childhood memory, giving the room scale and depth."}
    }
  },
  {
    id:"mistborn-final-empire", genre:"fantasy", shelf:0, size:"tall",
    colors:["#6a3037","#171619"], author:"Brandon Sanderson",
    editions:{
      fr:{title:"L'Empire ultime",subtitle:"Fils-des-Brumes — Tome 1",publisher:"Le Livre de Poche",coverIsbn:"9780765350381",tags:["Fantasy","allomancie","rébellion"],summary:"Depuis mille ans, le Seigneur Maître règne sur un empire couvert de cendres. Vin, voleuse des rues, découvre un pouvoir rare et rejoint un groupe décidé à renverser l'ordre établi.",review:"Un excellent roman d'entrée dans la fantasy moderne : système de magie très lisible, rythme de casse et vraie montée en puissance."},
      en:{title:"Mistborn: The Final Empire",subtitle:"Mistborn — Book 1",publisher:"Tor",isbn:"9780765350381",tags:["Fantasy","allomancy","rebellion"],summary:"For a thousand years the Lord Ruler has ruled an ash-covered empire. Street thief Vin discovers a rare power and joins a crew planning the impossible.",review:"A highly readable gateway into modern epic fantasy, with a rigorous magic system and heist-like momentum."}
    }
  },
  {
    id:"assassins-apprentice", genre:"fantasy", shelf:1, size:"tall",
    colors:["#664c38","#24211e"], author:"Robin Hobb",
    editions:{
      fr:{title:"L'Apprenti assassin",subtitle:"L'Assassin royal — Tome 1",publisher:"J'ai Lu",coverIsbn:"9780553573398",tags:["Fantasy","cour","apprentissage"],summary:"Fitz, fils illégitime d'un prince, grandit à la cour des Six-Duchés. Son éducation le conduit vers les secrets du pouvoir, de la magie et du métier d'assassin.",review:"Une fantasy intime et patiente, remarquable par l'attachement qu'elle crée autour de Fitz et de ses contradictions."},
      en:{title:"Assassin's Apprentice",subtitle:"The Farseer Trilogy — Book 1",publisher:"Bantam",isbn:"9780553573398",tags:["Fantasy","court","coming of age"],summary:"Fitz, the illegitimate son of a prince, grows up at the Six Duchies court and is trained in politics, magic and assassination.",review:"Patient, character-led fantasy whose greatest strength is the intimacy of Fitz's voice and development."}
    }
  },
  {
    id:"wizard-of-earthsea", genre:"fantasy", shelf:2, size:"short",
    colors:["#3f6a62","#d2a764"], author:"Ursula K. Le Guin",
    editions:{
      fr:{title:"Le Sorcier de Terremer",subtitle:"Terremer — Tome 1",publisher:"Le Livre de Poche",coverIsbn:"9780547773742",tags:["Fantasy","magie","identité"],summary:"Le jeune Ged possède un talent immense pour la magie. Son orgueil libère pourtant une ombre qu'il devra apprendre à affronter autrement que par la force.",review:"Court, dense et profondément différent de la fantasy spectaculaire : un classique sur le pouvoir, le nom et la connaissance de soi."},
      en:{title:"A Wizard of Earthsea",subtitle:"Earthsea — Book 1",publisher:"HMH",isbn:"9780547773742",tags:["Fantasy","magic","identity"],summary:"Young Ged has immense magical talent, but his pride releases a shadow he must learn to confront through understanding rather than force.",review:"A concise classic about power, naming and self-knowledge that still feels unlike most modern fantasy."}
    }
  },
  {
    id:"snow-crash", genre:"scifi", shelf:0, size:"wide",
    colors:["#d04946","#243844"], author:"Neal Stephenson",
    editions:{
      fr:{title:"Le Samouraï virtuel",subtitle:"Roman",publisher:"Le Livre de Poche",coverIsbn:"9780553380958",tags:["Cyberpunk","métavers","satire"],summary:"Hiro est hacker, sabreur et livreur de pizzas. Lorsqu'un étrange virus menace à la fois les ordinateurs et les esprits, il plonge dans une enquête aussi érudite que frénétique.",review:"Cyberpunk baroque, drôle et débordant d'idées, dont le Metaverse est devenu une référence culturelle."},
      en:{title:"Snow Crash",subtitle:"A novel",publisher:"Bantam",isbn:"9780553380958",tags:["Cyberpunk","metaverse","satire"],summary:"Hiro is a hacker, swordsman and pizza deliverer who is pulled into an investigation of a virus threatening both computers and human minds.",review:"Baroque, funny and idea-dense cyberpunk whose Metaverse became a lasting cultural reference."}
    }
  },
  {
    id:"the-dispossessed", genre:"scifi", shelf:1, size:"tall",
    colors:["#8b7559","#3c3833"], author:"Ursula K. Le Guin",
    editions:{
      fr:{title:"Les Dépossédés",subtitle:"Une utopie ambiguë",publisher:"Le Livre de Poche",coverIsbn:"9780061054884",tags:["Science-fiction","utopie","politique"],summary:"Le physicien Shevek quitte la société anarchiste d'Anarres pour Urras, monde riche et inégalitaire, dans l'espoir de partager une découverte scientifique majeure.",review:"Une SF politique d'une intelligence rare qui refuse les réponses simples et confronte deux sociétés à leurs propres contradictions."},
      en:{title:"The Dispossessed",subtitle:"An Ambiguous Utopia",publisher:"Harper Voyager",isbn:"9780061054884",tags:["Science fiction","utopia","politics"],summary:"Physicist Shevek leaves anarchist Anarres for wealthy, unequal Urras in hopes of sharing a major scientific breakthrough.",review:"Politically sophisticated science fiction that refuses easy answers and tests both societies against their contradictions."}
    }
  },
  {
    id:"children-of-time", genre:"scifi", shelf:2, size:"tall",
    colors:["#526c51","#202e28"], author:"Adrian Tchaikovsky",
    editions:{
      fr:{title:"Dans la toile du temps",subtitle:"Roman",publisher:"Denoël",coverIsbn:"9780316452502",tags:["Évolution","espace","civilisations"],summary:"Les derniers humains cherchent un monde terraformé par leurs ancêtres. Ils y découvrent une civilisation qui n'a pas suivi la trajectoire évolutive prévue.",review:"Une grande fresque d'évolution parallèle, inventive et étonnamment émouvante, qui décentre radicalement le regard humain."},
      en:{title:"Children of Time",subtitle:"A novel",publisher:"Orbit",isbn:"9780316452502",tags:["Evolution","space","civilisations"],summary:"Humanity's survivors seek a terraformed world left by their ancestors and discover a civilisation that evolved along an unexpected path.",review:"A sweeping story of parallel evolution that radically shifts the human point of view."}
    }
  },
  {
    id:"big-sleep", genre:"polar", shelf:0, size:"short",
    colors:["#58463b","#1e1c1b"], author:"Raymond Chandler",
    editions:{
      fr:{title:"Le Grand Sommeil",subtitle:"Une enquête de Philip Marlowe",publisher:"Folio Policier",coverIsbn:"9780394758282",tags:["Noir","détective","Los Angeles"],summary:"Le détective Philip Marlowe est engagé par un vieux général pour régler une affaire de chantage. L'enquête l'entraîne rapidement dans les secrets d'une famille riche et dangereuse.",review:"La voix de Chandler compte presque autant que l'intrigue : ironie, corruption et Los Angeles nocturne fondent le roman noir moderne."},
      en:{title:"The Big Sleep",subtitle:"A Philip Marlowe novel",publisher:"Vintage Crime",isbn:"9780394758282",tags:["Noir","detective","Los Angeles"],summary:"Private detective Philip Marlowe is hired to handle a blackmail case that quickly opens onto the secrets of a wealthy and dangerous family.",review:"Chandler's voice matters as much as the mystery: wit, corruption and nocturnal Los Angeles define modern noir."}
    }
  },
  {
    id:"in-the-woods", genre:"polar", shelf:1, size:"tall",
    colors:["#34453d","#171b18"], author:"Tana French",
    editions:{
      fr:{title:"La Mort dans les bois",subtitle:"Dublin Murder Squad",publisher:"Calmann-Lévy",coverIsbn:"9780143113492",tags:["Enquête","mémoire","Irlande"],summary:"Un policier enquête sur le meurtre d'une enfant dans les mêmes bois où, des années plus tôt, deux de ses amis ont disparu alors qu'il fut le seul retrouvé.",review:"Un polar littéraire très psychologique, où l'enquête contemporaine réveille une mémoire personnelle beaucoup plus trouble."},
      en:{title:"In the Woods",subtitle:"Dublin Murder Squad — Book 1",publisher:"Penguin",isbn:"9780143113492",tags:["Mystery","memory","Ireland"],summary:"A detective investigates a child's murder in the same woods where two of his childhood friends disappeared and he alone was found.",review:"A psychologically rich literary mystery where the present investigation destabilises the detective's own past."}
    }
  },
  {
    id:"devotion-suspect-x", genre:"polar", shelf:2, size:"wide",
    colors:["#6f675b","#252527"], author:"Keigo Higashino",
    editions:{
      fr:{title:"Le Dévouement du suspect X",subtitle:"Une enquête du professeur Galileo",publisher:"Actes Sud",coverIsbn:"9781250002699",tags:["Polar japonais","logique","crime"],summary:"Après un meurtre commis en état de légitime défense, un mathématicien brillant organise un alibi presque parfait. Face à lui, un physicien tente d'en comprendre la logique.",review:"Un formidable duel intellectuel qui révèle très tôt le crime pour déplacer le suspense vers la mécanique de sa dissimulation."},
      en:{title:"The Devotion of Suspect X",subtitle:"Detective Galileo",publisher:"Minotaur",isbn:"9781250002699",tags:["Japanese crime","logic","murder"],summary:"After a killing in self-defence, a brilliant mathematician constructs an almost perfect alibi while a physicist tries to unravel its logic.",review:"A superb battle of intellect that reveals the crime early and relocates suspense to the mechanics of concealment."}
    }
  },
  {
    id:"matilda", genre:"jeunesse", shelf:0, size:"short",
    colors:["#537ba0","#e8c364"], author:"Roald Dahl",
    editions:{
      fr:{title:"Matilda",subtitle:"Roman jeunesse",publisher:"Gallimard Jeunesse",coverIsbn:"9780142410370",tags:["École","livres","humour"],summary:"Matilda adore lire mais sa famille ne comprend rien à sa curiosité. À l'école, elle trouve enfin une alliée face à une directrice aussi cruelle que grotesque.",review:"Drôle, insolent et profondément amoureux des livres : un classique jeunesse qui correspond parfaitement à l'idée même de Libria."},
      en:{title:"Matilda",subtitle:"A novel",publisher:"Puffin",isbn:"9780142410370",tags:["School","books","humour"],summary:"Matilda loves reading, but her family dismisses her curiosity. At school she finds an ally against a headmistress as cruel as she is absurd.",review:"Funny, rebellious and deeply in love with books — an ideal classic for Libria's young-readers wing."}
    }
  },
  {
    id:"northern-lights", genre:"jeunesse", shelf:1, size:"tall",
    colors:["#365d73","#bd9d62"], author:"Philip Pullman",
    editions:{
      fr:{title:"Les Royaumes du Nord",subtitle:"À la croisée des mondes — Tome 1",publisher:"Gallimard Jeunesse",coverIsbn:"9780440238133",tags:["Fantasy jeunesse","daemons","aventure"],summary:"Lyra quitte Oxford pour le Grand Nord afin de retrouver un ami disparu. Son voyage révèle des expériences inquiétantes, une mystérieuse Poussière et d'autres mondes possibles.",review:"Une aventure jeunesse ambitieuse, sombre et philosophique, capable de grandir avec ses lecteurs."},
      en:{title:"Northern Lights",subtitle:"His Dark Materials — Book 1",publisher:"Scholastic",isbn:"9780440238133",tags:["Young fantasy","daemons","adventure"],summary:"Lyra leaves Oxford for the far North to find a missing friend and uncovers disturbing experiments, mysterious Dust and other possible worlds.",review:"An ambitious, dark and philosophical children's adventure that grows with its readers."}
    }
  },
  {
    id:"wrinkle-in-time", genre:"jeunesse", shelf:2, size:"wide",
    colors:["#755f91","#253950"], author:"Madeleine L'Engle",
    editions:{
      fr:{title:"Un raccourci dans le temps",subtitle:"Le Quintette du temps — Tome 1",publisher:"Hachette",coverIsbn:"9781250004673",tags:["Science-fiction jeunesse","famille","temps"],summary:"Meg, son petit frère Charles Wallace et leur ami Calvin traversent l'espace et le temps pour retrouver le père disparu de Meg.",review:"Un classique jeunesse étrange et cosmique, où la science se mêle au conte et à une aventure familiale très personnelle."},
      en:{title:"A Wrinkle in Time",subtitle:"Time Quintet — Book 1",publisher:"Square Fish",isbn:"9781250004673",tags:["Young science fiction","family","time"],summary:"Meg, her brother Charles Wallace and their friend Calvin cross space and time to find Meg's missing father.",review:"A strange cosmic children's classic where science, fairy tale and family adventure meet."}
    }
  },
  {
    id:"jane-eyre", genre:"classics", shelf:0, size:"tall",
    colors:["#5c473c","#d1b47f"], author:"Charlotte Brontë",
    editions:{
      fr:{title:"Jane Eyre",subtitle:"Roman",publisher:"Folio classique",coverIsbn:"9780141441146",tags:["Classique","gothique","indépendance"],summary:"Orpheline devenue gouvernante, Jane refuse de sacrifier sa dignité à la pauvreté, aux conventions ou à l'amour lorsqu'elle découvre les secrets de Thornfield.",review:"Un classique gothique et profondément moderne par l'intransigeance avec laquelle Jane défend son autonomie."},
      en:{title:"Jane Eyre",subtitle:"A novel",publisher:"Penguin Classics",isbn:"9780141441146",tags:["Classic","gothic","independence"],summary:"Orphaned Jane becomes a governess and refuses to sacrifice her dignity to poverty, convention or love when Thornfield's secrets emerge.",review:"A Gothic classic that still feels modern in Jane's insistence on autonomy and equality."}
    }
  },
  {
    id:"count-monte-cristo", genre:"classics", shelf:1, size:"wide",
    colors:["#3f5265","#a37d4d"], author:"Alexandre Dumas",
    editions:{
      fr:{title:"Le Comte de Monte-Cristo",subtitle:"Roman",publisher:"Folio classique",coverIsbn:"9780140449266",tags:["Classique","vengeance","aventure"],summary:"Trahi et emprisonné le jour où sa vie semblait s'ouvrir, Edmond Dantès s'évade, découvre une fortune et revient sous une nouvelle identité pour régler ses comptes.",review:"Un monument d'aventure et de vengeance dont la longueur devient une force tant l'architecture du récit est addictive."},
      en:{title:"The Count of Monte Cristo",subtitle:"A novel",publisher:"Penguin Classics",isbn:"9780140449266",tags:["Classic","revenge","adventure"],summary:"Betrayed and imprisoned just as his life is opening up, Edmond Dantès escapes, finds a fortune and returns under a new identity to settle old debts.",review:"A monumental adventure of revenge whose vast length becomes part of its addictive architecture."}
    }
  },
  {
    id:"great-gatsby", genre:"classics", shelf:2, size:"short",
    colors:["#1d5964","#d5b259"], author:"F. Scott Fitzgerald",
    editions:{
      fr:{title:"Gatsby le Magnifique",subtitle:"Roman",publisher:"Folio",coverIsbn:"9780743273565",tags:["Classique","rêve américain","années 1920"],summary:"Nick Carraway découvre les fêtes de son mystérieux voisin Gatsby et comprend peu à peu que toute cette splendeur tourne autour d'un désir ancien et impossible.",review:"Court et lumineux en surface, profondément désenchanté dessous : une critique durable du rêve américain et de ses illusions."},
      en:{title:"The Great Gatsby",subtitle:"A novel",publisher:"Scribner",isbn:"9780743273565",tags:["Classic","American dream","1920s"],summary:"Nick Carraway enters the glittering world of his mysterious neighbour Gatsby and learns that its splendour is organised around an impossible old desire.",review:"Brief and glittering on the surface, deeply disenchanted underneath — a lasting critique of the American dream."}
    }
  },
  {
    id:"normal-people", genre:"romance", shelf:0, size:"tall",
    colors:["#ebe7df","#55766b"], author:"Sally Rooney",
    editions:{
      fr:{title:"Normal People",subtitle:"Roman",publisher:"L'Olivier",coverIsbn:"9781984822185",tags:["Romance","Irlande","relations"],summary:"Connell et Marianne se rapprochent au lycée, se perdent, se retrouvent puis changent de place socialement et affectivement au fil de leurs années étudiantes.",review:"Une histoire d'amour littéraire surtout fascinée par ce que les personnages n'arrivent pas à se dire au bon moment."},
      en:{title:"Normal People",subtitle:"A novel",publisher:"Hogarth",isbn:"9781984822185",tags:["Romance","Ireland","relationships"],summary:"Connell and Marianne grow close at school, drift apart and reconnect as their social and emotional positions keep changing through university.",review:"A literary love story fascinated by everything its characters fail to say at the right moment."}
    }
  },
  {
    id:"flatshare", genre:"romance", shelf:1, size:"short",
    colors:["#e39b75","#3f706f"], author:"Beth O'Leary",
    editions:{
      fr:{title:"À partager",subtitle:"Roman",publisher:"Hugo Roman",coverIsbn:"9781250295637",tags:["Romance","colocation","comédie"],summary:"Tiffy et Leon partagent le même appartement et le même lit, mais jamais aux mêmes heures. Ils commencent par communiquer uniquement grâce à des petits mots.",review:"Une comédie romantique au concept immédiatement clair, portée par une progression tendre et un vrai sens du quotidien."},
      en:{title:"The Flatshare",subtitle:"A novel",publisher:"Flatiron",isbn:"9781250295637",tags:["Romance","flatshare","comedy"],summary:"Tiffy and Leon share the same flat and the same bed but never at the same time, communicating at first only through notes.",review:"A high-concept romantic comedy with warmth, everyday detail and a satisfyingly gradual relationship."}
    }
  },
  {
    id:"red-white-royal-blue", genre:"romance", shelf:2, size:"wide",
    colors:["#d64e52","#4a6da0"], author:"Casey McQuiston",
    editions:{
      fr:{title:"My Dear F***ing Prince",subtitle:"Roman",publisher:"Lumen",coverIsbn:"9781250316776",tags:["Romance queer","politique","royauté"],summary:"Le fils de la présidente des États-Unis et un prince britannique sont forcés d'afficher une amitié diplomatique qui se transforme rapidement en quelque chose de beaucoup moins officiel.",review:"Une romance queer très pop qui assume l'utopie politique, l'humour et le plaisir d'une histoire d'amour à très forte visibilité."},
      en:{title:"Red, White & Royal Blue",subtitle:"A novel",publisher:"St. Martin's Griffin",isbn:"9781250316776",tags:["Queer romance","politics","royalty"],summary:"The U.S. president's son and a British prince are forced into a diplomatic friendship that quickly becomes something much less official.",review:"A bright queer romance that embraces political escapism, humour and the pressure of a highly public love story."}
    }
  },
  {
    id:"haunting-hill-house", genre:"horror", shelf:0, size:"tall",
    colors:["#4f5146","#171917"], author:"Shirley Jackson",
    editions:{
      fr:{title:"Maison hantée",subtitle:"Roman",publisher:"Rivages",coverIsbn:"9780143039983",tags:["Horreur","maison hantée","psychologie"],summary:"Quatre personnes séjournent à Hill House pour observer ses phénomènes inexpliqués. Pour Eleanor, la maison semble rapidement devenir beaucoup plus personnelle.",review:"Une référence absolue du fantastique psychologique, où l'architecture de la maison et la fragilité d'Eleanor deviennent indissociables."},
      en:{title:"The Haunting of Hill House",subtitle:"A novel",publisher:"Penguin Classics",isbn:"9780143039983",tags:["Horror","haunted house","psychological"],summary:"Four people stay at Hill House to investigate its unexplained phenomena, and for Eleanor the house soon becomes intensely personal.",review:"A definitive psychological haunted-house novel where architecture and Eleanor's vulnerability become inseparable."}
    }
  },
  {
    id:"mexican-gothic", genre:"horror", shelf:1, size:"tall",
    colors:["#5d6b52","#6a2737"], author:"Silvia Moreno-Garcia",
    editions:{
      fr:{title:"Mexican Gothic",subtitle:"Roman",publisher:"Bragelonne",coverIsbn:"9780525620808",tags:["Gothique","Mexique","manoir"],summary:"Noemí rejoint sa cousine dans un manoir isolé après avoir reçu une lettre alarmante. La famille qui y vit, la maison et même l'air semblent cacher quelque chose.",review:"Un gothique moderne somptueux qui utilise les codes du manoir anglais pour parler de domination, d'héritage et de corps."},
      en:{title:"Mexican Gothic",subtitle:"A novel",publisher:"Del Rey",isbn:"9780525620808",tags:["Gothic","Mexico","mansion"],summary:"Noemí travels to an isolated mansion after receiving an alarming letter from her cousin, where the family, house and even the air conceal something.",review:"A lush modern Gothic that repurposes the English manor tradition around domination, inheritance and the body."}
    }
  },
  {
    id:"the-exorcist", genre:"horror", shelf:2, size:"short",
    colors:["#242827","#75806e"], author:"William Peter Blatty",
    editions:{
      fr:{title:"L'Exorciste",subtitle:"Roman",publisher:"Robert Laffont",coverIsbn:"9780061007224",tags:["Horreur","possession","foi"],summary:"Lorsque le comportement d'une enfant devient inexplicable malgré les examens médicaux, sa mère finit par demander l'aide de prêtres confrontés à leurs propres doutes.",review:"Plus ambigu et plus lent que sa réputation spectaculaire : un roman sur la peur, mais aussi sur le doute et la possibilité de croire."},
      en:{title:"The Exorcist",subtitle:"A novel",publisher:"Harper",isbn:"9780061007224",tags:["Horror","possession","faith"],summary:"When a child's behaviour becomes inexplicable despite medical examination, her mother turns to priests who face doubts of their own.",review:"More ambiguous and deliberate than its sensational reputation suggests — a novel about fear, doubt and the possibility of belief."}
    }
  },
  {
    "id": "lies-locke-lamora",
    "genre": "fantasy",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#6b4d39",
      "#241a18"
    ],
    "author": "Scott Lynch",
    "editions": {
      "fr": {
        "title": "Les Mensonges de Locke Lamora",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "voleurs",
          "Camorr"
        ],
        "summary": "À Camorr, Locke Lamora dirige une bande de voleurs raffinés qui escroque les puissants jusqu'à ce qu'une guerre criminelle bouleverse ses règles.",
        "review": "Une fantasy de cambriolage vive, drôle et très urbaine."
      },
      "en": {
        "title": "The Lies of Locke Lamora",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "thieves",
          "Camorr"
        ],
        "summary": "In Camorr, Locke Lamora leads a refined gang of thieves who con the wealthy until a criminal war breaks the rules they live by.",
        "review": "Fast, witty urban fantasy built around confidence tricks, friendship and criminal politics."
      }
    }
  },
  {
    "id": "blade-itself",
    "genre": "fantasy",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#4f5f47",
      "#1f2820"
    ],
    "author": "Joe Abercrombie",
    "editions": {
      "fr": {
        "title": "Premier Sang",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dark fantasy",
          "guerre",
          "anti-héros"
        ],
        "summary": "Un guerrier brutal, un noble vaniteux et un tortionnaire cynique se croisent dans un royaume où la guerre et la magie reviennent au premier plan.",
        "review": "Une fantasy noire qui dynamite les archétypes héroïques avec beaucoup d'ironie."
      },
      "en": {
        "title": "The Blade Itself",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dark fantasy",
          "war",
          "antiheroes"
        ],
        "summary": "A brutal warrior, a vain nobleman and a cynical torturer collide in a kingdom where war and old magic are returning.",
        "review": "Dark fantasy that undercuts heroic archetypes with sharp humour and morally messy characters."
      }
    }
  },
  {
    "id": "poppy-war",
    "genre": "fantasy",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#70414f",
      "#261a22"
    ],
    "author": "R. F. Kuang",
    "editions": {
      "fr": {
        "title": "La Guerre du pavot",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "guerre",
          "chamanisme"
        ],
        "summary": "Rin, orpheline pauvre, entre dans une académie militaire d'élite et découvre un pouvoir chamanique au moment où la guerre menace son empire.",
        "review": "Une fantasy militaire intense qui devient progressivement beaucoup plus sombre."
      },
      "en": {
        "title": "The Poppy War",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "war",
          "shamanism"
        ],
        "summary": "Poor orphan Rin enters an elite military academy and discovers shamanic power just as war threatens her empire.",
        "review": "An intense military fantasy that grows increasingly dark as power and war reshape its heroine."
      }
    }
  },
  {
    "id": "fifth-season",
    "genre": "fantasy",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#6b4d39",
      "#241a18"
    ],
    "author": "N. K. Jemisin",
    "editions": {
      "fr": {
        "title": "La Cinquième Saison",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "cataclysme",
          "pouvoir"
        ],
        "summary": "Sur une planète régulièrement ravagée par des catastrophes géologiques, plusieurs destins révèlent le prix d'un pouvoir capable de déplacer la terre.",
        "review": "Une fantasy structurellement audacieuse qui mêle intime, oppression et fin du monde."
      },
      "en": {
        "title": "The Fifth Season",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "cataclysm",
          "power"
        ],
        "summary": "On a planet repeatedly devastated by geological catastrophes, several lives reveal the cost of a power capable of moving the earth.",
        "review": "Structurally daring fantasy combining intimacy, oppression and planetary catastrophe."
      }
    }
  },
  {
    "id": "jonathan-strange",
    "genre": "fantasy",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#4f5f47",
      "#1f2820"
    ],
    "author": "Susanna Clarke",
    "editions": {
      "fr": {
        "title": "Jonathan Strange & Mr Norrell",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy historique",
          "magie",
          "Angleterre"
        ],
        "summary": "Dans une Angleterre alternative du XIXe siècle, deux magiciens rivaux ramènent la magie pratique au cœur de la société et réveillent des forces anciennes.",
        "review": "Un immense roman de magie érudite, sec, drôle et délicieusement étrange."
      },
      "en": {
        "title": "Jonathan Strange & Mr Norrell",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Historical fantasy",
          "magic",
          "England"
        ],
        "summary": "In an alternate nineteenth-century England, two rival magicians restore practical magic and awaken older forces.",
        "review": "A vast, dryly funny novel of scholarly magic and wonderfully strange English folklore."
      }
    }
  },
  {
    "id": "bear-nightingale",
    "genre": "fantasy",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#70414f",
      "#261a22"
    ],
    "author": "Katherine Arden",
    "editions": {
      "fr": {
        "title": "L'Ours et le Rossignol",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Conte",
          "folklore",
          "Russie"
        ],
        "summary": "Dans une Russie médiévale où les esprits domestiques côtoient la foi chrétienne, Vassia refuse de renoncer aux créatures qu'elle seule semble encore voir.",
        "review": "Une fantasy hivernale très atmosphérique, inspirée des contes slaves."
      },
      "en": {
        "title": "The Bear and the Nightingale",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Folklore",
          "winter",
          "Russia"
        ],
        "summary": "In medieval Russia, where household spirits coexist uneasily with Christianity, Vasya refuses to abandon the creatures only she still seems to see.",
        "review": "Atmospheric winter fantasy steeped in Slavic folklore and old household spirits."
      }
    }
  },
  {
    "id": "eye-of-world",
    "genre": "fantasy",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#6b4d39",
      "#241a18"
    ],
    "author": "Robert Jordan",
    "editions": {
      "fr": {
        "title": "L'Œil du monde",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy épique",
          "quête",
          "destin"
        ],
        "summary": "Lorsque des créatures attaquent leur village, plusieurs jeunes gens partent avec une mystérieuse Aes Sedai et découvrent qu'un destin ancien les poursuit.",
        "review": "Le départ classique d'une très grande fresque, idéal pour les amateurs de longues sagas."
      },
      "en": {
        "title": "The Eye of the World",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Epic fantasy",
          "quest",
          "destiny"
        ],
        "summary": "After monsters attack their village, several young people flee with a mysterious Aes Sedai and learn that an ancient destiny is following them.",
        "review": "A classic opening to an enormous saga, ideal for readers who want a long immersive journey."
      }
    }
  },
  {
    "id": "gardens-of-moon",
    "genre": "fantasy",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#4f5f47",
      "#1f2820"
    ],
    "author": "Steven Erikson",
    "editions": {
      "fr": {
        "title": "Les Jardins de la Lune",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy épique",
          "empire",
          "dieux"
        ],
        "summary": "L'Empire malazéen poursuit ses conquêtes tandis que soldats, mages, dieux et assassins s'affrontent autour d'une cité stratégique.",
        "review": "Une fantasy exigeante et gigantesque qui plonge le lecteur dans un monde déjà en mouvement."
      },
      "en": {
        "title": "Gardens of the Moon",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Epic fantasy",
          "empire",
          "gods"
        ],
        "summary": "The Malazan Empire continues its conquests as soldiers, mages, gods and assassins converge on a strategic city.",
        "review": "Demanding, enormous fantasy that drops the reader into a world already in full motion."
      }
    }
  },
  {
    "id": "last-unicorn",
    "genre": "fantasy",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#70414f",
      "#261a22"
    ],
    "author": "Peter S. Beagle",
    "editions": {
      "fr": {
        "title": "La Dernière Licorne",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Conte",
          "licorne",
          "mélancolie"
        ],
        "summary": "Une licorne découvre qu'elle pourrait être la dernière de son espèce et quitte sa forêt pour chercher les autres.",
        "review": "Un conte élégant et mélancolique, aussi adulte que merveilleux."
      },
      "en": {
        "title": "The Last Unicorn",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fairy tale",
          "unicorn",
          "melancholy"
        ],
        "summary": "A unicorn learns she may be the last of her kind and leaves her forest to search for the others.",
        "review": "An elegant, melancholy fairy tale that remains as adult as it is magical."
      }
    }
  },
  {
    "id": "the-martian",
    "genre": "scifi",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#466576",
      "#17252e"
    ],
    "author": "Andy Weir",
    "editions": {
      "fr": {
        "title": "Seul sur Mars",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science-fiction",
          "Mars",
          "survie"
        ],
        "summary": "Abandonné par erreur sur Mars, Mark Watney doit utiliser la science, l'humour et toutes les ressources disponibles pour survivre jusqu'à un possible secours.",
        "review": "De la hard SF accessible, drôle et entièrement tournée vers la résolution de problèmes."
      },
      "en": {
        "title": "The Martian",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science fiction",
          "Mars",
          "survival"
        ],
        "summary": "Accidentally left behind on Mars, Mark Watney uses science, humour and every available resource to survive until rescue might be possible.",
        "review": "Accessible hard science fiction driven by humour and problem solving."
      }
    }
  },
  {
    "id": "androids-dream",
    "genre": "scifi",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#6b6e78",
      "#252a31"
    ],
    "author": "Philip K. Dick",
    "editions": {
      "fr": {
        "title": "Les androïdes rêvent-ils de moutons électriques ?",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science-fiction",
          "androïdes",
          "identité"
        ],
        "summary": "Dans un monde ravagé, Rick Deckard traque des androïdes fugitifs tout en doutant de plus en plus de la frontière entre humain et artificiel.",
        "review": "Une SF courte et vertigineuse sur l'empathie, l'identité et ce qui définit l'humain."
      },
      "en": {
        "title": "Do Androids Dream of Electric Sheep?",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science fiction",
          "androids",
          "identity"
        ],
        "summary": "In a damaged world, Rick Deckard hunts fugitive androids while increasingly doubting the line between human and artificial life.",
        "review": "A compact, unsettling exploration of empathy, identity and what makes someone human."
      }
    }
  },
  {
    "id": "brave-new-world",
    "genre": "scifi",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#355e66",
      "#152429"
    ],
    "author": "Aldous Huxley",
    "editions": {
      "fr": {
        "title": "Le Meilleur des mondes",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dystopie",
          "société",
          "conditionnement"
        ],
        "summary": "Une société stable a remplacé la famille, la liberté et le conflit par le conditionnement, la consommation et le plaisir obligatoire.",
        "review": "Une dystopie majeure qui reste dérangeante précisément parce qu'elle ne repose pas seulement sur la peur."
      },
      "en": {
        "title": "Brave New World",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dystopia",
          "society",
          "conditioning"
        ],
        "summary": "A stable society has replaced family, freedom and conflict with conditioning, consumption and compulsory pleasure.",
        "review": "A major dystopia whose power comes from control through comfort rather than fear alone."
      }
    }
  },
  {
    "id": "fahrenheit-451",
    "genre": "scifi",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#466576",
      "#17252e"
    ],
    "author": "Ray Bradbury",
    "editions": {
      "fr": {
        "title": "Fahrenheit 451",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dystopie",
          "livres",
          "censure"
        ],
        "summary": "Guy Montag brûle les livres pour le compte d'une société qui les interdit jusqu'au jour où il commence à se demander ce qu'ils contiennent.",
        "review": "Impossible de ne pas le mettre dans une bibliothèque virtuelle : c'est un roman sur ce qu'on perd quand les livres disparaissent."
      },
      "en": {
        "title": "Fahrenheit 451",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dystopia",
          "books",
          "censorship"
        ],
        "summary": "Guy Montag burns books for a society that bans them until he begins wondering what those books actually contain.",
        "review": "Essential in a virtual library: a novel about what is lost when books themselves disappear."
      }
    }
  },
  {
    "id": "solaris",
    "genre": "scifi",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#6b6e78",
      "#252a31"
    ],
    "author": "Stanisław Lem",
    "editions": {
      "fr": {
        "title": "Solaris",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science-fiction",
          "contact",
          "mémoire"
        ],
        "summary": "Des scientifiques en orbite autour de Solaris tentent de comprendre un océan intelligent qui répond à leurs recherches en matérialisant leurs souvenirs.",
        "review": "Un premier contact étrange et philosophique où le véritable inconnu est peut-être l'esprit humain."
      },
      "en": {
        "title": "Solaris",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science fiction",
          "contact",
          "memory"
        ],
        "summary": "Scientists orbiting Solaris try to understand an intelligent ocean that answers their experiments by materialising private memories.",
        "review": "A philosophical first-contact novel where the true unknown may be the human mind."
      }
    }
  },
  {
    "id": "forever-war",
    "genre": "scifi",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#355e66",
      "#152429"
    ],
    "author": "Joe Haldeman",
    "editions": {
      "fr": {
        "title": "La Guerre éternelle",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science-fiction",
          "guerre",
          "relativité"
        ],
        "summary": "Des soldats partent combattre une espèce extraterrestre tandis que la relativité transforme chaque retour sur Terre en saut vers une société méconnaissable.",
        "review": "Une grande SF antimilitariste qui utilise la relativité comme une machine à produire de l'aliénation."
      },
      "en": {
        "title": "The Forever War",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science fiction",
          "war",
          "relativity"
        ],
        "summary": "Soldiers fight an alien species while relativity turns each return to Earth into a jump toward an increasingly unfamiliar society.",
        "review": "A classic anti-war novel that uses relativity as a machine for producing alienation."
      }
    }
  },
  {
    "id": "rendezvous-rama",
    "genre": "scifi",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#466576",
      "#17252e"
    ],
    "author": "Arthur C. Clarke",
    "editions": {
      "fr": {
        "title": "Rendez-vous avec Rama",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science-fiction",
          "exploration",
          "mystère"
        ],
        "summary": "Un immense objet cylindrique traverse le système solaire et une équipe humaine dispose de quelques jours pour l'explorer avant son départ.",
        "review": "De la SF d'exploration pure, fascinée par l'échelle, l'ingénierie et l'inconnu."
      },
      "en": {
        "title": "Rendezvous with Rama",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science fiction",
          "exploration",
          "mystery"
        ],
        "summary": "A vast cylindrical object enters the solar system and a human crew has only days to explore it before it leaves.",
        "review": "Pure exploration science fiction fascinated by scale, engineering and the unknown."
      }
    }
  },
  {
    "id": "ancillary-justice",
    "genre": "scifi",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#6b6e78",
      "#252a31"
    ],
    "author": "Ann Leckie",
    "editions": {
      "fr": {
        "title": "La Justice de l'ancillaire",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Space opera",
          "IA",
          "empire"
        ],
        "summary": "Autrefois intelligence d'un immense vaisseau de guerre, Breq n'occupe plus qu'un seul corps et poursuit une vengeance contre le pouvoir qui l'a détruite.",
        "review": "Un space opera brillant qui déplace la question de l'identité à l'échelle d'un empire."
      },
      "en": {
        "title": "Ancillary Justice",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Space opera",
          "AI",
          "empire"
        ],
        "summary": "Once the intelligence of a vast warship, Breq now inhabits a single body and pursues revenge against the power that destroyed her.",
        "review": "A brilliant space opera that pushes questions of identity to imperial scale."
      }
    }
  },
  {
    "id": "memory-called-empire",
    "genre": "scifi",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#355e66",
      "#152429"
    ],
    "author": "Arkady Martine",
    "editions": {
      "fr": {
        "title": "Un souvenir nommé empire",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science-fiction",
          "diplomatie",
          "empire"
        ],
        "summary": "Une ambassadrice arrive au cœur d'un empire fascinant pour découvrir pourquoi son prédécesseur est mort et préserver l'indépendance de sa station.",
        "review": "Une SF politique élégante où la culture impériale est aussi dangereuse qu'attirante."
      },
      "en": {
        "title": "A Memory Called Empire",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Science fiction",
          "diplomacy",
          "empire"
        ],
        "summary": "An ambassador enters the heart of a seductive empire to learn why her predecessor died and protect her station's independence.",
        "review": "Elegant political science fiction where imperial culture is as seductive as it is dangerous."
      }
    }
  },
  {
    "id": "murder-orient-express",
    "genre": "polar",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#474f4f",
      "#171a1a"
    ],
    "author": "Agatha Christie",
    "editions": {
      "fr": {
        "title": "Le Crime de l'Orient-Express",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Mystère",
          "Poirot",
          "huis clos"
        ],
        "summary": "Un meurtre est commis dans un train immobilisé par la neige et Hercule Poirot doit comprendre lequel des passagers ment.",
        "review": "Un mécanisme de déduction presque parfait et l'un des huis clos les plus célèbres du genre."
      },
      "en": {
        "title": "Murder on the Orient Express",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Mystery",
          "Poirot",
          "locked room"
        ],
        "summary": "A murder is committed aboard a train trapped by snow, and Hercule Poirot must determine which passenger is lying.",
        "review": "A near-perfect deduction puzzle and one of the genre's most famous closed settings."
      }
    }
  },
  {
    "id": "maltese-falcon",
    "genre": "polar",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#65504a",
      "#22191a"
    ],
    "author": "Dashiell Hammett",
    "editions": {
      "fr": {
        "title": "Le Faucon maltais",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Noir",
          "détective",
          "San Francisco"
        ],
        "summary": "Le détective Sam Spade se retrouve au centre d'une chasse à une statuette convoitée par plusieurs criminels prêts à tout.",
        "review": "Un pilier du roman noir sec, rapide et moralement trouble."
      },
      "en": {
        "title": "The Maltese Falcon",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Noir",
          "detective",
          "San Francisco"
        ],
        "summary": "Detective Sam Spade becomes trapped in a hunt for a coveted statuette pursued by several ruthless criminals.",
        "review": "A foundational hard-boiled noir: dry, fast and morally slippery."
      }
    }
  },
  {
    "id": "talented-mr-ripley",
    "genre": "polar",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#3c4a43",
      "#171c19"
    ],
    "author": "Patricia Highsmith",
    "editions": {
      "fr": {
        "title": "Monsieur Ripley",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Psychologique",
          "identité",
          "crime"
        ],
        "summary": "Tom Ripley est envoyé en Europe pour convaincre un jeune héritier de rentrer chez lui, mais l'envie et l'imitation prennent rapidement une tournure criminelle.",
        "review": "Un thriller d'identité froid et élégant qui fait de son criminel le centre magnétique du livre."
      },
      "en": {
        "title": "The Talented Mr Ripley",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Psychological",
          "identity",
          "crime"
        ],
        "summary": "Tom Ripley is sent to Europe to persuade a young heir to come home, but envy and imitation quickly turn criminal.",
        "review": "A cool, elegant identity thriller that makes its criminal the magnetic centre of the novel."
      }
    }
  },
  {
    "id": "the-dry",
    "genre": "polar",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#474f4f",
      "#171a1a"
    ],
    "author": "Jane Harper",
    "editions": {
      "fr": {
        "title": "Canicule",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Polar",
          "Australie",
          "sécheresse"
        ],
        "summary": "Un policier revient dans sa ville natale frappée par la sécheresse pour des funérailles et se retrouve à rouvrir un vieux traumatisme.",
        "review": "Un polar atmosphérique où la chaleur et la sécheresse deviennent presque des personnages."
      },
      "en": {
        "title": "The Dry",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Crime",
          "Australia",
          "drought"
        ],
        "summary": "A federal agent returns to his drought-stricken hometown for a funeral and is drawn back into an older trauma.",
        "review": "Atmospheric crime fiction where heat and drought become part of the investigation."
      }
    }
  },
  {
    "id": "the-poet",
    "genre": "polar",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#65504a",
      "#22191a"
    ],
    "author": "Michael Connelly",
    "editions": {
      "fr": {
        "title": "Le Poète",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Thriller",
          "journalisme",
          "tueur en série"
        ],
        "summary": "Après la mort de son frère policier, un journaliste découvre une série de suicides suspects liés par des citations d'Edgar Allan Poe.",
        "review": "Un thriller très efficace qui mêle enquête journalistique, FBI et jeu littéraire."
      },
      "en": {
        "title": "The Poet",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Thriller",
          "journalism",
          "serial killer"
        ],
        "summary": "After his police-officer brother dies, a journalist uncovers a series of suspicious suicides linked by quotations from Edgar Allan Poe.",
        "review": "A highly effective thriller mixing investigative journalism, the FBI and literary clues."
      }
    }
  },
  {
    "id": "black-dahlia",
    "genre": "polar",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#3c4a43",
      "#171c19"
    ],
    "author": "James Ellroy",
    "editions": {
      "fr": {
        "title": "Le Dahlia noir",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Noir",
          "Los Angeles",
          "obsession"
        ],
        "summary": "Deux policiers de Los Angeles sont aspirés par l'affaire du meurtre d'Elizabeth Short, jusqu'à laisser l'enquête contaminer leur propre vie.",
        "review": "Un noir fiévreux et brutal où l'obsession compte autant que la résolution du crime."
      },
      "en": {
        "title": "The Black Dahlia",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Noir",
          "Los Angeles",
          "obsession"
        ],
        "summary": "Two Los Angeles cops become consumed by the murder of Elizabeth Short until the case contaminates their own lives.",
        "review": "Feverish, brutal noir where obsession matters as much as solving the crime."
      }
    }
  },
  {
    "id": "name-of-rose",
    "genre": "polar",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#474f4f",
      "#171a1a"
    ],
    "author": "Umberto Eco",
    "editions": {
      "fr": {
        "title": "Le Nom de la rose",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Mystère historique",
          "abbaye",
          "livres"
        ],
        "summary": "Dans une abbaye médiévale, une série de morts conduit Guillaume de Baskerville vers une bibliothèque labyrinthique et des conflits théologiques.",
        "review": "Le polar idéal pour Libria : meurtre, érudition et bibliothèque interdite."
      },
      "en": {
        "title": "The Name of the Rose",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Historical mystery",
          "abbey",
          "books"
        ],
        "summary": "In a medieval abbey, a series of deaths leads William of Baskerville toward a labyrinthine library and theological conflict.",
        "review": "An ideal Libria mystery: murder, scholarship and a forbidden labyrinthine library."
      }
    }
  },
  {
    "id": "thursday-murder-club",
    "genre": "polar",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#65504a",
      "#22191a"
    ],
    "author": "Richard Osman",
    "editions": {
      "fr": {
        "title": "Le Murder Club du jeudi",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Cosy mystery",
          "retraités",
          "humour"
        ],
        "summary": "Quatre retraités passionnés d'affaires criminelles voient enfin une véritable enquête arriver jusqu'à leur paisible résidence.",
        "review": "Un cosy crime chaleureux et drôle, parfait pour varier le ton de l'aile Polar."
      },
      "en": {
        "title": "The Thursday Murder Club",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Cosy mystery",
          "retirees",
          "humour"
        ],
        "summary": "Four retirees who enjoy discussing cold cases finally find a real murder arriving at their quiet retirement village.",
        "review": "Warm, witty cosy crime that gives the mystery wing a lighter register."
      }
    }
  },
  {
    "id": "before-i-go-to-sleep",
    "genre": "polar",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#3c4a43",
      "#171c19"
    ],
    "author": "S. J. Watson",
    "editions": {
      "fr": {
        "title": "Avant d'aller dormir",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Thriller psychologique",
          "mémoire",
          "secret"
        ],
        "summary": "Chaque matin, Christine oublie les années passées et doit reconstruire sa vie à partir de notes qu'elle cache à son mari.",
        "review": "Un dispositif simple et très efficace qui transforme la mémoire en moteur de suspense."
      },
      "en": {
        "title": "Before I Go to Sleep",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Psychological thriller",
          "memory",
          "secret"
        ],
        "summary": "Every morning Christine forgets the years behind her and must rebuild her life from notes she hides from her husband.",
        "review": "A simple, effective premise that turns memory itself into the engine of suspense."
      }
    }
  },
  {
    "id": "lion-witch-wardrobe",
    "genre": "jeunesse",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#587c8f",
      "#d2a45f"
    ],
    "author": "C. S. Lewis",
    "editions": {
      "fr": {
        "title": "Le Lion, la Sorcière blanche et l'Armoire magique",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy jeunesse",
          "Narnia",
          "aventure"
        ],
        "summary": "Quatre enfants traversent une armoire et découvrent Narnia, pays plongé dans un hiver sans fin sous le règne d'une sorcière.",
        "review": "Une porte littérale vers un autre monde : difficile de rêver meilleur symbole pour Libria."
      },
      "en": {
        "title": "The Lion, the Witch and the Wardrobe",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Children's fantasy",
          "Narnia",
          "adventure"
        ],
        "summary": "Four children step through a wardrobe into Narnia, a land trapped in endless winter under a witch's rule.",
        "review": "A literal doorway into another world: almost the perfect symbol for Libria."
      }
    }
  },
  {
    "id": "graveyard-book",
    "genre": "jeunesse",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#6f5c91",
      "#2d2d45"
    ],
    "author": "Neil Gaiman",
    "editions": {
      "fr": {
        "title": "L'Étrange Vie de Nobody Owens",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Jeunesse",
          "fantastique",
          "cimetière"
        ],
        "summary": "Après le meurtre de sa famille, un bébé est élevé par les habitants surnaturels d'un cimetière et grandit entre morts et vivants.",
        "review": "Une histoire sombre mais tendre, parfaite pour les jeunes lecteurs qui aiment frissonner."
      },
      "en": {
        "title": "The Graveyard Book",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Young readers",
          "fantasy",
          "graveyard"
        ],
        "summary": "After his family is murdered, a baby is raised by the supernatural residents of a graveyard and grows up between the living and the dead.",
        "review": "Dark but tender, ideal for younger readers who enjoy a little fear with their wonder."
      }
    }
  },
  {
    "id": "neverending-story",
    "genre": "jeunesse",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#5f7c5d",
      "#d5b16d"
    ],
    "author": "Michael Ende",
    "editions": {
      "fr": {
        "title": "L'Histoire sans fin",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Imaginaire",
          "livre",
          "quête"
        ],
        "summary": "Bastien lit un livre mystérieux sur le royaume de Fantasia et découvre peu à peu que sa propre lecture fait partie de l'histoire.",
        "review": "Un grand roman sur le pouvoir de lire, d'imaginer et de participer aux histoires."
      },
      "en": {
        "title": "The Neverending Story",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy",
          "book",
          "quest"
        ],
        "summary": "Bastian reads a mysterious book about the realm of Fantastica and slowly discovers that his own reading is part of the story.",
        "review": "A major novel about the power of reading, imagination and becoming part of a story."
      }
    }
  },
  {
    "id": "howls-moving-castle",
    "genre": "jeunesse",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#587c8f",
      "#d2a45f"
    ],
    "author": "Diana Wynne Jones",
    "editions": {
      "fr": {
        "title": "Le Château de Hurle",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantasy jeunesse",
          "sorcière",
          "château"
        ],
        "summary": "Transformée en vieille femme par une sorcière, Sophie trouve refuge dans le château ambulant du magicien Hurle.",
        "review": "Une fantasy pleine de charme, d'humour et de personnages merveilleusement imprévisibles."
      },
      "en": {
        "title": "Howl's Moving Castle",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Young fantasy",
          "witch",
          "castle"
        ],
        "summary": "Cursed into an old woman's body, Sophie seeks refuge in the moving castle of the wizard Howl.",
        "review": "Charming, witty fantasy with wonderfully unpredictable characters."
      }
    }
  },
  {
    "id": "the-giver",
    "genre": "jeunesse",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#6f5c91",
      "#2d2d45"
    ],
    "author": "Lois Lowry",
    "editions": {
      "fr": {
        "title": "Le Passeur",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Dystopie jeunesse",
          "mémoire",
          "liberté"
        ],
        "summary": "Jonas grandit dans une société sans douleur ni choix jusqu'à ce qu'il reçoive la mémoire des émotions et du passé supprimés.",
        "review": "Une dystopie jeunesse limpide qui pose de grandes questions sans jamais alourdir son récit."
      },
      "en": {
        "title": "The Giver",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Young dystopia",
          "memory",
          "freedom"
        ],
        "summary": "Jonas grows up in a society without pain or choice until he inherits the memories of everything his community removed.",
        "review": "Clear, accessible young dystopia that asks large questions without losing narrative force."
      }
    }
  },
  {
    "id": "wind-in-willows",
    "genre": "jeunesse",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#5f7c5d",
      "#d5b16d"
    ],
    "author": "Kenneth Grahame",
    "editions": {
      "fr": {
        "title": "Le Vent dans les saules",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique jeunesse",
          "animaux",
          "rivière"
        ],
        "summary": "Taupe, Rat, Blaireau et le fantasque Crapaud vivent aventures, disputes et réconciliations au bord de la rivière.",
        "review": "Un classique doux et pastoral qui apporte un vrai coin de calme à la bibliothèque."
      },
      "en": {
        "title": "The Wind in the Willows",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Children's classic",
          "animals",
          "river"
        ],
        "summary": "Mole, Rat, Badger and reckless Toad share adventures, quarrels and reconciliations along the riverbank.",
        "review": "A gentle pastoral classic that brings a quieter mood to the young-readers wing."
      }
    }
  },
  {
    "id": "bfg",
    "genre": "jeunesse",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#587c8f",
      "#d2a45f"
    ],
    "author": "Roald Dahl",
    "editions": {
      "fr": {
        "title": "Le Bon Gros Géant",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Jeunesse",
          "géants",
          "humour"
        ],
        "summary": "Sophie est enlevée par un géant qui, contrairement aux autres, refuse de manger les humains et collectionne les rêves.",
        "review": "Roald Dahl dans ce qu'il a de plus inventif : drôle, bizarre et délicieusement verbal."
      },
      "en": {
        "title": "The BFG",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Young readers",
          "giants",
          "humour"
        ],
        "summary": "Sophie is taken by a giant who, unlike the others, refuses to eat humans and collects dreams instead.",
        "review": "Roald Dahl at his most inventive: funny, strange and delightfully playful with language."
      }
    }
  },
  {
    "id": "girl-drank-moon",
    "genre": "jeunesse",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#6f5c91",
      "#2d2d45"
    ],
    "author": "Kelly Barnhill",
    "editions": {
      "fr": {
        "title": "La Fille qui avait bu la lune",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Conte",
          "magie",
          "enfance"
        ],
        "summary": "Une sorcière bienveillante nourrit accidentellement un bébé avec la lumière de la lune et lui transmet une magie immense.",
        "review": "Un conte moderne tendre et lumineux, construit comme une légende qu'on se transmet."
      },
      "en": {
        "title": "The Girl Who Drank the Moon",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fairy tale",
          "magic",
          "childhood"
        ],
        "summary": "A kind witch accidentally feeds a baby moonlight and gives her enormous magical power.",
        "review": "A tender modern fairy tale that feels like a legend passed from one generation to another."
      }
    }
  },
  {
    "id": "tale-despereaux",
    "genre": "jeunesse",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#5f7c5d",
      "#d5b16d"
    ],
    "author": "Kate DiCamillo",
    "editions": {
      "fr": {
        "title": "La Légende de Despereaux",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Conte",
          "souris",
          "courage"
        ],
        "summary": "Une petite souris passionnée de musique et de récits chevaleresques décide de sauver une princesse malgré tout ce que son monde attend d'elle.",
        "review": "Un récit délicat sur le courage, la lumière et la puissance des histoires."
      },
      "en": {
        "title": "The Tale of Despereaux",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fairy tale",
          "mouse",
          "courage"
        ],
        "summary": "A tiny mouse who loves music and chivalric stories decides to rescue a princess despite everything his world expects of him.",
        "review": "A delicate story about courage, light and the power of stories."
      }
    }
  },
  {
    "id": "wuthering-heights",
    "genre": "classics",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#6b5847",
      "#2d2520"
    ],
    "author": "Emily Brontë",
    "editions": {
      "fr": {
        "title": "Les Hauts de Hurlevent",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique",
          "gothique",
          "passion"
        ],
        "summary": "L'amour destructeur entre Heathcliff et Catherine marque plusieurs générations dans une lande anglaise battue par le vent.",
        "review": "Un classique sauvage et inconfortable, beaucoup plus sombre qu'une simple histoire d'amour."
      },
      "en": {
        "title": "Wuthering Heights",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classic",
          "gothic",
          "passion"
        ],
        "summary": "The destructive bond between Heathcliff and Catherine scars generations on the windswept Yorkshire moors.",
        "review": "A wild, uncomfortable classic far darker than a conventional love story."
      }
    }
  },
  {
    "id": "madame-bovary",
    "genre": "classics",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#58455d",
      "#211c24"
    ],
    "author": "Gustave Flaubert",
    "editions": {
      "fr": {
        "title": "Madame Bovary",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique",
          "province",
          "désillusion"
        ],
        "summary": "Emma Bovary rêve d'une vie plus intense que celle que lui offrent son mariage, sa province et les conventions sociales.",
        "review": "Un roman d'une précision implacable sur le désir, l'ennui et les illusions romanesques."
      },
      "en": {
        "title": "Madame Bovary",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classic",
          "provincial life",
          "disillusion"
        ],
        "summary": "Emma Bovary longs for a life more intense than marriage, provincial routine and social convention can offer.",
        "review": "A ruthlessly precise novel about desire, boredom and the illusions created by stories themselves."
      }
    }
  },
  {
    "id": "crime-punishment",
    "genre": "classics",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#49606a",
      "#20292d"
    ],
    "author": "Fiodor Dostoïevski",
    "editions": {
      "fr": {
        "title": "Crime et Châtiment",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique",
          "culpabilité",
          "Saint-Pétersbourg"
        ],
        "summary": "Raskolnikov commet un meurtre qu'il croit pouvoir justifier intellectuellement, puis découvre que la culpabilité résiste aux théories.",
        "review": "Un immense roman psychologique qui transforme une idée abstraite en fièvre morale."
      },
      "en": {
        "title": "Crime and Punishment",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classic",
          "guilt",
          "St Petersburg"
        ],
        "summary": "Raskolnikov commits a murder he believes he can justify intellectually, then discovers that guilt resists theory.",
        "review": "A towering psychological novel that turns an abstract theory into moral fever."
      }
    }
  },
  {
    "id": "war-and-peace",
    "genre": "classics",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#6b5847",
      "#2d2520"
    ],
    "author": "Léon Tolstoï",
    "editions": {
      "fr": {
        "title": "Guerre et Paix",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique",
          "Russie",
          "guerre"
        ],
        "summary": "Plusieurs familles russes traversent les guerres napoléoniennes tandis que leurs histoires privées se mêlent aux bouleversements de l'Histoire.",
        "review": "Un roman-monde où l'intime et l'Histoire deviennent impossibles à séparer."
      },
      "en": {
        "title": "War and Peace",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classic",
          "Russia",
          "war"
        ],
        "summary": "Several Russian families live through the Napoleonic wars as private lives become entangled with history.",
        "review": "A true world-novel in which private life and history become impossible to separate."
      }
    }
  },
  {
    "id": "brothers-karamazov",
    "genre": "classics",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#58455d",
      "#211c24"
    ],
    "author": "Fiodor Dostoïevski",
    "editions": {
      "fr": {
        "title": "Les Frères Karamazov",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique",
          "famille",
          "foi"
        ],
        "summary": "Trois frères aux tempéraments opposés se retrouvent liés par la mort de leur père et par des questions de foi, de désir et de responsabilité.",
        "review": "Une somme romanesque vertigineuse sur la liberté, la culpabilité et la foi."
      },
      "en": {
        "title": "The Brothers Karamazov",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classic",
          "family",
          "faith"
        ],
        "summary": "Three very different brothers become bound by their father's death and by questions of faith, desire and responsibility.",
        "review": "A dizzying novel of freedom, guilt, faith and family conflict."
      }
    }
  },
  {
    "id": "dorian-gray",
    "genre": "classics",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#49606a",
      "#20292d"
    ],
    "author": "Oscar Wilde",
    "editions": {
      "fr": {
        "title": "Le Portrait de Dorian Gray",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique",
          "décadence",
          "beauté"
        ],
        "summary": "Dorian conserve sa jeunesse tandis qu'un portrait caché porte à sa place les marques de ses choix et de sa corruption.",
        "review": "Spirituel, gothique et cruel : Wilde transforme la beauté en piège moral."
      },
      "en": {
        "title": "The Picture of Dorian Gray",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classic",
          "decadence",
          "beauty"
        ],
        "summary": "Dorian remains young while a hidden portrait bears the visible consequences of his choices and corruption.",
        "review": "Witty, Gothic and cruel: Wilde turns beauty itself into a moral trap."
      }
    }
  },
  {
    "id": "beloved",
    "genre": "classics",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#6b5847",
      "#2d2520"
    ],
    "author": "Toni Morrison",
    "editions": {
      "fr": {
        "title": "Beloved",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Classique moderne",
          "mémoire",
          "esclavage"
        ],
        "summary": "Une ancienne esclave vit avec sa fille dans une maison hantée par un passé qui refuse de rester enfoui.",
        "review": "Un roman puissant où histoire, mémoire et fantôme deviennent une seule matière."
      },
      "en": {
        "title": "Beloved",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Modern classic",
          "memory",
          "slavery"
        ],
        "summary": "A formerly enslaved woman lives with her daughter in a house haunted by a past that refuses to remain buried.",
        "review": "A powerful novel in which history, memory and haunting become one substance."
      }
    }
  },
  {
    "id": "hundred-years-solitude",
    "genre": "classics",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#58455d",
      "#211c24"
    ],
    "author": "Gabriel García Márquez",
    "editions": {
      "fr": {
        "title": "Cent ans de solitude",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Réalisme magique",
          "famille",
          "Macondo"
        ],
        "summary": "La famille Buendía fonde Macondo et traverse plusieurs générations où guerres, amours, répétitions et miracles semblent tourner en cercle.",
        "review": "Une fresque où le quotidien et le merveilleux deviennent indissociables."
      },
      "en": {
        "title": "One Hundred Years of Solitude",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Magical realism",
          "family",
          "Macondo"
        ],
        "summary": "The Buendía family founds Macondo and passes through generations of wars, loves, repetitions and miracles.",
        "review": "A sweeping family saga where the everyday and the miraculous become inseparable."
      }
    }
  },
  {
    "id": "master-margarita",
    "genre": "classics",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#49606a",
      "#20292d"
    ],
    "author": "Mikhaïl Boulgakov",
    "editions": {
      "fr": {
        "title": "Le Maître et Marguerite",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Satire",
          "Moscou",
          "fantastique"
        ],
        "summary": "Le diable arrive à Moscou avec une suite extravagante tandis qu'une histoire d'amour et un roman interdit ouvrent d'autres dimensions du récit.",
        "review": "Un classique explosif, drôle et impossible à ranger dans une seule catégorie."
      },
      "en": {
        "title": "The Master and Margarita",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Satire",
          "Moscow",
          "fantasy"
        ],
        "summary": "The devil arrives in Moscow with an extravagant entourage while a love story and forbidden manuscript open other dimensions of the novel.",
        "review": "Explosive, funny and impossible to confine to a single genre."
      }
    }
  },
  {
    "id": "love-hypothesis",
    "genre": "romance",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#b6787f",
      "#4d2d36"
    ],
    "author": "Ali Hazelwood",
    "editions": {
      "fr": {
        "title": "The Love Hypothesis",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "université",
          "fake dating"
        ],
        "summary": "Une doctorante simule une relation avec un professeur réputé glacial et découvre que leur expérience sociale devient vite beaucoup moins théorique.",
        "review": "Une romance universitaire très lisible, portée par un trope parfaitement assumé."
      },
      "en": {
        "title": "The Love Hypothesis",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "academia",
          "fake dating"
        ],
        "summary": "A PhD student fakes a relationship with a famously intimidating professor and finds their social experiment becoming far less theoretical.",
        "review": "Highly readable academic romance that embraces its central trope with confidence."
      }
    }
  },
  {
    "id": "book-lovers",
    "genre": "romance",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#d19b7d",
      "#5d4034"
    ],
    "author": "Emily Henry",
    "editions": {
      "fr": {
        "title": "Book Lovers",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "livres",
          "édition"
        ],
        "summary": "Une agente littéraire habituée aux histoires des autres retrouve un éditeur qu'elle déteste dans une petite ville où rien ne se passe comme prévu.",
        "review": "Une romance idéale pour Libria puisqu'elle joue directement avec les clichés du monde du livre."
      },
      "en": {
        "title": "Book Lovers",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "books",
          "publishing"
        ],
        "summary": "A literary agent who knows every story trope runs into an editor she dislikes in a small town where nothing unfolds as expected.",
        "review": "Perfect for Libria: a romance that knowingly plays with publishing and bookish conventions."
      }
    }
  },
  {
    "id": "it-ends-with-us",
    "genre": "romance",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#7c697f",
      "#362d3a"
    ],
    "author": "Colleen Hoover",
    "editions": {
      "fr": {
        "title": "Jamais plus",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "relation",
          "choix"
        ],
        "summary": "Lily construit une nouvelle vie et une relation intense, mais doit bientôt confronter des comportements qu'elle ne peut plus excuser.",
        "review": "Une romance populaire qui aborde aussi les mécanismes d'une relation abusive."
      },
      "en": {
        "title": "It Ends with Us",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "relationship",
          "choices"
        ],
        "summary": "Lily builds a new life and an intense relationship, but must confront behaviour she can no longer excuse.",
        "review": "A popular romance that also addresses the dynamics of an abusive relationship."
      }
    }
  },
  {
    "id": "hating-game",
    "genre": "romance",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#b6787f",
      "#4d2d36"
    ],
    "author": "Sally Thorne",
    "editions": {
      "fr": {
        "title": "Meilleurs Ennemis",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "enemies to lovers",
          "bureau"
        ],
        "summary": "Deux collègues rivaux se livrent une guerre quotidienne au bureau jusqu'à ce que leur compétition commence à changer de nature.",
        "review": "Une comédie romantique nerveuse et efficace, construite autour du plaisir du duel verbal."
      },
      "en": {
        "title": "The Hating Game",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "enemies to lovers",
          "office"
        ],
        "summary": "Two rival coworkers wage a daily office war until their competition starts changing shape.",
        "review": "A sharp, efficient romantic comedy built around verbal sparring."
      }
    }
  },
  {
    "id": "one-day",
    "genre": "romance",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#d19b7d",
      "#5d4034"
    ],
    "author": "David Nicholls",
    "editions": {
      "fr": {
        "title": "Un jour",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "temps",
          "amitié"
        ],
        "summary": "Emma et Dexter sont retrouvés à la même date pendant vingt ans, à mesure que leur amitié, leurs ambitions et leur relation évoluent.",
        "review": "Une construction simple qui transforme le temps lui-même en personnage de l'histoire d'amour."
      },
      "en": {
        "title": "One Day",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "time",
          "friendship"
        ],
        "summary": "Emma and Dexter are revisited on the same date across twenty years as friendship, ambition and love evolve.",
        "review": "A simple structure that makes time itself part of the love story."
      }
    }
  },
  {
    "id": "call-me-by-your-name",
    "genre": "romance",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#7c697f",
      "#362d3a"
    ],
    "author": "André Aciman",
    "editions": {
      "fr": {
        "title": "Appelle-moi par ton nom",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance queer",
          "Italie",
          "été"
        ],
        "summary": "Durant un été en Italie, Elio se rapproche d'Oliver, invité de sa famille, dans une relation aussi intense que brève.",
        "review": "Une histoire sensuelle et introspective sur le désir, le temps et la mémoire."
      },
      "en": {
        "title": "Call Me by Your Name",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Queer romance",
          "Italy",
          "summer"
        ],
        "summary": "During a summer in Italy, Elio grows close to Oliver, a guest of his family, in a relationship as intense as it is brief.",
        "review": "A sensual, introspective story about desire, time and memory."
      }
    }
  },
  {
    "id": "rosie-project",
    "genre": "romance",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#b6787f",
      "#4d2d36"
    ],
    "author": "Graeme Simsion",
    "editions": {
      "fr": {
        "title": "Le Théorème du homard",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "comédie",
          "science"
        ],
        "summary": "Un professeur de génétique élabore un questionnaire pour trouver la partenaire idéale et rencontre Rosie, qui ne correspond à aucun de ses critères.",
        "review": "Une comédie sentimentale légère fondée sur le contraste entre méthode et imprévu."
      },
      "en": {
        "title": "The Rosie Project",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "comedy",
          "science"
        ],
        "summary": "A genetics professor designs a questionnaire to find the perfect partner and meets Rosie, who matches none of his criteria.",
        "review": "A light romantic comedy built on the collision between method and unpredictability."
      }
    }
  },
  {
    "id": "outlander",
    "genre": "romance",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#d19b7d",
      "#5d4034"
    ],
    "author": "Diana Gabaldon",
    "editions": {
      "fr": {
        "title": "Le Chardon et le Tartan",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance historique",
          "Écosse",
          "voyage temporel"
        ],
        "summary": "Une infirmière de 1945 est projetée dans l'Écosse du XVIIIe siècle où elle doit survivre à la politique des clans et à une nouvelle relation.",
        "review": "Un mélange massif de romance, aventure historique et voyage temporel."
      },
      "en": {
        "title": "Outlander",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Historical romance",
          "Scotland",
          "time travel"
        ],
        "summary": "A nurse from 1945 is thrown into eighteenth-century Scotland, where she must survive clan politics and a new relationship.",
        "review": "A huge blend of romance, historical adventure and time travel."
      }
    }
  },
  {
    "id": "bridges-madison-county",
    "genre": "romance",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#7c697f",
      "#362d3a"
    ],
    "author": "Robert James Waller",
    "editions": {
      "fr": {
        "title": "Sur la route de Madison",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "choix",
          "mémoire"
        ],
        "summary": "Une femme mariée rencontre un photographe de passage et vit avec lui quelques jours qui redéfinissent silencieusement toute sa vie.",
        "review": "Une romance courte, adulte et mélancolique sur les vies qu'on choisit et celles qu'on laisse derrière."
      },
      "en": {
        "title": "The Bridges of Madison County",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Romance",
          "choice",
          "memory"
        ],
        "summary": "A married woman meets a travelling photographer and shares a few days that quietly redefine the rest of her life.",
        "review": "A brief, mature and melancholy romance about chosen lives and unlived alternatives."
      }
    }
  },
  {
    "id": "carrie",
    "genre": "horror",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#4b4944",
      "#171615"
    ],
    "author": "Stephen King",
    "editions": {
      "fr": {
        "title": "Carrie",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur",
          "télékinésie",
          "adolescence"
        ],
        "summary": "Une adolescente humiliée par ses camarades découvre des pouvoirs télékinésiques qui rendent leur cruauté soudain beaucoup plus dangereuse.",
        "review": "Le premier King reste une bombe courte sur l'humiliation, la violence collective et la revanche."
      },
      "en": {
        "title": "Carrie",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horror",
          "telekinesis",
          "adolescence"
        ],
        "summary": "A bullied teenager discovers telekinetic powers that make the cruelty around her suddenly far more dangerous.",
        "review": "King's debut remains a compact explosion of humiliation, group cruelty and revenge."
      }
    }
  },
  {
    "id": "misery",
    "genre": "horror",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#622d32",
      "#211417"
    ],
    "author": "Stephen King",
    "editions": {
      "fr": {
        "title": "Misery",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur",
          "écrivain",
          "captivité"
        ],
        "summary": "Après un accident, un romancier est recueilli par sa plus grande admiratrice, qui refuse absolument la direction qu'il a donnée à sa série préférée.",
        "review": "Un huis clos terrifiant sur la création, le contrôle et la relation entre auteur et lecteur."
      },
      "en": {
        "title": "Misery",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horror",
          "writer",
          "captivity"
        ],
        "summary": "After an accident, a novelist is rescued by his biggest fan, who violently rejects what he has done with her favourite series.",
        "review": "A terrifying chamber piece about creation, control and the author-reader relationship."
      }
    }
  },
  {
    "id": "pet-sematary",
    "genre": "horror",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#38443f",
      "#151a18"
    ],
    "author": "Stephen King",
    "editions": {
      "fr": {
        "title": "Simetierre",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur",
          "deuil",
          "retour des morts"
        ],
        "summary": "Une famille découvre près de sa nouvelle maison un lieu capable de ramener les morts, mais jamais exactement comme ils étaient.",
        "review": "L'un des King les plus sombres, parce que toute l'horreur naît d'un désir parfaitement humain."
      },
      "en": {
        "title": "Pet Sematary",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horror",
          "grief",
          "resurrection"
        ],
        "summary": "A family discovers a place near their new home that can return the dead, though never exactly as they were.",
        "review": "One of King's darkest novels because every horror grows from a completely human desire."
      }
    }
  },
  {
    "id": "bird-box",
    "genre": "horror",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#4b4944",
      "#171615"
    ],
    "author": "Josh Malerman",
    "editions": {
      "fr": {
        "title": "Bird Box",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur",
          "survie",
          "invisible"
        ],
        "summary": "Une présence inconnue pousse ceux qui la voient au suicide et une mère doit traverser un monde dangereux les yeux bandés avec deux enfants.",
        "review": "Un concept simple rendu très efficace par la privation du sens le plus rassurant : la vue."
      },
      "en": {
        "title": "Bird Box",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horror",
          "survival",
          "unseen threat"
        ],
        "summary": "An unknown presence drives anyone who sees it to suicide, forcing a mother to cross a dangerous world blindfolded with two children.",
        "review": "A simple premise made extremely effective by removing the sense we trust most: sight."
      }
    }
  },
  {
    "id": "let-right-one-in",
    "genre": "horror",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#622d32",
      "#211417"
    ],
    "author": "John Ajvide Lindqvist",
    "editions": {
      "fr": {
        "title": "Laisse-moi entrer",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur",
          "vampire",
          "enfance"
        ],
        "summary": "Un garçon solitaire se lie d'amitié avec une nouvelle voisine qui ne sort que la nuit et semble liée à une série de morts.",
        "review": "Un roman de vampire brutal mais étonnamment tendre sur deux enfances isolées."
      },
      "en": {
        "title": "Let the Right One In",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horror",
          "vampire",
          "childhood"
        ],
        "summary": "A lonely boy befriends a new neighbour who only comes out at night and seems connected to a series of deaths.",
        "review": "A brutal yet unexpectedly tender vampire novel about two isolated childhoods."
      }
    }
  },
  {
    "id": "turn-of-screw",
    "genre": "horror",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#38443f",
      "#151a18"
    ],
    "author": "Henry James",
    "editions": {
      "fr": {
        "title": "Le Tour d'écrou",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Fantastique",
          "fantômes",
          "ambiguïté"
        ],
        "summary": "Une gouvernante s'occupe de deux enfants dans une grande maison et croit bientôt y voir des présences liées à d'anciens domestiques.",
        "review": "Un classique de l'ambiguïté : hantise réelle ou regard qui se dérègle, le texte refuse de trancher."
      },
      "en": {
        "title": "The Turn of the Screw",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Gothic",
          "ghosts",
          "ambiguity"
        ],
        "summary": "A governess cares for two children in a country house and begins seeing figures connected to former servants.",
        "review": "A classic of ambiguity: genuine haunting or a mind losing its grip, the text refuses to settle the question."
      }
    }
  },
  {
    "id": "rosemarys-baby",
    "genre": "horror",
    "shelf": 0,
    "size": "tall",
    "colors": [
      "#4b4944",
      "#171615"
    ],
    "author": "Ira Levin",
    "editions": {
      "fr": {
        "title": "Rosemary's Baby",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur",
          "paranoïa",
          "grossesse"
        ],
        "summary": "Un jeune couple emménage dans un immeuble prestigieux où les voisins se montrent étrangement intéressés par la grossesse de Rosemary.",
        "review": "Une horreur lente et quotidienne qui transforme la politesse des voisins en menace permanente."
      },
      "en": {
        "title": "Rosemary's Baby",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horror",
          "paranoia",
          "pregnancy"
        ],
        "summary": "A young couple moves into a prestigious apartment building where the neighbours become disturbingly interested in Rosemary's pregnancy.",
        "review": "Slow domestic horror that turns neighbourly politeness into sustained menace."
      }
    }
  },
  {
    "id": "woman-in-black",
    "genre": "horror",
    "shelf": 1,
    "size": "short",
    "colors": [
      "#622d32",
      "#211417"
    ],
    "author": "Susan Hill",
    "editions": {
      "fr": {
        "title": "La Dame en noir",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Gothique",
          "fantôme",
          "manoir"
        ],
        "summary": "Un jeune notaire se rend dans une demeure isolée pour régler une succession et découvre une présence dont les apparitions annoncent le malheur.",
        "review": "Une histoire de fantôme classique, précise et très efficace dans son économie."
      },
      "en": {
        "title": "The Woman in Black",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Gothic",
          "ghost",
          "house"
        ],
        "summary": "A young solicitor visits an isolated house to settle an estate and encounters a presence whose appearances foretell tragedy.",
        "review": "A precise, economical ghost story that uses classic Gothic machinery extremely well."
      }
    }
  },
  {
    "id": "house-of-leaves",
    "genre": "horror",
    "shelf": 2,
    "size": "wide",
    "colors": [
      "#38443f",
      "#151a18"
    ],
    "author": "Mark Z. Danielewski",
    "editions": {
      "fr": {
        "title": "La Maison des feuilles",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Horreur expérimentale",
          "maison",
          "labyrinthe"
        ],
        "summary": "Un manuscrit analyse un film impossible sur une maison dont l'intérieur est plus grand que l'extérieur et finit par contaminer celui qui le lit.",
        "review": "Un livre-labyrinthe qui fait de sa propre mise en page une partie de l'horreur."
      },
      "en": {
        "title": "House of Leaves",
        "subtitle": "",
        "publisher": "",
        "tags": [
          "Experimental horror",
          "house",
          "labyrinth"
        ],
        "summary": "A manuscript analyses an impossible film about a house larger inside than outside, gradually infecting the person reading it.",
        "review": "A labyrinthine novel that turns typography and page design into part of the horror."
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
    return "https://covers.openlibrary.org/b/olid/" + edition.olid + "-" + size + ".jpg?default=false";
  }
  if (edition.isbn) {
    return "https://covers.openlibrary.org/b/isbn/" + edition.isbn + "-" + size + ".jpg?default=false";
  }
  if (edition.coverIsbn) {
    return "https://covers.openlibrary.org/b/isbn/" + edition.coverIsbn + "-" + size + ".jpg?default=false";
  }
  return "";
}
