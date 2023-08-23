const userInfo = require('../models/usersInfo.js')
const userPost = async (req, res) => {
  try {
    const newUserInfo = req.body;
    const newUser = await userInfo.create(newUserInfo);
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = userPost;
