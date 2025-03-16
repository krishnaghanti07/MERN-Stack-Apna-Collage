const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require('express-session');
const flash = require('connect-flash');

const listings = require("./routes/listing");
const reviews = require("./routes/review");

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

// use a middleware to create a flash-message
app.use((req , res , next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  // console.log(res.locals.success);
  next();
});

// seperate the routing logic of "Listings" & "Reviews"  from the app.js (using as middleware)
app.use("/listings" , listings);
app.use("/listings/:id/reviews" , reviews);


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
