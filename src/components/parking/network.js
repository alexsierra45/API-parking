const express = require('express');
const router = express.Router();
const reserve = require('../reserve/network');
const controller = require('./controller');

router.use('/reserve', reserve);

router.get('/', controller.getParkings);
router.post('/', controller.addParking);
router.get('/:id', controller.getParking);
router.post('/:id', controller.addVehicle);
router.delete('/:id', controller.deleteParking);

module.exports = router;