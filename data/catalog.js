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
