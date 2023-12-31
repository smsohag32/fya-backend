const { Schema, model, models } = require("mongoose");

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  image: {
    type: String,
    required: [true, "Image is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  gender: {
    type: String,
   
  },
  phone: {
    type: String,
   
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },
});

const usersInfo = models.usersinfo || model("usersinfo", usersSchema);

module.exports = usersInfo;
