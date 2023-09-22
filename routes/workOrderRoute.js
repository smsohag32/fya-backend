const express = require("express");
const router = express.Router();

const {
  postOrder,
  getWorkOrders,
  updateStatus,
  getOrders,
} = require("../controller/workorderController.js");

router.post("/orders", postOrder);
router.post("/orders", getOrders);
router.get("/orders/:email", getWorkOrders);
router.patch("/orders/status/:id", updateStatus);

module.exports = router;
