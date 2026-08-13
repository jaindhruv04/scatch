const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, fullname, password } = req.body;

    let userCheck = await userModel.findOne({ email: email });
    if (userCheck) {
      return res.status(401).send("Account already exists");
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.send(err.message);
        } else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User Created Successfully");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });

  if (!user) {
    req.flash("error", "Email or password Incorrect");
    return res.redirect("/");
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token).redirect("/shop");
    } else {
      req.flash("error", "Email or password Incorrect");
      return res.redirect("/");
    }
  });
};

module.exports.logoutUser = async (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
};
