const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {  authorizeRole } = require('../auth/middleware')

router.get('/',  authorizeRole('employee'), controller.getReserves);
router.use( authorizeRole('client'));
router.post('/', controller.reserveParking);
router.delete('/', controller.cancelReserve);

module.exports = router;