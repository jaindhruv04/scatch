const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();
const path = require("path");

const db = require("./config/mongoose-connections");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  }),
);
app.use(flash());

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", { error: req.flash("error") });
});

app.get("/shop", (req, res) => {
  res.render("shop", { products: [] });
});

app.listen(3000);
