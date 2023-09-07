const { Schema, model, models } = require("mongoose");

const mechanicsSchema = new Schema({
  name: {
    type: String,
    required: [true, "workShop_id is required."],
  },
  email: {
    type: String,
  },
  specialty: {
    type: String
  },
  location: {
    type: String
  },
  about: {
    type: String
  },
  img: {
    type: String
  },
  workshop_email: {
    type: String,
  },
  experience: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const mechanicsinfos = models.mechanicsinfos || model("mechanicsinfos", mechanicsSchema);

module.exports = mechanicsinfos;
