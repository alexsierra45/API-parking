const express = require('express');
const router = express.Router();
const controller = require('./controller');
const getParkings = require('../parking/middleware');

router.get('/', controller.getReserves);
router.post('/', getParkings, controller.reserveParking);

module.exports = router;