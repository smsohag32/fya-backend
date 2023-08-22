const express = require("express");
const cors = require('cors');
const app = express();
const { connectDB } = require('./config/dbConfig');
const port = process.env.PORT || 3000;
const route = require('./routes/route');

// app.use("/api/users", route);

// setting middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).render('index');
});


app.listen(port, async () => {
   console.log('server is running');
    await connectDB();
});


