const { Schema, model, models } = require("mongoose");

const confirmSchema = new Schema({
  itemDetails: {
    type: String,
  },
  totalQuantity: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
  vat: {
    type: String,
  },
  shippingFee: {
    type: String,
  },
  totalPaymentBDT: {
    type: String,
  },
  totalPayment: {
    type: String,
  },
  customerName: {
    type: String,
  },
  customerEmail: {
    type: String,
  },
  customerImage: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  paidStatus: {
    type: String,
  },
  transactionId: {
    type: String,
  },
});

const confirmorders =
  models.confirmorders || model("confirmorders", confirmSchema);

module.exports = confirmorders;
