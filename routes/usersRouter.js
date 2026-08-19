const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logoutUser,
  editUser,
} = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("Hey its user");
});

router.post("/profile", isLoggedIn, editUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;
