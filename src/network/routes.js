const express = require('express');
const parking = require('../components/parking/network');
const user = require('../components/user/network');
const auth = require('../components/auth/network');

const routes = function (server) {
    server.use('/login', auth);
    server.use('/parking', parking);
    server.use('/user', user);
}

module.exports = routes;