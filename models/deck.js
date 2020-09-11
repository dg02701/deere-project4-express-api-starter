'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Deck.hasMany(models.Card, { foreignKey: "deckId" });
      Deck.belongsToMany(models.User, {
        through: "UserDeck",
        foreignKey: "deckId",
        otherKey: "userId",
      }); 
    };
  };

  Deck.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};