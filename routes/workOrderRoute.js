const express = require("express");
const router = express.Router();

const {postOrder, getWorkOrders} = require('../controller/workorderController.js')

router.post("/orders", postOrder);
router.get("/orders/:email", getWorkOrders);

module.exports = router;
