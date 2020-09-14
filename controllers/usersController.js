const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
// GET http://localhost:3000/api/users/profile/1
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id);
  res.json({ user });
});

// GET ALL USERS
// GET http://localhost:3000/api/users
router.get("/", async (req, res) => {
  let users = await UserModel.findAll();
  res.json({ users });
});

// CREATE A NEW USER
// POST http://localhost:3000/api/users
router.post("/", async (req, res) => {
  let user = await UserModel.create(req.body);
  res.json({ user });
});

module.exports = router;
