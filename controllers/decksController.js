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
    res.json({ artist: deckUsed });
  });

//GET ALL DECKS
//localhost:3000/api/decks
router.get("/", async (req, res) => {
    let decks = await DeckModel.findAll({
        include: CardModel,
    });
    res.json({ decks });
  });



module.exports = router;