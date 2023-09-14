const express = require("express");
const router = express.Router();
const {
  initiatePayment,
  paymentSuccess,
  paymentFailure,
  paymentCancel,
  ipnCallback,
} = require("../controller/paymentController.js");

/// Route for initiating payment
router.post("/initiate-payment", initiatePayment);

// Route for payment success callback
router.get("/payment/success/:tranId", paymentSuccess);

// Route for payment failure callback
router.get("/payment/fail/:tranId", paymentFailure);

// Route for payment cancellation callback
router.get("/payment/cancel", paymentCancel);

// Route for IPN (Instant Payment Notification) callback
router.post("/ipn", ipnCallback);

module.exports = router;
