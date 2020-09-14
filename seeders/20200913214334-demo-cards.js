'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          deckId: 1,
          prompt: "",
          question: "4 + 5 = ?",
          answer: "9",
          source: "",
        },        
        {
          deckId: 2,
          prompt: "Who said?",
          question: "Die Hard is a Christmas movie",
          answer: "Everyone",
          source: "the interwebs, so it is true",
        },
        {
          deckId: 1,
          prompt: "",
          question: "4^2 = ?",
          answer: "16",
          source: "",
        },
        {
          deckId: 2,
          prompt: "Who said?",
          question: "gonna need some more FBI guys, I guess.",
          answer: "Deputy Chief Dwayne T. Robinson",
          source: "",
        },
        {
          deckId: 1,
          prompt: "",
          question: "3 + 2 = ?",
          answer: "5",
          source: "",
        },
        {
          deckId: 1,
          prompt: "",
          question: "10 + 11 = ?",
          answer: "21",
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
