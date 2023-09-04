const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./config/dbConfig");
const port = process.env.PORT || 5000;
const workshopRoutes = require("./routes/workshopRoute.js");
const serviceRoute = require("./routes/serviceRoute.js");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productsRoute.js");
const workOrderRoute = require("./routes/workOrderRoute.js");
const userOrderRoute = require("./routes/userOrderRoute.js");
const carsRoute = require("./routes/carRoute.js");
const summaryRoute = require('./routes/summaryRoute.js')
const blogsRoute = require('./routes/blogsRoute.js')
const cartsRoute = require('./routes/cartsRoute.js')
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
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/auth", productRoute);
app.use("/api/v1/auth", workOrderRoute);
app.use("/api/v1/auth", userOrderRoute);
app.use("/api/v1/auth", carsRoute);
app.use("/api/v1/auth", summaryRoute);
app.use("/api/v1/auth", blogsRoute);
app.use("/api/v1/auth", cartsRoute);

app.listen(port, async () => {
  console.log("server is running");
});
