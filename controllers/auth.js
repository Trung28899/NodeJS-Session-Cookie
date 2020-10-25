exports.getLogin = (req, res, next) => {
  /*
    Getting the cookie value
  */
  const isLoggedIn = req.get("Cookie").split("=")[1];
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  /*
    Setting up the cookie
    1st argument: mandatory for cookie setting
    2nd argument: any value you want to set
  */
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
