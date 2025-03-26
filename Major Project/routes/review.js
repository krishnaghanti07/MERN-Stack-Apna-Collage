const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/review");
const Listing = require("../models/listing");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

// Reviews
//Post Review Route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(async (req, res) => {
      // console.log(req.params.id);
      let listing = await Listing.findById(req.params.id);
      let newReview = new Review(req.body.review);
      newReview.author = req.user._id;
      // console.log(newReview);
      listing.reviews.push(newReview);
  
      await newReview.save();
      await listing.save();
  
      req.flash("success" , "New Review Created..!");
      res.redirect(`/listings/${listing._id}`);
      // console.log("New Review Saved...");
      // res.send("New Review Saved..");
    })
  );
  
  // Delete Review Route
  router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(async (req, res) => {
      let { id, reviewId } = req.params;
      // console.log(req.originalUrl);
  
      await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
      await Review.findByIdAndDelete(reviewId);
  
      req.flash("success" , "Review Deleted..!");
      res.redirect(`/listings/${id}`);
    })
  );

  module.exports = router ;