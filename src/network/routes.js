const express = require('express');
const parking = require('../components/parking/network');
const user = require('../components/user/network');
const auth = require('../components/auth/network');
const { authenticateToken,  authorizeRole } = require('../components/auth/middleware');

const routes = function (server) {
    server.use('/login', auth);
    
    server.use(authenticateToken);
    server.use('/parking', parking);
    server.use('/user',  authorizeRole('admin'), user);
}

module.exports = routes;