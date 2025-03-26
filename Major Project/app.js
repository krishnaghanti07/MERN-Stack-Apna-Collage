const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/user");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

const port = 8050;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB..");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
  secret: "mySuperSecretCode0023" ,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000 ,
    maxAge: 7 * 24 * 60 * 60 * 1000 ,
    httpOnly: true ,
  }
};

app.get("/", (req, res) => {
  res.send("Hii There.. , I am Root...!!");
});

// using Session & flash in our app
app.use(session(sessionOptions));
app.use(flash());

// configuring strategey using "Passport"
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// use a middleware to create a flash-message
app.use((req , res , next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user ;
  // console.log(res.locals.success);
  next();
});

// // Creating a Demo-User
// app.get("/demouser" , async (req , res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com" ,
//     username: "Delta-Student" ,
//   });

//   let registeredUser = await User.register(fakeUser , "helloworld");
//   res.send(registeredUser) ;
// });

// seperate the routing logic of "Listings" & "Reviews"  from the app.js (using as middleware)
app.use("/listings" , listingRouter);
app.use("/listings/:id/reviews" , reviewRouter);
app.use("/" , userRouter);

// // Testing the Listing-Model
// app.get("/testListing" , async (req , res) => {
//     let sampleListing = new Listing ({
//         title: "My New Villa" ,
//         description: "By the beach" ,
//         price: 12000 ,
//         location: "Calangute, Goa" ,
//         country: "India" ,
//     });

//     await sampleListing.save();
//     console.log("Sample was saved...");
//     res.send("Sucessful Testing..");
// });

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found..!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong..!" } = err;
  res.status(statusCode).render("error.ejs", { message });
  //   res.status(statusCode).send(message) ;
});

app.listen(port, () => {
  console.log(`The Server is running on port : ${port}`);
});
