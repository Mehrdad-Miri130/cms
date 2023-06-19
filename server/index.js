"use strict";

// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const userDao = require("./services/user-dao");

// Passport-related imports
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");

// express router
const sessions = require("./router/sessions");
// const user = require("./router/user");
const pages = require("./router/pages");
// init
const port = 3000,
  app = express();

// set up middlewares
//app.use(morgan("dev"));
//app.use(cors(corsOptions));
app.disable("x-powered-by");
app.enable("trust proxy");
//app.use(cors());
app.use(cors({
  "credentials": true
}));
app.use(morgan("dev"));
app.use(express.json({ limit: "200kb" }));
app.use(express.static(path.join(__dirname, "public")));
// http://localhost:port/images/img-1.jpg
// http://localhost:port/images/img-2.jpg
// http://localhost:port/images/img-3.jpg
// http://localhost:port/images/img-4.jpg
// Passport: set up local strategy
passport.use(
  "local.login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function verify(username, password, cb) {
      const user = await userDao.getUser(username, password);
      if (!user) return cb(null, false, "Incorrect username or password.");
      return cb(null, user);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  return cb(null, user);
});

app.use(
  session({
    secret: "StrongKEYXxs%!@%!*",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.authenticate("session"));

// router
app.use("/api/sessions", sessions);
app.use("/api/pages", pages);

app.all("*", (_req, _resp, _next) => {
  _resp
    .status(404)
    .json({ status: false, message: "url not found on this server" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
