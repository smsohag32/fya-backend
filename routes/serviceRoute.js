const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getService,
  postService,
  workshopServices,
} = require("../controller/serviceController.js");

router.get("/services", getAllServices);
router.post("/services/:email", postService);
router.get("/services/:id", getService);
router.get("/services/workshops/:email", workshopServices);

module.exports = router;
