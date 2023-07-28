const express = require('express');
const { parking } = require('../components/parking');
const { user } = require('../components/user');
const { auth } = require('../components/auth');
const { reserve } = require('../components/reserve');
const { authenticateToken,  authorizeRole } = require('../components/auth/middleware');

const routes = function (server) {
    server.use('/login', auth);
    
    server.use(authenticateToken);
    server.use('/parking', parking);
    server.use('/reserve', reserve);
    server.use('/user',  authorizeRole('admin'), user);
}

module.exports = routes;