exports.getLogin = (req, res, next) => {
  /*
    Getting session variable
  */
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  /*
    Using the session middleware
    setting session variable named isLoggedIn to true

    Now this isLoggedIn is stored in server and will be 
    shared across requests. So different requests of the 
    same user will have this variable set to true

    Howevers, different user won't have isLoggedIn to true 
    because it is the core idea of session, sharing the information
    across requests not, across users
  */
  req.session.isLoggedIn = true;
  res.redirect("/");
};
