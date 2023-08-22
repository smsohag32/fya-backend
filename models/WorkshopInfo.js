
const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required."],
  },
  image: {
    type: String,
    required: [true, "image is required."],
  },
  address: {
    type: String,
    required: [true, "address name is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  phone: {
    type: Number,
    required: [true, "phone is required."],
  },
  description: {
    type: String,
    required: [true, "description is required."],
  },
  services: {
    type: [],
    required: [true, "services is required."],
  },
  products: {
    type: [],
    required: [true, "service_price is required."],
  },
  workshopCode: {
    type: String,
    required: [true, "workshopCode is required."],
  },
  rating: {
    type: String,
    required: [true, "rating is required."],
  },
  location: {
    type: String,
    required: [true, "location is required."],
  },
});


module.exports = mongoose.model('workshopinfos', workshopSchema);