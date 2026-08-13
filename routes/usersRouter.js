const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("Hey its user");
});

router.post("/register", registerUser);

module.exports = router;
