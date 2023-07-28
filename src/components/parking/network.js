const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { authorizeRole } = require('../auth/middleware');

router.use( authorizeRole('employee'));
router.get('/', controller.getParkings);
router.post('/', controller.addParking);
router.get('/:id', controller.getParking);
router.delete('/:id', controller.deleteParking);

module.exports = router;