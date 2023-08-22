
const Workshop = require("../models/WorkshopInfo");

const getAllWorkshop = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = getAllWorkshop;