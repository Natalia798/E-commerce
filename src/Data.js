// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Ugly Love",
    author: "Collen Hoover",
    category: "Fiction",
    price: 32,
    description:
      "When Tate Collins meets Miles Archer, a silent plane pilot, instead haunted by a dark past, she is aware that what she feels is not love at first sight." +
      "The two are not even considered friends, and the only thing they have in common is a physical attraction that cannot be missed. After their wishes come to light, " +
      "the two realize that they have just found the perfect solution for a relationship without any other implications. He is not looking for love, and she has no time for that." +
      "Their arrangement would be extremely satisfying if Tate could abide by the two rules imposed by Miles: ask no questions about the past; do not expect a future together." +
      "They think they can handle it, but when true feelings are swept away in their story, everything changes.",
    image: "/img/ugly_love.jpg",
    popular: true,
  },
  {
      id: 2,
      name: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Fiction",
      price: 47,
      description:
        "Alice Berenson's life is apparently perfect. The famous painter married to a fashion photographer, she lives in a beautiful house, overlooking the park," +
        "in one of the most desirable areas of London. One evening, her husband Gabriel returns home late from a photo shoot, and Alicia shoots him five times in front" +
        "and then stays silent for several years." +
        "Alice's refusal to speak or to give any kind of explanation transforms a domestic tragedy into something much more terrible, a mystery that captures the public" +
        "imagination and makes Alice famous. The price of her paintings increases astronomically, and she, the silent patient, is hiding from the tabloids and the spotlight" +
        "at The Grove, a psychiatric hospital of maximum security in north London.",
      image: "/img/silent_patient.jpg",
      popular: false
  },
  {
    id: 3,
    name: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: 37,
    description:
      "The book, astonishing by its simplicity and wisdom, is the story of an Andalusian shepherd named Santiago who leaves his home in Spain, venturing into the Egyptian desert" +
      "to find a treasure buried in the Pyramids." +
      "Nobody knows what the treasure is or whether Santiago will have the power to overcome the obstacles encountered in the desert road. But what begins as a journey in search of" +
      "worldly goods gradually transforms into the discovery of the treasure hidden within it.",
    popular: true,
    image: "/img/alchemist.jpg"
  },
  {
    id: 4,
    name: "Angels and Demons",
    author: "Dan Brown",
    category: "Fiction",
    price: 33,
    description:
      "In the middle of the night, Robert Langdon, renowned specialist for his works of symbolism, is called to Switzerland to examine the body of Leonardo Vetra, whose chest" +
      "was engulfed in a strange symbol. Langdon will discover that, after four centuries of silence, an ancient Illuminati organization has unleashed a diabolical vendetta against" +
      "the Catholic Church. Started in a race against the clock to detect and defuse a bomb that threatens the Vatican, Langdon realizes that he has only two allies: an exceptional" +
      "knowledge of symbols and a mysterious young researcher, Vittoria Vetra. The searches will carry the two scientists through crypts sealed for centuries, through catacombs full" +
      "of dangers and through abandoned cathedrals",
    popular: true,
    image: "/img/angels_demons.jfif",
  },
  {
    id: 5,
    name: "Two can keep a secret",
    author: "Karen M. McManus",
    category: "Fiction",
    price: 45,
    description:
      "Ellery knows everything there is to know about secrets. Her mother has them; grandma, as well. The longer he stays in Echo Ridge, the more he realizes that everyone" +
      "is hiding something. The problem is that secrets are dangerous, and people are not very good at keeping them. That's why the safest thing in Echo Ridge is to always keep" +
      "your secrets for yourself",
    popular: true,
    image: "/img/secret.jpg",
  },

  {
    id: 6,
    name: "Rich dad, poor dad",
    author: "Robert T. Kiyosaki",
    category: "Business, Economy, Finance",
    price: 60,
    description:
      "It shows parents why they cannot rely on the education system if they want to see their children learning something about money." +
      "Define once and for all the  img and liabilities." +
      "It will teach you what and how to tell the children about money, so that they will be financially successful in the future.",
    image: "/img/rich_poor.jpg",
    popular: true
  },
  {
    id: 7,
    name: "The richest man in Babylon",
    author: "George S. Clason",
    category: "Business, Economy, Finance",
    price: 25,
    description:
      "Using a language as simple but profound as the bible, this guide to understanding the financial world outlines a secure path to prosperity and, implicitly, to happiness." +
      "At the same time, it helps us to understand the financial problems we face, offering us a solution that will guide us for the rest of our lives. The richest man in Babylon" +
      "is a book that you must read without delay, recommend it to friends and give it to young people who are taking the first steps in the business world.",
    image: "/img/babylon.jpg",
    popular: false
  },
  {
    id: 8,
    name: "GirlBoss",
    author: "Sophia Amoruso",
    category: "Business, Economy, Finance",
    price: 34,
    description:
      "#GIRLBOSS speaks about a lot of things. Prove that being successful is not related to your high school popularity or the college you attended (if you graduated from college)." +
      "Instead, success is related to trusting your instincts and how you listen to your intuition, knowing what rules to follow and breaking.",
    image: "/img/girlboss.jpg",
    popular: true
  },
  {
    id: 9,
    name: "Emotional intelligence in Leadership",
    author: "Daniel Goleman",
    category: "Business, Economy, Finance",
    price: 74,
    description:
      "In the pages of this book you will find the experiences of many leaders with a special emotional intelligence. From the research of these cases, answers to vital" +
      "questions regarding leadership based on emotional intelligence have emerged. For example, what resources are needed for leaders to be effective? Where does a leader" +
      "draw strength from? How do you inspire others around you? How do you create a climate conducive to inventiveness, performance and human relations?",
    image: "/img/emotional_intelligence.jpg",
    popular: false
  },
  {
    id: 10,
    name: "Leaders eat last",
    author: "Simon Sinek",
    category: "Business, Economy, Finance",
    price: 45,
    description:
      "Leadership is not a license to work less; it's a responsibility to work harder. And here's the problem: leadership means work. It means time and energy." +
      "Its effects are not easy to measure and are not always immediate. Leadership means being dedicated to people." +
      "Leadership, true leadership, is not the bastion of those who are at the top. It is the responsibility of all those in the group. " +
      "Even though people holding an official position may have the authority to act on a larger scale, each of us has a responsibility to protect the Safety Zone." +
      "We must all start today to do small things for the good of others ... day after day. ",
    image: "/img/leaders.jpg",
    popular: false
  },
  {
    id: 11,
    name: "Start with what you don't like",
    author: "Brian Tracy",
    category: "Self Development",
    price: 25,
    description:
      "Start with what you do not like (Eat That Frog), start from a simple idea: you never have time to finish everything that needs to be done and things or parasitic" +
      "states always appear, which stop you from doing what is most important. The solution that Tracy explains during 21 rules starts from observing three principles:" +
      "that of decision-making, discipline and determination. Brian Tracy always has the frog metaphor, the one you don't like in the name of the book, the work you have" +
      "to do, but because it's unpleasant, you go around it. He will come to dominate you, and because you have delayed it, it could be worse!",
    image: "/img/start_wwydl.jpg",
    popular: true
  },
  {
    id: 12,
    name: "Words that change minds",
    author: "Shelle Rose Charvet",
    category: "Self Development",
    price: 20,
    description:
      ' "Words that change minds" deals with:' +
      "* motivational triggers" +
      "* how to discover the patterns of an individual or a group" +
      "* use of the Influence Language suitable for maximum impact" +
      "* how to use this tool in any communication context" +
      "* how to create powerful advertising and marketing campaigns" +
      "* how to hire the right man at the right place" +
      "* how to create highly performing teams managing people's strengths instead of suffering from their weaknesses.",
    image: "/img/words.jpg",
    popular: false
  },
  {
    id: 13,
    name: "Attitude is everything",
    author: "Jeff Keller",
    category: "Self Development",
    price: 33,
    description:
      "Why do some people succeed in everything they propose and others do not? What is the difference between them and what could someone do to be among the winners?" +
      "Everything is about attitude, the ability to imagine yourself in the position of winner, and Jeff Keller gives concrete examples of people who succeeded in life" +
      "just because they kept in mind their image reaching the proposed goals. For example, C line Dion, when asked if she had ever imagined at the beginning of her career" +
      "that she would sell millions of records and sing in front of tens of thousands each week, said she had not been taken. by surprise of these things, since he had imagined" +
      "them all from the age of 5 years. Therefore, anyone can become a winner, if they see themselves in this position and if they have the right attitude.",
    image: "/img/attitude.jpg",
    popular: true
  },
  {
    id: 14,
    name: "The 5 second rule",
    author: "Mel Robbins",
    category: "Self Development",
    price: 30,
    description:
      "By reading this book, you will discover that in just 5 seconds you can:" +
      "* regain your confidence in your own forces;" +
      "* to get rid of doubts and delays;" +
      "* to overcome fear and uncertainty;" +
      "* Don't worry about unnecessary things and be happy;" +
      "* to share your ideas with courage.",
    image: "/img/five_rules.jpg",
    popular: false
  },
  {
    id: 15,
    name: "The monk who sold his Ferrari",
    author: "Robin Sharma",
    category: "Self Development",
    price: 33,
    description:
      "The pages of this book contain wise lessons and practical lessons about:" +
      "*how to discover your mission in this life and follow your calling" +
      "*how to develop a harmonious and healthy thinking" +
      "*how to self-discipline and act with confidence and courage" +
      "*how to learn to appreciate time as your most valuable treasure" +
      "*how to strengthen your relationships with your loved ones and live plenary every moment with them",
    image: "/img/monk.jpg",
    popular: true
  },
  {
    id: 16,
    name: "The conquest of happiness",
    author: "Bertrand Russell",
    category: "Psychology, Pedagogy",
    price: 25,
    description:
      "Happiness, says Russel, is a conquered state. And last but not least, we believe, reading the spiritual and elegant pages of this book. We will find that an" +
      "English thinker remains an English one precisely because it does not take us a moment to remember, for example, the French moralists.",
    image: "/img/happiness.jpg",
    popular: false
  },
  {
    id: 17,
    name: "Black Swan",
    author: " Nassim Nicholas Taleb",
    category: "Psychology, Pedagogy",
    price: 40,
    description:
      "The book you hold in your hand places a critical magnifying glass on our blindness in the face of randomness and the scientific ambition to measure uncertainty." +
      "While inertia urges us to ignore the impact of significant events, Taleb demonstrates that a small number of Black Swords can explain almost anything in our world.",
    image: "/img/black_swan.jpg",
    popular: false
  },
  {
    id: 18,
    name: "Thoughts to myself",
    author: "Marcus Aurelius",
    category: "Psychology, Pedagogy",
    price: 33,
    description:
      "The publication of a new translation into Romanian of Marcus Aurelius's work, Thoughts to himself, finds justification by the fact that this volume represents the first" +
      "bilingual Greek-Romanian edition of the thinkers of the emperor-philosopher, accompanied by a large introductory study, notes made according to all scientific standards," +
      "indices and a substantial bibliography. Using the availability of the contemporary Romanian language, we tried to reproduce all the stylistic nuances of Marcus Aurelius 'text" +
      "and also to translate as precisely as possible the main technical terms of the philosophy of the Portico, thus proposing a new lexical basis for the translation of the other" +
      "texts of Stoic inspiration.' - Cristian Bejan",
    image: "/img/thoughts.jpg ",
    popular: false
  },
  {
    id: 19,
    name: "The wisdom of psychopaths",
    author: "Kevin Dutton",
    category: "Psychology, Pedagogy",
    price: 37,
    description:
      "Extreme optimism is a hallmark of psychopaths, always being able to return even the most sinful situation in their favor. A man of curiosity, Duttona wide and exhausting" +
      "journey begins between the most well-known psychological laboratories, prisons of maximum security, courts and the luxurious offices of the different categories of leaders." +
      "He is trying, in different ways, to penetrate the minds of those who have made the crime a way of life, from the toughest soldiers in the theaters of combat in Iraq and Afghanistan," +
      "to the most dangerous criminals of the best. guarded psychiatric hospital in the British kingdom. After all, the psychologist suggests, the difference between these categories," +
      "and many more - surgeons, managers, rapists, brokers, scammers, politicians, charismatic priests - is grade, not essence.",
    image: "/img/wisdom.jpg",
    popular: true
  },
  {
    id: 20,
    name: "Focus",
    author: "Daniel Goleman",
    category: "Psychology, Pedagogy",
    price: 32,
    description:
      "Daniel Goleman distinguishes three types of attention: the one oriented to one's own person, the one that deviates on others and the one directed towards the environment." +
      "Life cannot reach its full potential, without giving due importance to all these types of attention." +
      "The author shows how people need all three types of attention, presenting in the book numerous case studies, from extremely different fields of activity - from sports and" +
      "education, to arts and business.",
    image: "/img/focus.jpg",
    popular: false
  },
  {
    id: 21,
    name: "The woman in the window",
    author: "A.J. Finn",
    category: "Fiction",
    price: 40,
    description: 
    "It's been ten months since Anna Fox last left home. Ten months when he haunted a ghost through the rooms of his old New York home, lost in memory, too frightened to leave the"+
    "safety of his own home. Anna's only bridge to the real world is the window of her room, where she sits daily, watching her neighbors. When the Russell family moves across the road,"+
    "Anna is immediately drawn to it. A perfect family with three members, an echo of the life she once led. But one night, a terrible scream breaks the silence, and Anna witnesses"+
    "something no one should see. Now he has to do everything he can to uncover the truth about what actually happened. But even if he finds out, will anyone believe it? And can she" +
    "trust herself?",
    image: '/img/window.jpg',
    popular: true
  },
  {
    id: 22,
    name: "The boy on the Schindler's list",
    author: "Leon Leyson",
    category: "Fiction",
    price: 25,
    description: 
    "Leon Leyson was only 10 when the Nazis invaded Poland, and his family was forced to move to a ghetto in Krakow. With incredible luck, perseverance and courage, Leyson manages" +
    "to survive the sadism of the Nazis. Finally, the generosity and skill of a German man named Oskar Schindler saved Leon's life, as did members of his family, whose names were" +
    "added to the list of Jewish workers in his factory - a list that became famous Worldwide: Schindler's List. This is the only memoir ever published by a surviving child on " +
    "Schindler's List and perfectly illustrates the author's dignity.",
    image: '/img/boy.jpg',
    popular: false
  },
  {
    id: 23,
    name: "The lost city",
    author: "Clive Cussler, Paul Kemprecos",
    category: "Fiction",
    price: 48,
    description: 
    "The discovery of a body frozen for ninety years in a glacier high in the French Alps seems of unlikely concern to Kurt Austin and the NUMA Special Projects team. " + 
    "But when those on site are trapped in alpine tunnels flooding with glacial meltwater, Austin can hardly ignore a cry for help. And this near tragedy proves to be no mere" +
    "accident. For the body held a secret. A secret someone was prepared to kill for.",
    image: '/img/city.jpg',
    popular: false
  },
  {
    id: 24,
    name: "The six pillars of self-confidence",
    author: "Nathaniel Branden",
    category: "Self Development",
    price: 34,
    description: 
    " Dr. Branden presents the six pillars of self-confidence: six practices that we can apply in everyday life. For the first time we have at hand a series of simple, but"+
    "effective exercises that emphasize self-awareness and efficiency of each one of us. Exploring the importance of self-respect in the workplace, in the relationship" +
    "between parents and children, in education, psychotherapy and society, Dr. Branden offers helpful tips to those responsible for developing self-respect in others and" +
    "explains why it is imperative to cultivate self-respect. itself in the 21st century. ",
    image: '/img/pillars.jpg',
    popular: true
  },
  {
    id: 25,
    name: "The Hate U Give",
    author: "Angie Thomas",
    category: "Fiction",
    price: 46,
    description: 
    "A powerful and brave YA novel about what prejudice looks like in the 21st century. Sixteen-year-old Starr lives in two worlds: the poor neighborhood where she was born " +
    "and raised and her posh high school in the suburbs. The uneasy balance between them is shattered when Starr is the only witness to the fatal shooting of his unarmed best friend,"+
    "Khalil, by a police officer. Now what Starr says could destroy his community. It could also get her killed. Inspired by the Black Lives Matter movement, this is a powerful and " +
    "gripping YA novel about one girl's struggle for justice. Movie rights have been sold to Fox, with Amandla Stenberg (The Hunger Games) to star.",
    image: '/img/hate.jpg',
    popular: true
  },


];

// List of item categories.
const categories = [
  { name: "All categories" },
  { name: "Fiction" },
  { name: "Business, Economy, Finance" },
  { name: "Self Development" },
  { name: "Psychology, Pedagogy" },
];

// Generate data for rendering menu on the left.
const dataForTheMenu = ((categories) => {
  let items = [
    { name: "Home page", url: "/", id: 0 },
    {
      name: "Product categories",
      id: 1,
      children: categories.map((x, i) => {
        return {
          name: x.name,
          id: 2 + i,
          url: "/?category=" + x.name + "&directClick=true",
        };
      })
    },

  ];

  return items;
})(categories)

export { sampleProducts, categories, dataForTheMenu };
