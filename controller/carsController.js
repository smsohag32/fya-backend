const carsinfos = require("../models/CarsInfo.js");

const getCars = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const cars = await carsinfos.find(query);
    res.send(cars);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postCar = async (req, res) => {
  try {
    const newCar = req.body;
    const car = await carsinfos.create(newCar);
    res.send(car);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCars, postCar };
