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

const searchByTab = async() => {
  
}

const searchWorkshop = async (req, res) =>{
  
}
module.exports = {getWorkOrders, postOrder};
