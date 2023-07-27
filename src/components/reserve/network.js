const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {getParkings} = require('../parking');

router.get('/', controller.getReserves);
router.post('/', getParkings, controller.reserveParking);
router.delete('/', controller.cancelReserve);

module.exports = router;