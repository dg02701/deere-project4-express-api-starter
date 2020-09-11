'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.Deck, { foreignKey: "deckId" });
      // define association here
    }
  };
  Card.init({
    title: DataTypes.STRING,
    deckId: DataTypes.INTEGER,
    prompt: DataTypes.STRING,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    source: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};