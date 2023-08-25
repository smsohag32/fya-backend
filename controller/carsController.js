const carsinfos = require("../models/CarsInfo");

const getCars = async (req, res) => {
  const email = req.params.email;
  try {
    const query = { email: email };
    const service = await carsinfos.find(query);
    res.send(service);
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
