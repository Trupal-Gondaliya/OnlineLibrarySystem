const allBooksData = [
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
    },
    {
        id: 21,
        title: "1984",
        category: "ScienceFiction",
        image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        rating: 4.9,
        author: "George Orwell",
        shortDescription: "A dystopian social science fiction novel and cautionary tale.",
        longDescription: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmare vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality.",
        details: {
            pages: 328,
            publishedDate: "1949-06-08",
            language: "English",
            isbn: "978-0451524935",
            price: 9.99
        }
    },
    {
        id: 22,
        title: "Brave New World",
        category: "ScienceFiction",
        image: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg",
        rating: 4.6,
        author: "Aldous Huxley",
        shortDescription: "A dystopian novel set in a futuristic World State.",
        longDescription: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order.",
        details: {
            pages: 288,
            publishedDate: "1932-01-01",
            language: "English",
            isbn: "978-0060850524",
            price: 14.99
        }
    },
    {
        id: 23,
        title: "Ender's Game",
        category: "ScienceFiction",
        image: "https://covers.openlibrary.org/b/isbn/9780812550702-L.jpg",
        rating: 4.8,
        author: "Orson Scott Card",
        shortDescription: "A young boy is recruited to lead humanity in a war against aliens.",
        longDescription: "In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew 'Ender' Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine.",
        details: {
            pages: 324,
            publishedDate: "1985-01-15",
            language: "English",
            isbn: "978-0812550702",
            price: 12.99
        }
    },
    {
        id: 24,
        title: "Me Before You",
        category: "Romance",
        image: "https://covers.openlibrary.org/b/isbn/9780143124542-L.jpg",
        rating: 4.7,
        author: "Jojo Moyes",
        shortDescription: "A heartbreaking romance between a caretaker and a paralyzed man.",
        longDescription: "Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has never been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is.",
        details: {
            pages: 480,
            publishedDate: "2012-01-05",
            language: "English",
            isbn: "978-0143124542",
            price: 16.00
        }
    },
    {
        id: 25,
        title: "The Hating Game",
        category: "Romance",
        image: "https://covers.openlibrary.org/b/isbn/9780062439598-L.jpg",
        rating: 4.5,
        author: "Sally Thorne",
        shortDescription: "A workplace romantic comedy about two nemeses who fall in love.",
        longDescription: "Nemesis (n.) 1) An opponent or rival whom a person cannot best or overcome. 2) A person’s undoing. 3) Joshua Templeman. Lucy Hutton and Joshua Templeman hate each other. Not dislike. Not begrudgingly tolerate. Hate. And they have no problem displaying their feelings through a series of ritualistic passive aggressive maneuvers as they sit across from each other, executive assistants to co-CEOs of a publishing company.",
        details: {
            pages: 384,
            publishedDate: "2016-08-09",
            language: "English",
            isbn: "978-0062439604",
            price: 15.99
        }
    },
    {
        id: 26,
        title: "Red, White & Royal Blue",
        category: "Romance",
        image: "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg",
        rating: 4.8,
        author: "Casey McQuiston",
        shortDescription: "The First Son falls in love with the Prince of Wales.",
        longDescription: "First Son Alex Claremont-Diaz is the closest thing to a prince this side of the Atlantic. With his intrepid sister and the Veep’s genius granddaughter, they’re the White House Trio, a beautiful millennial marketing strategy for his mother, President Ellen Claremont. International socialite duties have downsides—namely, when photos of a confrontation with his longtime nemesis Prince Henry at a royal wedding leak to the tabloids and threaten American/British relations.",
        details: {
            pages: 448,
            publishedDate: "2019-05-14",
            language: "English",
            isbn: "9781250471588",
            price: 16.99
        }
    },
    {
        id: 27,
        title: "The Da Vinci Code",
        category: "MysteryThriller",
        image: "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
        rating: 4.5,
        author: "Dan Brown",
        shortDescription: "A symbologist races to uncover a religious conspiracy.",
        longDescription: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci.",
        details: {
            pages: 489,
            publishedDate: "2003-03-18",
            language: "English",
            isbn: "9780307474278",
            price: 9.99
        }
    },
    {
        id: 28,
        title: "The Girl with the Dragon Tattoo",
        category: "MysteryThriller",
        image: "https://covers.openlibrary.org/b/isbn/9780307949486-L.jpg",
        rating: 4.7,
        author: "Stieg Larsson",
        shortDescription: "A journalist and a hacker investigate a 40-year-old disappearance.",
        longDescription: "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander.",
        details: {
            pages: 644,
            publishedDate: "2005-08-01",
            language: "English",
            isbn: "9780307949486",
            price: 16.95
        }
    },
    {
        id: 29,
        title: "Big Little Lies",
        category: "MysteryThriller",
        image: "https://covers.openlibrary.org/b/isbn/9780399167065-L.jpg",
        rating: 4.6,
        author: "Liane Moriarty",
        shortDescription: "A murder at a school trivia night reveals dark secrets.",
        longDescription: "Madeline is a force to be reckoned with. She’s funny, biting, and passionate; she remembers everything and forgives no one. Celeste is the kind of beautiful woman who makes the world stop and stare but she is paying a price for the illusion of perfection. New to town, single mom Jane is so young that another mother mistakes her for a nanny. These three women's lives converge in a tragic way.",
        details: {
            pages: 460,
            publishedDate: "2014-07-29",
            language: "English",
            isbn: "9780399167065",
            price: 16.00
        }
    },
    {
        id: 30,
        title: "The Nightingale",
        category: "HistoricalFiction",
        image: "https://covers.openlibrary.org/b/isbn/9780312577223-L.jpg",
        rating: 4.9,
        author: "Kristin Hannah",
        shortDescription: "Two sisters in France struggle to survive and resist the Nazi occupation.",
        longDescription: "In the quiet village of Carriveau, Vianne Mauriac says goodbye to her husband, Antoine, as he heads for the Front. She doesn’t believe that the Nazis will invade France... but invade they do. Vianne’s sister, Isabelle, is a rebellious eighteen-year-old searching for purpose with all the reckless passion of youth. She joins the Resistance and never looks back.",
        details: {
            pages: 440,
            publishedDate: "2015-02-03",
            language: "English",
            isbn: "9780312577223",
            price: 17.99
        }
    },
    {
        id: 31,
        title: "The Kite Runner",
        category: "HistoricalFiction",
        image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
        rating: 4.8,
        author: "Khaled Hosseini",
        shortDescription: "A story of friendship and redemption set against the backdrop of modern Afghanistan.",
        longDescription: "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, caught in the tragic sweep of history, The Kite Runner transports readers to Afghanistan at a tense and crucial moment of change and destruction. A powerful story of friendship, it is also about the power of reading, the price of betrayal, and the possibility of redemption.",
        details: {
            pages: 371,
            publishedDate: "2003-05-29",
            language: "English",
            isbn: "9781594631931",
            price: 16.00
        }
    },
    {
        id: 32,
        title: "A Gentleman in Moscow",
        category: "HistoricalFiction",
        image: "https://covers.openlibrary.org/b/isbn/9780143110439-L.jpg",
        rating: 4.7,
        author: "Amor Towles",
        shortDescription: "An aristocrat is sentenced to house arrest in a luxury hotel.",
        longDescription: "In 1922, Count Alexander Rostov is deemed an unrepentant aristocrat by a Bolshevik tribunal, and is sentenced to house arrest in the Metropol, a grand hotel across the street from the Kremlin. Rostov, an indomitable man of erudition and wit, has never worked a day in his life, and must now live in an attic room while some of the most tumultuous decades in Russian history unfold outside the hotel’s doors.",
        details: {
            pages: 462,
            publishedDate: "2016-09-06",
            language: "English",
            isbn: "9780143110439",
            price: 17.00
        }
    },
    {
        id: 33,
        title: "It",
        category: "Horror",
        image: "https://covers.openlibrary.org/b/isbn/9781501142970-L.jpg",
        rating: 4.6,
        author: "Stephen King",
        shortDescription: "A group of bullied kids band together to fight a shapeshifting monster.",
        longDescription: "Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real. They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them back.",
        details: {
            pages: 1138,
            publishedDate: "1986-09-15",
            language: "English",
            isbn: "9781501142970",
            price: 19.99
        }
    },
    {
        id: 34,
        title: "Dracula",
        category: "Horror",
        image: "https://covers.openlibrary.org/b/isbn/9780486411095-L.jpg",
        rating: 4.5,
        author: "Bram Stoker",
        shortDescription: "The classic story of the vampire Count Dracula.",
        longDescription: "Jonathan Harker, a young English lawyer, travels to Castle Dracula in the Eastern European country of Transylvania to conclude a real estate transaction with a nobleman named Count Dracula. As Harker wends his way through the picturesque countryside, the local peasants warn him about his destination, giving him crucifixes and other charms against evil.",
        details: {
            pages: 418,
            publishedDate: "1897-05-26",
            language: "English",
            isbn: "9780486411095",
            price: 8.95
        }
    },
    {
        id: 35,
        title: "Frankenstein",
        category: "Horror",
        image: "https://covers.openlibrary.org/b/isbn/9780486282114-L.jpg",
        rating: 4.4,
        author: "Mary Shelley",
        shortDescription: "A scientist creates a sentient creature in a scientific experiment gone wrong.",
        longDescription: "Mary Shelley's seminal novel of the scientist whose creation becomes a monster. This edition is the original 1818 text, which preserves the hard-hitting and politically charged aspects of Shelley's original manuscript. It tells the story of Victor Frankenstein, a young scientist who creates a grotesque but sentient creature in an unorthodox scientific experiment.",
        details: {
            pages: 280,
            publishedDate: "1818-01-01",
            language: "English",
            isbn: "9780486282114",
            price: 7.99
        }
    },
    {
        id: 36,
        title: "Foundation",
        category: "ScienceFiction",
        image: "https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg",
        rating: 4.7,
        author: "Isaac Asimov",
        shortDescription: "The saga of a group of exiles struggling to save civilization.",
        longDescription: "For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future—to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save mankind, Seldon gathers the best minds in the Empire—both scientists and scholars—and brings them to a bleak planet at the edge of the galaxy to serve as a beacon of hope for future generations. He calls his sanctuary the Foundation.",
        details: {
            pages: 256,
            publishedDate: "1951-06-01",
            language: "English",
            isbn: "978-0553293357",
            price: 17.00
        }
    },
    {
    id: 37,
    title: "Neuromancer",
    category: "ScienceFiction",
    image: "https://covers.openlibrary.org/b/isbn/9780441569595-L.jpg",
    rating: 4.2,
    author: "William Gibson",
    shortDescription: "The cyberpunk classic about a washed-up data cowboy pulled into a final score.",
    longDescription: "Case was the sharpest data-thief in the matrix—until he crossed the wrong people and they crippled his nervous system, banishing him from cyberspace. Now a mysterious new employer has recruited him for a last-chance run against an unthinkably powerful artificial intelligence. With a dead man riding shotgun and Molly, a mirror-eyed street-samurai, to watch his back, Case is ready for the adventure that upped the ante on an entire genre of fiction.",
    details: {
      pages: 271,
      publishedDate: "1984-07-01",
      language: "English",
      isbn: "978-0441569595",
      price: 16.00
    }
  },
  {
    id: 38,
    title: "Outlander",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/isbn/9780440212560-L.jpg",
    rating: 4.5,
    author: "Diana Gabaldon",
    shortDescription: "A combat nurse travels back in time to 1743 Scotland.",
    longDescription: "The year is 1945. Claire Randall, a former combat nurse, is back from the war and reunited with her husband on a second honeymoon when she walks through a standing stone in one of the ancient circles that dot the British Isles. Suddenly she is a Sassenach—an 'outlander'—in a Scotland torn by war and raiding border clans in the year of our Lord...1743. Hurled back in time by forces she cannot understand, Claire is catapulted into the intrigues of lairds and spies that may threaten her life...and shatter her heart.",
    details: {
      pages: 850,
      publishedDate: "1991-06-01",
      language: "English",
      isbn: "978-0440212560",
      price: 18.00
    }
  },
  {
    id: 39,
    title: "The Da Vinci Code",
    category: "MysteryThriller",
    image: "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
    rating: 3.9,
    author: "Dan Brown",
    shortDescription: "A murder in the Louvre reveals a sinister plot to uncover a religious secret.",
    longDescription: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.",
    details: {
      pages: 489,
      publishedDate: "2003-03-18",
      language: "English",
      isbn: "978-0307474278",
      price: 15.95
    }
  },
]
export default allBooksData;