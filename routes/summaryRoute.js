const express = require('express');
const router = express.Router();

const { getSummary } = require('../controller/summaryController.js');


router.get('/admin/summary', getSummary);



module.exports = router;