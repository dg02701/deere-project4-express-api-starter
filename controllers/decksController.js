const express = require("express");
const router = express.Router();

const DeckModel = require("../models").Deck;
const CardModel = require("../models").Card;
const UserDeckModel = require("../models").UserDeck;
const UserModel = require("../models").User;

//GET DECK PROFILE
// from 'muse' README.md
// This route returns the users that played a deck
// Inside of include see if you can only return the name and id attributes for a UserModel
router.get("/profile/:id", async (req, res) => {
    let deckUsed = await DeckModel.findByPk(req.params.id, {
      include: [{ model: UserModel, attributes: ["id", "name"] }],
    });
    res.json({ deckUsed });
  });


//GET ALL DECKS
//GET http://localhost:3000/api/decks
router.get("/", async (req, res) => {
    let decks = await DeckModel.findAll({
        include: CardModel,
    });
    res.json({ decks });
  });

//GET ALL cards in a deck
//GET http://localhost:3000/api/decks/cardsInDeck/1
router.get("/cardsInDeck/:id", async (req, res) => {
    let deck = await DeckModel.findByPk(req.params.id, {
        include: CardModel,
    });
    res.json({ deck });
  });

// CREATE A NEW DECK
// POST http://localhost:3000/api/decks
router.post("/", async (req, res) => {
  let newDeck = await DeckModel.create(req.body);
  res.json({ newDeck });
});

//DELETE A DECK  !!!do not use if deck has history!!!
// Body - 'none'
// DELETE http://localhost:3000/api/decks/:id
router.delete("/:id", async (req, res) => {
    await DeckModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `Deck with id ${req.params.id} was deleted`,
    });
  });

module.exports = router;