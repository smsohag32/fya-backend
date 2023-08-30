const WorkOrders = require("../models/WorkOrders");

const getWorkOrders = async (req, res) => {
  try {
    const email = req.params.email;
    const query = {email: email}
    const workshops = await WorkOrders.find(query);
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const postOrder = async (req, res) => {

  try {
    const newOrder = req.body;
    const workshop = await WorkOrders.save(newOrder);
    res.send(workshop);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateStatus = async (req, res) => {

  try {
    const status = req.body;
    const email = req.params.email;
    const query = { email: email };
    const option = { upsert: true };
    const updatedDoc = {
      $set: {
        status: status.status
      },
    };
    const result = await userInfo.updateOne(query, updatedDoc, option);
    res.send({message: 'appointment status update done'});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {getWorkOrders, postOrder, updateStatus};
