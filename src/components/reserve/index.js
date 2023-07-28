const Reserve = require('./model');
const { getByParking } = require('./repository');
const reserve = require('./network');

module.exports = {
    Reserve,
    reserve,
    getByParking
}