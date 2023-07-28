const Parking = require('./model')

async function addParking(parking) {
    return await Parking.create(parking);
}

async function getParkings() {
    return await Parking.findAll();
}

async function getParking(address) {
    return await Parking.findOne({
        where: {
            address: address
        }
    });
}

async function updateParking(address, parking) {
    return await Parking.update(parking, {
        where: {
            address: address
        }
    });
}

async function deleteParking(address) {
    return await Parking.destroy({
        where: {
            address: address
        }
    });
}

module.exports = {
    add: addParking,
    list: getParkings,
    get: getParking,
    update: updateParking,
    delete: deleteParking
}