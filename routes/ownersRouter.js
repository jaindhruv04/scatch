const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-models");
const isLoggedIn = require("../middlewares/isLoggedIn");
const bcrypt = require("bcrypt");

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

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          let createdOwner = await ownerModel.create({
            fullname,
            email,
            password: hash,
          });
          res.status(201).send(createdOwner);
        });
      });
    } catch (err) {
      req.flash("error", "Something Went Wrong");
      res.redirect("/");
    }
  });
}

const productModel = require("../models/product-model");
const upload = require("../config/multer-config");

const isAdmin = require("../middlewares/isAdmin");

router.get("/admin", isLoggedIn, isAdmin, async (req, res) => {
  let products = await productModel.find();
  let success = req.flash("success");
  res.render("admin", { products, success, loggedin: true });
});

router.get("/admin/create", isLoggedIn, isAdmin, (req, res) => {
  let success = req.flash("success");
  res.render("createproducts", { success, loggedin: true });
});

router.get("/admin/delete/:productid", isLoggedIn, isAdmin, async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.productid);
    req.flash("success", "Product Deleted Successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/admin/edit/:productid", isLoggedIn, isAdmin, async (req, res) => {
  try {
    let product = await productModel.findById(req.params.productid);
    let success = req.flash("success");
    res.render("editproduct", { product, success, loggedin: true });
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/admin/edit/:productid", isLoggedIn, isAdmin, upload.single("image"), async (req, res) => {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    let updateData = { name, price, discount, bgcolor, panelcolor, textcolor };
    if (req.file) updateData.image = req.file.buffer;
    await productModel.findByIdAndUpdate(req.params.productid, updateData);
    req.flash("success", "Product Updated Successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
