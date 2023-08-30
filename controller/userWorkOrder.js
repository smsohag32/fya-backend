const WorkOrders = require("../models/WorkOrders");

const getUserWorkOrder = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const workshops = await WorkOrders.find(query);
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUserWorkOrder };
