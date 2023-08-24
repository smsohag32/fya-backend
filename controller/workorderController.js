const WorkOrders = require("../models/WorkOrders");

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

module.exports = { getWorkOrders, postOrder };
