'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cards",
      [      
        {
          deckId: 5,
          prompt: "Who said?",
          question: "Die Hard is a Christmas movie",
          answer: "Everyone",
          source: "the interwebs, so it is true",
        },
        {
          deckId: 5,
          prompt:"Who said?",
          question:"The way to get started is to quit talking and begin doing.",
          answer:"Walt Disney",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"If life were predictable it would cease to be life, and be without flavor.",
          answer:"Eleanor Roosevelt",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Life is what happens when you're busy making other plans.",
          answer:"John Lennon",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"When you reach the end of your rope, tie a knot in it and hang on.",
          answer:"Franklin D. Roosevelt",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
          answer:"Robert Louis Stevenson",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Always remember that you are absolutely unique. Just like everyone else.",
          answer:"Margaret Mead",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"The future belongs to those who believe in the beauty of their dreams.",
          answer:"Eleanor Roosevelt",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
          answer:"Benjamin Franklin",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
          answer:"Helen Keller",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Whoever is happy will make others happy too.",
          answer:"Anne Frank",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
          answer:"Ralph Waldo Emerson",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
          answer:"Mother Teresa",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
          answer:"Nelson Mandela",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"In the end, it's not the years in your life that count. It's the life in your years.",
          answer:"Abraham Lincoln",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Never let the fear of striking out keep you from playing the game.",
          answer:"Babe Ruth",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Life is either a daring adventure or nothing at all.",
          answer:"Helen Keller",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
          answer:"Thomas Alva Edison",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
          answer:"Dr. Seuss",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Only a life lived for others is a life worthwhile.",
          answer:"Albert Einstein",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"You only live once, but if you do it right, once is enough.",
          answer:"Mae West",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"May you live all the days of your life.",
          answer:"Jonathan Swift",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Life itself is the most wonderful fairy tale.",
          answer:"Hans Christian Andersen",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Do not let making a living prevent you from making a life.",
          answer:"John Wooden",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Love the life you live. Live the life you love.",
          answer:"Bob Marley",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"I failed my way to success.",
          answer:"Thomas Edison",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"The only place where success comes before work is in the dictionary.",
          answer:"Vidal Sassoon",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"You miss 100% of the shots you don't take.",
          answer:"Wayne Gretzky",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Nothing is impossible, the word itself says, ‘I'm possible!'",
          answer:"Audrey Hepburn",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Believe you can and you're halfway there.",
          answer:"Theodore Roosevelt",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"The question isn't who is going to let me; it's who is going to stop me.",
          answer:"Ayn Rand",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"If you tell the truth, you don't have to remember anything.",
          answer:"Mark Twain",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Truth is like the sun. You can shut it out for a time, but it ain't goin' away.",
          answer:"Elvis Presley",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"You can observe a lot by just watching.",
          answer:"Yogi Berra",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"All that glitters is not gold.",
          answer:"William Shakespeare",
          source: "",
        },
        
        {
          deckId: 5,
          prompt:"Who said?",
          question:"Let the one among you who is without sin be the first to cast a stone.",
          answer:"Jesus Christ",
          source: "",
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
