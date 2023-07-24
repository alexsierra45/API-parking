let reserveList = [];

const getReserveList = () => {
    return reserveList;
}

const addReserve = (reserve) => {
    reserveList.push(reserve);
}

const getReserve = (id) => {
    for (let i = 0; i < reserveList.length; i++) 
        if (reserveList[i].id == id) 
            return reserveList[i];
}

const updateReserve = (id, reserve) => {
    for (let i = 0; i < reserveList.length; i++) 
        if (reserveList[i].id == id) 
            reserveList[i] = reserve;
}

const deleteReserve = (id) => {
    reserveList = reserveList.filter(
        reserve => reserve.id !== id
    );
}

const getReserveByUser = (userId) => {
    return reserveList.filter(
        reserve => reserve.userId == userId
    );
}

const getReserveByParking = (parkingId) => {
    return reserveList.filter(
        reserve => reserve.parkingId == parkingId
    );
}

module.exports = {
    add: addReserve,
    list: getReserveList,
    get: getReserve,
    update: updateReserve,
    delete: deleteReserve,
    getByUser: getReserveByUser,
    getByParking: getReserveByParking
}