const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getService,
} = require("../controller/serviceController.js");

router.get("/services", getAllServices);
router.get("/services/:id", getService);

module.exports = router;
