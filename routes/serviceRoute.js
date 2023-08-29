const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getService,
  postService,
} = require("../controller/serviceController.js");

router.get("/services", getAllServices);
router.post("/services/:email", postService);
router.get("/services/:id", getService);

module.exports = router;
