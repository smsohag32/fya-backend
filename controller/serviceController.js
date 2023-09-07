const services = require("../models/services.js");

const getAllServices = async (req, res) => {
  try {
    const serviceData = await services.find();
    res.send(serviceData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getService = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await services.findById(id);
    res.send(service);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const workshopServices = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { workshop_email: email };
    const service = await services.find(query);

    if (!service || service.length === 0) {
      res.send([]);
    } else {
      res.send(service);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postService = async (req, res) => {
  try {
    const newService = req.body;
    const service = await services.create(newService);
    res.send(service);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllServices, getService, postService, workshopServices };
