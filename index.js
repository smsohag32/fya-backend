const express = require("express");
const cors = require('cors');
const app = express();
const { connectDB } = require('./config/dbConfig');
const port = process.env.PORT || 3000;
const workshopRoutes = require('./routes/workshopRoute.js')
const morgan = require("morgan");

// setting middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('server is running')
});


app.use('/api/v1/auth', workshopRoutes);



app.listen(port, async () => {
   console.log('server is running');
    await connectDB();
});


