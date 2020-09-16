const express = require("express");
const router = express.Router();

const DeckModel = require("../models").Deck;
const UserDeckModel = require("../models").UserDeck;
const UserModel = require("../models").User;

//GET DECK PROFILE
// from 'muse' README.md
// This route returns the users that played a deck
// Inside of include see if you can only return the name and id attributes for a UserModel
// router.get("/profile/:id", async (req, res) => {
//     let deckUsed = await DeckModel.findByPk(req.params.id, {
//       include: [{ model: UserModel, attributes: ["id", "name"] }],
//     });
//     res.json({ deckUsed });
//   });


//GET ALL USERDECKS - 'Player history/stats'
//GET http://localhost:3000/api/decks
router.get("/", async (req, res) => {
    let allUserHistory = await UserDeckModel.findAll();
    res.json({ allUserHistory });
  });

//GET ALL cards in a deck
//GET http://localhost:3000/api/decks/cardsInDeck/1
// router.get("/cardsInDeck/:id", async (req, res) => {
//     let deck = await DeckModel.findByPk(req.params.id, {
//         include: CardModel,
//     });
//     res.json({ deck });
//   });

// CREATE A NEW Entry in USERDECKS - new row represents history/stats for a user playing a
//      a specific deck.
// POST http://localhost:3000/api/decks
router.post("/", async (req, res) => {
  let newUserHistory = await UserDeckModel.create(req.body);
  res.json({ newUserHistory });
});

// CREATE A NEW CARD for a DECK
// POST http://localhost:3000/api/decks/:id/newcard
// router.post("/:id/newcard", async (req, res) => {
//     let deck = await DeckModel.findByPk(req.params.id);
//     let card = await deck.createCard(req.body);
//     res.json({ deck, card });
//   });

//!!!DELETE A USERDECKS!!! - did not build route due to dangers.
// If needed to add, look to making the model "Paranoid"
// https://sequelize.org/master/manual/paranoid.html



module.exports = router;