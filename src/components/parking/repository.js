let parkingList = []

const addParking = (parking) => {
    parkingList.push(parking);
}

const getParkings = () => {
    return parkingList;
}

const getParking = (id) => {
    for (let i = 0; i < parkingList.length; i++) 
        if (parkingList[i].id == id) 
            return parkingList[i];
}

const updateParking = (id, parking) => {
    for (let i = 0; i < parkingList.length; i++) 
        if (parkingList[i].id == id) 
            parkingList[i] = parking;
}

const deleteParking = (id) => {
    parkingList = parkingList.filter(
        parking => parking.id != id
    );
}

module.exports = {
    add: addParking,
    list: getParkings,
    get: getParking,
    update: updateParking,
    delete: deleteParking
}