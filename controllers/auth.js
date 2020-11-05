const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  // console.log(req.session.isLoggedIn);
  // console.log(req.session.user);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("5f7655080c4e9d6aacada07a")
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      return res.redirect("/");
    })
    .catch((err) => console.log(err));
};
