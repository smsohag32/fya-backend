const express = require("express");
const getAllWorkshop = require("../controller/workshop.controller");
const router = express.Router();


router.get("/workshop", getAllWorkshop);



module.exports = router;