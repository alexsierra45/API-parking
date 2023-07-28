const Parking = require('./model');
const { list } = require('./repository');
const parking = require('./network');

module.exports = {
    Parking,
    list,
    parking
}