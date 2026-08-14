const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-models");
const isLoggedIn = require("../middlewares/isLoggedIn");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find();

      if (owners.length > 0) {
        return res
          .status(500)
          .send("You Dont Have Permission To Create A New Owner");
      }

      let { fullname, email, password } = req.body;

      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).send(createdOwner);
    } catch (err) {
      req.flash("error", "Something Went Wrong");
      res.redirect("/");
    }
  });
}

router.get("/admin", isLoggedIn, (req, res) => {
  let success = req.flash("success");
  res.render("createproducts", { success: success, loggedin: true });
});

module.exports = router;
