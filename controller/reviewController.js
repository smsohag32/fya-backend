const reviews = require("../models/reviewsInfo.js");

const getAllReviews = async (req, res) => {
  try {
    const result = await reviews.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getReview = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await reviews.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getWorkshopReview = async (req, res) => {
  const email = req.params.email;
  const query = { workshop_email: email };
  try {
    const result = await reviews.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const reviewPost = async (req, res) => {
  try {
    const newReview = req.body;
    const result = await reviews.create(newReview);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllReviews, getReview, getWorkshopReview, reviewPost };
