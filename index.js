const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./config/dbConfig");
const port = process.env.PORT || 3000;
const workshopRoutes = require("./routes/workshopRoute.js");
const morgan = require("morgan");
<<<<<<< HEAD
const serviceRoutes = require('./routes/serviceRoute.js')
=======
const { default: mongoose } = require("mongoose");
>>>>>>> 56b13f6d8bb1361f3d95fd384acbc977ccffc904

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
<<<<<<< HEAD
app.use(express.urlencoded({ extended:false }))
app.get('/', (req, res) => {
    res.send('server is running')
});


app.use('/api/v1/auth', workshopRoutes);
app.use('/api/v1/auth', serviceRoutes);


=======

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/v1/auth", workshopRoutes);
>>>>>>> 56b13f6d8bb1361f3d95fd384acbc977ccffc904

app.listen(port, async () => {
  console.log("server is running");
});
