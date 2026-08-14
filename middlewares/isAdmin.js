module.exports = (req, res, next) => {
  console.log("isAdmin check - req.user:", req.user);
  if (req.user && req.user.email === "dhruvjain0412@gmail.com") {
    return next();
  }
  req.flash("error", "You are not authorized to access this page");
  res.redirect("/shop");
};
