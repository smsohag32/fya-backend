const express = require("express");
const router = express.Router();

const {postOrder, getWorkOrders, updateStatus} = require('../controller/workorderController.js')

router.post("/orders", postOrder);
router.get("/orders/:email", getWorkOrders);
router.patch("/orders/:email", updateStatus);

module.exports = router;
