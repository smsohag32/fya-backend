const { Schema, model, models } = require("mongoose");

const workshopSchema = new Schema({
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
  },
  products: {
    type: [],
  },
  rating: {
    type: String,
  },
  location: {
    type: String,
   
  },
  workshop_email: {
    type: String,
    required: [true, "location is required."],
  },
  map_link: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Workshop = models.workshopinfos || model("workshopinfos", workshopSchema);

module.exports = Workshop;
