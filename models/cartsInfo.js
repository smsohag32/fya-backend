const { Schema, model, models } = require("mongoose");

const cartsSchema = new Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  productID: {
    type: String,
  },
  productName: {
    type: String,

  },
  productImage: {
    type: String,

  },
  description: {
    type: String,
  },
  quantity: {
    type: String,
  },
  price: {
    type: String,
  },
  status: {
    type: String,
  },
});

const cartsInfos = models.cartsinfos || model("cartsinfos", cartsSchema);

module.exports = cartsInfos;
