const mechanicsInfos = require("../models/mechanicsInfos.js");


const getMechanicsData = async (req, res) => {
    try {
      const query = {workshop_email: req.params.email}
    const mechanicsData = await mechanicsInfos.find(query);
    res.send(mechanicsData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getSingleMechanics = async (req, res) => {
    try {

    const mechanic = await mechanicsInfos.findById(req.params.id);
    res.send(mechanic);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getAllMechanics = async (req, res) => {
  try {
    const mechanicData = await mechanicsInfos.find();
    res.send(mechanicData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};




module.exports = { getMechanicsData ,getAllMechanics, getSingleMechanics};
