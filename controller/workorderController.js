const WorkOrders = require("../models/WorkOrders.js");

const getWorkOrders = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { workshop_email: email };
    const workshops = await WorkOrders.find(query);
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const postOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const workshop = await WorkOrders.create(newOrder);
    res.send(workshop);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateStatus = async (req, res) => {
  try {
    const updateInformation = req.body;
    const id = req.params.id;
    const query = { _id: id };
    const option = { upsert: true };
    const updatedDoc = {
      $set: {
        lat: updateInformation?.lat || "",
        lon: updateInformation?.lon || "",
        status: updateInformation?.status,
        message: updateInformation?.message || "",
        technicain: updateInformation?.technician || "",
      },
    };
    const result = await userInfo.updateOne(query, updatedDoc, option);
    res.send({ message: "appointment status update done" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getWorkOrders, postOrder, updateStatus };
