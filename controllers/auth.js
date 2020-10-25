exports.getLogin = (req, res, next) => {
  /*
    Getting the cookie value
  */
  const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
  console.log(isLoggedIn);
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

    Once the cookie is set, you'll need to close the browser 
    or change the cookie manually or set another header to change it 
    for the cookie to change

    if you simple close the tab and send another request to 
    localhost:3000/login, loggedIn cookie is still true
  */
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
