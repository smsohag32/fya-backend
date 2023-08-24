const { Schema, model, models } = require("mongoose");

const workOrderSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "title is required."],
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Service name is required."],
  },
  service_category: {
    type: String,
  },
  phone: {
    type: String,
  },
  bookingDate: {
    type: String,
  },
  postal: {
    type: String,
    required: [true, "service_description is required."],
  },
  service_id: {
    type: String,
  },
  state: {
    type: String,
    required: [true, "service_price is required."],
  },
  streetAddress: {
    type: String,
    required: [true, "benefits is required."],
  },
  vehicle: {
    type: String,
  },
  workshop_email: {
    type: String,
  },
});

const WorkOrders = models.workorders || model("workorders", workOrderSchema);

module.exports = WorkOrders;
