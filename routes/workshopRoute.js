const express = require("express");
const {
  getAllWorkshop,
  getWorkshop,
  addWorkshop,
  searchWorkshop,
  searchByTab
} = require("../controller/workshopController.js");
const router = express.Router();

router.get("/workshops", getAllWorkshop);
router.get("/workshops/:id", getWorkshop);
router.put("/workshops/:email", addWorkshop);
router.get("/workshops/search", searchWorkshop);
router.get("/workshops/search/division", searchByTab);

module.exports = router;
