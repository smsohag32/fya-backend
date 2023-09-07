const express = require("express");
const {
  getAllWorkshop,
  getWorkshop,
  addWorkshop,
  searchWorkshop,
  searchLocation,
  updateStatus,
  deleteWorkshop,
} = require("../controller/workshopController.js");
const router = express.Router();

router.get("/workshops", getAllWorkshop);
router.delete("/workshops/:id", deleteWorkshop);
router.get("/workshops/:id", getWorkshop);
router.put("/workshops/:email", addWorkshop);
router.patch("/workshops/status/:id", updateStatus);
router.get("/workshops/search", searchWorkshop);
router.get("/workshops/search/division", searchLocation);

module.exports = router;
