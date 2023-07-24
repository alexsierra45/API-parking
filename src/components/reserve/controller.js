const repository = require('./repository');
const response = require('../../network/response');

function reserveParking(req, res) {
    const { userId, date, vehicle, parkingsId } = req.body;
    availableParkingId = parkingsId.filter(
        parkingId => repository.getByParking(parkingId)
        .filter(reserve => reserve.date === date).length == 0
    );
    if (availableParkingId.length > 0) {
        const parkingId = availableParkingId[0];

        const newReserve = {
            userId: userId,
            parkingId: parkingId,
            date: date,
            vehicle: vehicle
        }

        repository.add(newReserve);
        response.success(req, res, newReserve, 201);
    }
    else response.error(req, res, 'No parking available', 400, 'Controller error');
}

function getReserves(req, res) {
    response.success(req, res, repository.list(), 200);
}

module.exports = {
    reserveParking,
    getReserves
}