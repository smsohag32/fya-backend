const express = require("express");
const router = express.Router();

const { getUserWorkOrder } = require("../controller/userWorkOrder.js");

router.get("/user-order/:email", getUserWorkOrder);

module.exports = router;
