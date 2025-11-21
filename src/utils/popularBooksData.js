const popularBooksData = [
  {
    id: 1,
    title: "Dune",
    category: "ScienceFiction",
    image: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    rating: 4.8,
    author: "Frank Herbert",
    shortDescription: "A sweeping epic of politics, religion, and ecology on the desert planet Arrakis.",
    longDescription: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.",
    details: {
      pages: 688,
      publishedDate: "1965-08-01",
      language: "English",
      isbn: "978-0441172719",
      price: 18.00
    }
  },
  {
    id: 2,
    title: "The Notebook",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/isbn/9780446605236-L.jpg",
    rating: 4.6,
    author: "Nicholas Sparks",
    shortDescription: "A timeless love story of Noah and Allie, separated by war and class.",
    longDescription: "Set amid the austere beauty of the North Carolina coast, The Notebook begins with the story of Noah Calhoun, a rural Southerner returned home from World War II. He is haunted by images of the girl he lost more than a decade earlier. At thirty-one, Noah is unable to forget the woman he loved, but he is determined to find her again.",
    details: {
      pages: 214,
      publishedDate: "1996-10-01",
      language: "English",
      isbn: "978-0446605236",
      price: 14.00
    }
  },
  {
    id: 3,
    title: "The Silent Patient",
    category: "MysteryThriller",
    image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
    rating: 4.5,
    author: "Alex Michaelides",
    shortDescription: "A woman shoots her husband five times in the face and then never speaks another word.",
    longDescription: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    details: {
      pages: 336,
      publishedDate: "2019-02-05",
      language: "English",
      isbn: "978-1250301697",
      price: 17.99
    }
  },
  {
    id: 4,
    title: "All the Light We Cannot See",
    category: "HistoricalFiction",
    image: "https://covers.openlibrary.org/b/isbn/9781501173219-L.jpg",
    rating: 4.9,
    author: "Anthony Doerr",
    shortDescription: "A blind French girl and a German boy whose paths collide in occupied France.",
    longDescription: "Marie-Laure lives in Paris near the Museum of Natural History, where her father works. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo. Werner Pfennig, an orphan, grows up in a mining town in Germany, enchanted by a crude radio. Their lives intertwine as they try to survive the devastation of World War II.",
    details: {
      pages: 544,
      publishedDate: "2014-05-06",
      language: "English",
      isbn: "978-1501173219",
      price: 19.00
    }
  },
  {
    id: 5,
    title: "The Shining",
    category: "Horror",
    image: "https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg",
    rating: 4.7,
    author: "Stephen King",
    shortDescription: "A family's winter caretaking job at an isolated hotel turns into a nightmare.",
    longDescription: "Jack Torrance’s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote... and more sinister.",
    details: {
      pages: 447,
      publishedDate: "1977-01-28",
      language: "English",
      isbn: "978-0307743657",
      price: 16.00
    }
  },
  {
    id: 6,
    title: "Into the Wild",
    category: "Travel",
    image: "https://covers.openlibrary.org/b/isbn/9780307387172-L.jpg",
    rating: 4.4,
    author: "Jon Krakauer",
    shortDescription: "The true story of a young man who walked into the Alaskan wilderness.",
    longDescription: "In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. His name was Christopher Johnson McCandless. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself.",
    details: {
      pages: 224,
      publishedDate: "1996-01-13",
      language: "English",
      isbn: "978-0307387172",
      price: 15.00
    }
  },
  {
    id: 7,
    title: "Atomic Habits",
    category: "SelfHelp",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    rating: 4.9,
    author: "James Clear",
    shortDescription: "An easy and proven way to build good habits and break bad ones.",
    longDescription: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    details: {
      pages: 320,
      publishedDate: "2018-10-16",
      language: "English",
      isbn: "978-0735211292",
      price: 21.00
    }
  },
  {
    id: 8,
    title: "Steve Jobs",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg",
    rating: 4.8,
    author: "Walter Isaacson",
    shortDescription: "The exclusive biography of the creative genius who revolutionized technology.",
    longDescription: "Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur.",
    details: {
      pages: 656,
      publishedDate: "2011-10-24",
      language: "English",
      isbn: "978-1451648539",
      price: 28.00
    }
  },
  {
    id: 9,
    title: "Milk and Honey",
    category: "Poetry",
    image: "https://covers.openlibrary.org/b/isbn/9781449474256-L.jpg",
    rating: 4.3,
    author: "Rupi Kaur",
    shortDescription: "A collection of poetry and prose about survival, violence, abuse, and love.",
    longDescription: "Milk and Honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity. The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. It takes readers through a journey of the most bitter moments in life.",
    details: {
      pages: 204,
      publishedDate: "2014-11-04",
      language: "English",
      isbn: "978-1449474256",
      price: 14.99
    }
  },
  {
    id: 10,
    title: "Zero to One",
    category: "Business",
    image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    rating: 4.6,
    author: "Peter Thiel",
    shortDescription: "Notes on startups, or how to build the future.",
    longDescription: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things. Thiel begins with the contrarian premise that we live in an age of technological stagnation.",
    details: {
      pages: 224,
      publishedDate: "2014-09-16",
      language: "English",
      isbn: "978-0804139298",
      price: 22.00
    }
  },
  {
    id: 11,
    title: "A Promised Land",
    category: "Politics",
    image: "https://covers.openlibrary.org/b/isbn/9781524763169-L.jpg",
    rating: 4.7,
    author: "Barack Obama",
    shortDescription: "A riveting, deeply personal account of history in the making.",
    longDescription: "In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency.",
    details: {
      pages: 768,
      publishedDate: "2020-11-17",
      language: "English",
      isbn: "978-1524763169",
      price: 30.00
    }
  },
  {
    id: 12,
    title: "The Martian",
    category: "ScienceFiction",
    image: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg",
    rating: 4.8,
    author: "Andy Weir",
    shortDescription: "Stranded on Mars, an astronaut fights for survival.",
    longDescription: "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he's alive.",
    details: {
      pages: 369,
      publishedDate: "2011-02-11",
      language: "English",
      isbn: "978-0553418026",
      price: 16.00
    }
  },
  {
    id: 13,
    title: "Pride and Prejudice",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    rating: 4.7,
    author: "Jane Austen",
    shortDescription: "A witty exploration of manners, upbringing, morality, and marriage.",
    longDescription: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. It charts the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.",
    details: {
      pages: 279,
      publishedDate: "1813-01-28",
      language: "English",
      isbn: "978-0141439518",
      price: 12.00
    }
  },
  {
    id: 14,
    title: "Gone Girl",
    category: "MysteryThriller",
    image: "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg",
    rating: 4.1,
    author: "Gillian Flynn",
    shortDescription: "A marriage gone terribly wrong becomes the focus of a media circus.",
    longDescription: "On her fifth wedding anniversary, Amy Dunne disappears from her home in North Carthage, Missouri. Under pressure from the police and a growing media frenzy, Nick Dunne's portrait of a blissful union begins to crumble. Soon his lies, deceits and strange behavior have everyone asking the same dark question: Did Nick Dunne kill his wife?",
    details: {
      pages: 432,
      publishedDate: "2012-06-05",
      language: "English",
      isbn: "978-0307588371",
      price: 15.00
    }
  },
  {
    id: 15,
    title: "The Book Thief",
    category: "HistoricalFiction",
    image: "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg",
    rating: 4.8,
    author: "Markus Zusak",
    shortDescription: "A story of a girl in Nazi Germany who steals books to share with others.",
    longDescription: "It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can't resist–books.",
    details: {
      pages: 552,
      publishedDate: "2005-09-01",
      language: "English",
      isbn: "978-0375842207",
      price: 13.99
    }
  },
  {
    id: 16,
    title: "The Haunting of Hill House",
    category: "Horror",
    image: "https://covers.openlibrary.org/b/isbn/9780143039983-L.jpg",
    rating: 4.2,
    author: "Shirley Jackson",
    shortDescription: "Four seekers arrive at a notoriously unfriendly pile called Hill House.",
    longDescription: "First published in 1959, Shirley Jackson's The Haunting of Hill House has been hailed as a perfect work of unnerving terror. It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a 'haunting'; Theodora, his lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House.",
    details: {
      pages: 208,
      publishedDate: "1959-10-16",
      language: "English",
      isbn: "978-0143039983",
      price: 16.00
    }
  },
  {
    id: 17,
    title: "Eat, Pray, Love",
    category: "Travel",
    image: "https://covers.openlibrary.org/b/isbn/9780143038412-L.jpg",
    rating: 4.0,
    author: "Elizabeth Gilbert",
    shortDescription: "One woman's search for everything across Italy, India and Indonesia.",
    longDescription: "At thirty-four, Elizabeth Gilbert had everything a modern woman is supposed to want—a husband, a house, a successful career. But instead of feeling happy and fulfilled, she was consumed by panic and confusion. This is the story of how she left behind all these outward marks of success, and set out to explore three different aspects of her nature.",
    details: {
      pages: 334,
      publishedDate: "2006-02-16",
      language: "English",
      isbn: "978-0143038412",
      price: 17.00
    }
  },
  {
    id: 18,
    title: "The Power of Now",
    category: "SelfHelp",
    image: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
    rating: 4.6,
    author: "Eckhart Tolle",
    shortDescription: "A guide to spiritual enlightenment and living in the present moment.",
    longDescription: "To make the journey into the Now we will need to leave our analytical mind and its false created self, the ego, behind. Access to the Now is everywhere – in the body, the silence, and the space all around you. These are the keys to entering a state of inner peace.",
    details: {
      pages: 236,
      publishedDate: "1997-09-29",
      language: "English",
      isbn: "978-1577314806",
      price: 15.00
    }
  },
  {
    id: 19,
    title: "Educated",
    category: "Biography",
    image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
    rating: 4.8,
    author: "Tara Westover",
    shortDescription: "A memoir about a woman who grows up in a survivalist family and goes to college.",
    longDescription: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education. When another brother got himself into college, Tara decided to try a new kind of life.",
    details: {
      pages: 334,
      publishedDate: "2018-02-20",
      language: "English",
      isbn: "978-0399590504",
      price: 18.99
    }
  },
  {
    id: 20,
    title: "Rich Dad Poor Dad",
    category: "Business",
    image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    rating: 4.6,
    author: "Robert T. Kiyosaki",
    shortDescription: "What the rich teach their kids about money that the poor and middle class do not!",
    longDescription: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    details: {
      pages: 336,
      publishedDate: "1997-04-01",
      language: "English",
      isbn: "978-1612680194",
      price: 16.95
    }
  }
];
export default popularBooksData;