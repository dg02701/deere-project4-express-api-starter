const express = require("express");
const router = express.Router();

const CardModel = require("../models").Card;
const DeckModel = require("../models").Deck;

//GET ALL CARDS
//GET http://localhost:3000/api/cards
router.get("/", async(req, res) => {
    let cards = await CardModel.findAll();
    res.json({ cards });
});

module.exports = router;
