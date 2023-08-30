const { Schema, model, models } = require("mongoose");

const carsInfoSchema = new Schema({
  email: {
    type: String,
    required: [true, "workShop_id is required."],
  },
  model: {
    type: String,
  },
  brand: {
    type: String,
  },
  car_name: {
    type: String,
  },
});

const carsinfos = models.carsinfos || model("carsinfos", carsInfoSchema);

module.exports = carsinfos;
