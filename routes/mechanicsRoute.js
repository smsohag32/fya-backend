const express = require("express");
const router = express.Router();
const {
  getMechanicsData,
  getAllMechanics,
  getSingleMechanics,
  postMechanics,
} = require("../controller/mechanicsController.js");

router.get("/mechanics/workshop/:email", getMechanicsData);
router.get("/mechanics/:id", getSingleMechanics);
router.get("/mechanics", getAllMechanics);
router.post("/mechanics", postMechanics);

module.exports = router;
