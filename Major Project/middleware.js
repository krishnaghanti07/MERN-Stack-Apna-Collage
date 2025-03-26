const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const { listingSchema , reviewSchema } = require("./schema");

module.exports.isLoggedIn = (req, res, next) => {
//   console.log(req.path , ".." , req.originalUrl);
  if (!req.isAuthenticated()) {
    // save originalUrl-path as redirectUrl inside session object
    req.session.redirectUrl = req.originalUrl ;
    req.flash("error", "You must be logged in to create listing..!");
    return res.redirect("/login");
  }
  next();
};

// storing redirectUrl inside the locals-object // (As the data got deleted after login) // "req.session" got reset after authentication
// (so that the redirectUrl data remain stored & accessable even after the user login)
module.exports.saveRedirectUrl = (req , res , next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Checking if our current-user is the owner of our listing or not ..
module.exports.isOwner = async(req , res , next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error" , "You're not the owner of the listing..!");
    return res.redirect(`/listings/${id}`)
  }
  next();
}; 

// used for the Listing validation
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  // console.log(result);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// for the Review validation
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  // console.log(result);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Checking if our current-user is the author of the review or not ..
module.exports.isReviewAuthor = async(req , res , next) => {
  let { id , reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author._id.equals(res.locals.currUser._id)) {
    req.flash("error" , "You're not the author of the review..!");
    return res.redirect(`/listings/${id}`)
  }
  next();
}; 