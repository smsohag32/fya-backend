const express = require("express");
const getAllWorkshop = require("../controller/workshopController.js");
const router = express.Router();


router.get("/workshop", getAllWorkshop);



module.exports = router;