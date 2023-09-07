
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

const deleteWorkshop = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.body;
    const query = {email: email.email}
    const updatedDoc = {
      $set: {
        role: 'user'
      }
    }
    const option = {upsert: true}
    const workshop = await Workshop.deleteOne({_id: id});
    const userResult = await usersInfo.updateOne(query,updatedDoc, option)
    res.send({workshop,userResult});
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

    const result = await Workshop.updateOne(query, updatedDoc, option);

    res.send({ result, roleResult });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const searchLocation = async (req, res) => {
  const indexKey = { location: 1 };
  const indexOption = { workshop: "workshopLocation" };

  try {
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10 if not provided
    const page = parseInt(req.query.page) || 1; // Default page to 1 if not provided
    const skip = limit * (page - 1);

    await Workshop.createIndexes(indexKey, indexOption);

    const searchText = req.query.location;
    const query = {
      location: { $regex: searchText, $options: "i" },
    };

    const result = await Workshop.find(query)
      .limit(limit)
      .skip(skip);

    const totalWorkshop = await Workshop.countDocuments(query);

    res.send({ result, totalWorkshop, currentPage: page, totalPages: Math.ceil(totalWorkshop / limit) });
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
  searchLocation,
  searchWorkshop,
  updateStatus,
  deleteWorkshop
};
