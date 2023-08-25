const express = require("express");
const router = express.Router();
const { getCars, postCar } = require("../controller/carsController.js");

router.get("/cars/:email", getCars);
router.post("/cars", postCar);

module.exports = router;
