const WorkOrders = require("../models/WorkOrders.js");

const getUserWorkOrder = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const workshops = await WorkOrders.find(query).sort({ orderTime: -1 });
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUserWorkOrder };
