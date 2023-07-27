const Reserve = require('./model');

async function getReserveList() {
    return await Reserve.findAll();
}

async function addReserve(reserve) {
    await Reserve.create(reserve);
}

async function findReserve(parkingId, date) {
    const reserve = await Reserve.findAll({
        where: {
            parkingId: parkingId,
            date: date
        }
    });
    return reserve.length > 0;
}

async function updateReserve(reserve) {
    await Reserve.update(reserve, {
        where: {
            parkingId: reserve.parkingId,
            date: reserve.date
        }
    });
}

async function deleteReserve(reserve) {
    await Reserve.delete(reserve, {
        where: {
            parkingId: reserve.parkingId,
            date: reserve.date
        }
    });
}

async function getByParking(parkingId) {
    return await Reserve.findAll({
        where: {
            parkingId: parkingId
        }
    });
}

module.exports = {
    add: addReserve,
    list: getReserveList,
    find: findReserve,
    update: updateReserve,
    delete: deleteReserve,
    getByParking
}