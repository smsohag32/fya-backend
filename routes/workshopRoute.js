const express = require("express");
const {
  getAllWorkshop,
  getWorkshop,
} = require("../controller/workshopController.js");
const router = express.Router();

router.get("/workshops", getAllWorkshop);
router.get("/workshops/:id", getWorkshop);

module.exports = router;
