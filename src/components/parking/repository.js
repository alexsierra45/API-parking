const Parking = require('./model')

async function addParking(parking) {
    return await Parking.create(parking);
}

async function getParkings() {
    return await Parking.findAll();
}

async function getParking(id) {
    return await Parking.findOne({
        where: {
            id: id
        }
    });
}

async function updateParking(parking) {
    return await Parking.update(parking, {
        where: {
            id: parking.id
        }
    });
}

async function deleteParking(id) {
    return await Parking.destroy({
        where: {
            id: id
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