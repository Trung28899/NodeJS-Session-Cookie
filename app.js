const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();
const MONGODB_URI =
  "mongodb+srv://trung:trungtrinh38@cluster0.px6on.mongodb.net/shop";

/*
  Setting up for session to work with MongoDB
*/
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "session",
});

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
/*
  Setting up Session
  This is the default setting, 
  secret is the key to access your session
*/
app.use(
  session({
    secret: "trung secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  User.findById("5f7655080c4e9d6aacada07a")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Trung",
          email: "trung28899@gmail.com",
          cart: { items: [] },
        });

        user.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => console.log(err));
