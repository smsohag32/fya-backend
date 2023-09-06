const express = require('express');
const router = express.Router();

const { getSummary, getWorkshopSummary } = require('../controller/summaryController.js');


router.get('/admin/summary', getSummary);
router.get('/workshop/summary/:email', getWorkshopSummary);



module.exports = router;