const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id);
  res.json({ user });
});

// GET ALL USERS
router.get("/", async (res, req) => {
  let users = await UserModel.findAll();
  res.json({ users });
});

module.exports = router;
