'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UserDecks",
      [
        {
          userId: 1,
          deckId: 1,
          numCorrectFirstPass: 10,
          numCorrectLastPass: 14,
          numCardsInDeck: 20,
        },
        {
          userId: 2,
          deckId: 1,
          numCorrectFirstPass: 9,
          numCorrectLastPass: 16,
          numCardsInDeck: 21,
        },
        {
          userId: 2,
          deckId: 2,
          numCorrectFirstPass: 4,
          numCorrectLastPass: 6,
          numCardsInDeck: 10,
        },
      ]
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
