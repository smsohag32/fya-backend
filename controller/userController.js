const userInfo = require("../models/usersInfo.js");
const jwt = require("jsonwebtoken");

const userPost = async (req, res) => {
  try {
    const user = req.body;
    const email = req.params.email;
    const query = { email: email };
    const option = { upsert: true };
    const updatedDoc = {
      $set: user,
    };
    const result = await userInfo.updateOne(query, updatedDoc, option);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateUserRole = async (req, res) => {
  try {
    const role = req.body;
    const userEmail = req.params.email;
    const query = { email: userEmail };
    const option = { upsert: true };
    const updatedDoc = {
      $set: {
        role: role.role,
      },
    };
    const result = await userInfo.updateOne(query, updatedDoc, option);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const jwtTokenPost = async (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
      expiresIn: "1h",
    });

    res.send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserRole = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      return res.send({ role: false });
    }
    const query = { email: email };
    const user = await userInfo.findOne(query);

    const result = { role: user?.role === "workshopCenter" };
    res.send({ result, user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userInfo.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const result = await userInfo.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  userPost,
  jwtTokenPost,
  deleteUser,
  getUserRole,
  getAllUsers,
  updateUserRole,
};
