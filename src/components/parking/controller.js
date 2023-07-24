const repository = require('./repository');
const response = require('../../network/response');

function getParkings(req, res) {
    response.success(req, res, repository.list(), 200);
}

function addParking(req, resp) {
    const parking = req.body;
    if (repository.list().map(p => p.id).includes(parking.id))
        response.error('Existent id');
    else {
        repository.add(parking);
        response.success(req, resp, parking, 201);
    } 
}

function getParking(req, res) {
    const id = req.params.id;
    const parking = repository.get(id);
    response.success(req, res, parking, 200);
}

function addVehicle(req, resp) {
    const parkingId = req.params.id;
    const vehicle = req.body;
    if (!vehicle) 
            response.error('Invalid data');
    else {
        let newParking = {
            id: parkingId,
            vehicles: [vehicle]
        }
        for (let i = 0; i < repository.list().length; i++) {
            const parking = repository.list()[i];
            if (parking.id == parkingId) {
                newParking.vehicles = parking.vehicles.concat(vehicle);
                repository.update(parking.id, newParking);
            }
        }
        response.success(req, resp, newParking, 201);
    }
}

function deleteParking(req, res) {
    const id = req.params.id;
    repository.delete(id);
    response.success(req, res, `Parking ${id} deleted`, 200);
}

module.exports = {
    getParkings,
    addParking,
    getParking,
    addVehicle,
    deleteParking
}