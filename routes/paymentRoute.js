const express = require("express");
const router = express.Router();
const {
  initiatePayment,
  paymentSuccess,
  paymentFailure,
  paymentCancel,
  ipnCallback,
  cashOn,
} = require("../controller/paymentController.js");

/// Route for initiating payment
router.post("/initiate-payment", initiatePayment);

// Route for payment success callback
router.post("/payment/success/:tranId", paymentSuccess);

// Route for payment failure callback
router.post("/payment/fail/:tranId", paymentFailure);

// Route for payment cancellation callback
router.post("/payment/cancel", paymentCancel);

// Route for IPN (Instant Payment Notification) callback
router.post("/ipn", ipnCallback);
router.post("/payment/cash-on", cashOn);

module.exports = router;
