const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  getReview,
  getWorkshopReview,
  reviewPost,
} = require("../controller/reviewController.js");

router.get("/reviews", getAllReviews);
router.get("/reviews/:id", getReview);
router.post("/reviews", reviewPost);
router.get("/reviews/workshop/:email", getWorkshopReview);

module.exports = router;
