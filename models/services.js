const { Schema, model, models } = require("mongoose");

const servicesSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required."],
  },
  workshop_id: {
    type: String,
    required: [true, "workshop is required."],
  },
  service_name: {
    type: String,
    required: [true, "Service name is required."],
  },
  service_category: {
    type: String,
    required: [true, "service_category is required."],
  },
  service_description: {
    type: String,
    required: [true, "service_description is required."],
  },
  service_duration: {
    type: String,
    required: [true, "service_duration is required."],
  },
  service_price: {
    type: String,
    required: [true, "service_price is required."],
  },
  benefits: {
    type: String,
  },
  customer_reviews: {
    type: [],
  },
  workshop_image: {
    type: String,
    required: [true, "workshop_image is required."],
  },
  service_image: {
    type: String,
    required: [true, "service_image is required."],
  },
  warranty: {
    type: String,
  },
  workshop_email: {
    type: String,
  },
});

const services = models.services || model("services", servicesSchema);

module.exports = services;
