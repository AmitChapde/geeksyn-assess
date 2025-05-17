const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller')

router.get('/data', mainController.getAllData);

module.exports = router;
