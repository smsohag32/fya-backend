const express = require("express");
const router = express.Router();
const { getCars, postCar } = require("../controller/carsController.js");

router.post("/cars", postCar);
router.get("/cars/:email", getCars);

module.exports = router;
