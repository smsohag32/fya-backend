const express = require("express");
const router = express.Router();
const {
  initiatePayment,
  paymentSuccess,
  paymentFailure,
} = require("../controller/paymentController.js");

// Endpoint to initiate payment
router.post("/user/carts/product/order_api", initiatePayment);

// Endpoint to handle payment success callback
router.post("/payment/success/:tranId", paymentSuccess);

// Endpoint to handle payment failure callback
router.post("/payment/fail/:tranId", paymentFailure);

module.exports = router;
