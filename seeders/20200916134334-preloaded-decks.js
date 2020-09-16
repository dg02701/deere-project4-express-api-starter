'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Decks",
      [
        {
          title: "General Quotes 10+",
          type: "preloaded",
          category: "Quotes",
        },
        {
          title: "Math 2.0 K-4",
          type: "preloaded",
          category: "Math",
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
