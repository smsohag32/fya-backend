const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected");
    console.log(error.message);
  }
};
