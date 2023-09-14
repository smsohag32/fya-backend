const { Schema, model, models } = require("mongoose");

const reviewSchema = new Schema({
  user_name: {
    type: String,
    required: [true, "Name is required."],
  },
  user_email: {
    type: String,
    required: [true, "Image is required."],
  },
  workshop_email: {
    type: String,
    required: [true, "Email is required."],
  },
  review: {
    type: String,
  },
  rating: {
    type: String,
  },
  user_img: {
    type: String,
  },
  workshop_name: {
    type: String,
  },
});

const reviewinfos = models.reviewinfos || model("reviewinfos", reviewSchema);

module.exports = reviewinfos;
