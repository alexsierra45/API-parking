const repository = require('./repository');
const response = require('../../network/response');
const { list } = require('../parking/repository');
const parkingList = list();

async function reserveParking(req, res) {
    const userId = req.user.id;
    let date = req.body.date;
    date = new Date(date);
    console.log(date);
    if(!date)
        response.error(req, res, 'Missing data', 400, 'Controller error');
    else {
        let availableParkings = [];
        for (let parking of (await parkingList)) 
            if (await checkAvailability(parking, date))
                availableParkings.push(parking);
        const availableParkingsId = availableParkings.map(parking => parking.id);

        if (availableParkingsId.length > 0) {
            const parkingId = availableParkingsId[0];

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

async function checkAvailability(parking, date) {
    const { id, capacity } = parking;
    const reserveByParkingId = (await repository.getByParking(id)).filter(
        reserve => reserve.date.getFullYear() === date.getFullYear()
        && reserve.date.getMonth() === date.getMonth()
        && reserve.date.getDate() === date.getDate()
    );
    return reserveByParkingId.length < capacity;
}

async function getReserves(req, res) {
    const reserves = (await repository.list()).map(
        reserve => {
            return {
                userId: reserve.userId,
                parkingId: reserve.parkingId,
                date: reserve.date
            }
        }
    );
    response.success(req, res, reserves, 200);
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