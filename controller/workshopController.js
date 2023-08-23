const Workshop = require("../models/WorkshopInfo.js");

const getAllWorkshop = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getWorkshop = async (req, res) => {
  const id = req.params.id;

  try {
    const workshops = await Workshop.findById(id);
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = (getAllWorkshop, getWorkshop);
