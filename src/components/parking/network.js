const express = require('express');
const router = express.Router();
const reserve = require('../reserve/network');
const controller = require('./controller');
const { authorizeRole } = require('../auth/middleware');

router.use('/reserve', reserve);

router.use( authorizeRole('employee'));
router.get('/', controller.getParkings);
router.post('/', controller.addParking);
router.delete('/:id', controller.deleteParking);

module.exports = router;