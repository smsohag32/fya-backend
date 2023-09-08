const express = require("express");
const router = express.Router();

const {
  getSummary,
  getWorkshopSummary,
  getUsersSummary,
} = require("../controller/summaryController.js");

router.get("/admin/summary", getSummary);
router.get("/workshop/summary/:email", getWorkshopSummary);
router.get("/users/summary/:email", getUsersSummary);

module.exports = router;
