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
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    return res.redirect("/");
  });
};
