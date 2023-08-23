const express = require("express");
const router = express.Router();
const {postUser} = require('../controller/userController.js')



router.get("/users", postUser);



module.exports = router;