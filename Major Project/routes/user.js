const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users");

router
  .route("/signup")
  .get(userController.renderSignupForm) // Rendering the sign-up form
  .post(wrapAsync(userController.signup)); // let/help the Un-registered users to get Registered / Signing-Up

router
.route("/login") // Rendering the log-in form
.get(userController.renderLoginForm)
.post(  // let/help the already Registered users to get Logged-in
// use "passport.authenticate()" as a middleware to authenticate the particular user
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

// let/help the already Logged-in users to get Logged-out / Logged-off
router.get("/logout", userController.logout);

module.exports = router;

// Rendering the sign-up form
// router.get("/signup", userController.renderSignupForm);

// let/help the Un-registered users to get Registered / Signing-Up
// router.post("/signup", wrapAsync(userController.signup));

// Rendering the log-in form
// router.get("/login", userController.renderLoginForm);

// let/help the already Registered users to get Logged-in
// use "passport.authenticate()" as a middleware to authenticate the particular user
// router.post(
//   "/login",
//   saveRedirectUrl,
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   userController.login
// );
