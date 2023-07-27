const repository = require('./repository');
const response = require('../../network/response');

async function reserveParking(req, res) {
    const { userId, parkingsId, date} = req.body;
    if(!userId || !parkingsId || !date)
        response.error(req, res, 'Missing data', 400, 'Controller error');
    else {
        availableParkingId = parkingsId.filter(
            async parkingId => await repository.getByParking(parkingId)
            .filter(reserve => reserve.date.getFullYear() === date.getFullYear()
            && reserve.date.getMonth() === date.getMonth()
            && reserve.date.getDate() === date.getDate()).length == 0
        );
        if (availableParkingId.length > 0) {
            const parkingId = availableParkingId[0];

            const newReserve = {
                userId: userId,
                parkingId: parkingId,
                date: date,
            }

            await repository.add(newReserve);
            response.success(req, res, newReserve, 201);
        }
        else response.error(req, res, 'No parking available', 400, 'Controller error');
    }
}

async function getReserves(req, res) {
    response.success(req, res, await repository.list(), 200);
}

async function cancelReserve(req, res) {
    const { parkingId, date } = req.body;
    const reserve = await repository.getByUser(userId).filter(
        reserve => reserve.parkingId === parkingId && reserve.date === date
    );
    if (reserve.length > 0) {
        await repository.delete(reserve[0]);
        response.success(req, res, reserve[0], 200);
    }
    else response.error(req, res, 'Reserve not found', 400, 'Controller error');
}

module.exports = {
    reserveParking,
    getReserves,
    cancelReserve
}