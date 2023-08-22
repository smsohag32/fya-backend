const express = require("express");
const getAllWorkshop = require("../controller/workshopController.js");
const router = express.Router();

router.get("/workshops", getAllWorkshop);

module.exports = router;
