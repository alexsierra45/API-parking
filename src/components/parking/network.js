const express = require('express');
const router = express.Router();
const reserve = require('../reserve/network');
const controller = require('./controller');

router.use('/reserve', reserve);

router.get('/', controller.getParkings);
router.post('/', controller.addParking);
router.delete('/:id', controller.deleteParking);
module.exports = router;