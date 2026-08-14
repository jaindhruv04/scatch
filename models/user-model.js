const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  contact: String,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);
