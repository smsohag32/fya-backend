const { ObjectId } = require("mongodb");
const Workshop = require("../models/WorkshopInfo.js");
const usersInfo = require("../models/usersInfo.js");

const getAllWorkshop = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.send(workshops);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getWorkshop = async (req, res) => {
  try {
    const id = req.params.id;
    const workshop = await Workshop.findById(id);
    res.send(workshop);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addWorkshop = async (req, res) => {
  try {
    const newWorkshop = req.body;
    const email = req.params.email;
    const query = { email: email };
    const option = { upsert: true };
    const updatedDoc = {
      $set: newWorkshop,
    };

    const userRole = {
      $set: {
        role: "workshopCenter",
      },
    };
    const result = await Workshop.updateOne(query, updatedDoc, option);
    const roleResult = await usersInfo.updateOne(query, option, userRole);

    res.send({ result, roleResult });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const searchByTab = async (req, res) => {
  const indexKey = { location: 1 };
  const indexOption = { workshop: "workshopLocation" };
  try {
    await Workshop.createIndexes(indexKey, indexOption);

    const searchText = req.query.location;
    const result = await Workshop.find({
      location: { $regex: searchText, $options: "i" },
    });

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const searchWorkshop = async (req, res) => {
  try {
    const indexKey = { workshopName: 1 };
    const indexOption = { workshop: "workshopLocation" };

    const indexResult = await Workshop.createIndexes(indexKey, indexOption);

    const searchText = req.query.title;
    const result = await Workshop.find({
      title: { $regex: searchText, $options: "i" },
    });

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateStatus = async (req, res) => {
  try {
    const status = req.body;
    const id = req.params.id;
    const query = { _id: id };
    const option = { upsert: true };
    const updatedDoc = {
      $set: {
        status: status.status,
      },
    };
    const result = await Workshop.updateOne(query, updatedDoc, option);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllWorkshop,
  getWorkshop,
  addWorkshop,
  searchByTab,
  searchWorkshop,
  updateStatus,
};
