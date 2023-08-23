const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./config/dbConfig");
const port = process.env.PORT || 5000;
const workshopRoutes = require("./routes/workshopRoute.js");
const serviceRoute = require("./routes/serviceRoute.js");
const morgan = require("morgan");
const mongoose = require("mongoose");

// setting middlewares
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/v1/auth", workshopRoutes);
app.use("/api/v1/auth", serviceRoute);

app.listen(port, async () => {
  console.log("server is running");
});
