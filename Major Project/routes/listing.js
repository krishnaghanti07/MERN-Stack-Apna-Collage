const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const listingController = require("../controllers/listings");

router
  .route("/")  // Index Route
  .get(wrapAsync(listingController.index)) 
  .post(  // Create Route
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
  );

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")  // Show Route
  .get(wrapAsync(listingController.showListing))
  .put(  // Update Route
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )  // Delete Route
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
// Index Route
// router.get("/", wrapAsync(listingController.index));

// Show Route
// router.get("/:id", wrapAsync(listingController.showListing));

// Create Route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );


// Update Route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

// Delete Route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destroyListing)
// );

