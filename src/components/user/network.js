const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.post('/', controller.newUser);
router.put('/', controller.upadteUser);

module.exports = router;