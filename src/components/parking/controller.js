const repository = require('./repository');
const response = require('../../network/response');
const { getByParking } = require('../reserve');

async function getParkings(req, res) {
    response.success(req, res, await repository.list(), 200);
}

async function addParking(req, resp) {
    const { name, address, phone, price, capacity } = req.body;
    if (!name || !address || !phone || !price || !capacity)
        response.error('Invalid data');
    else {
        const newParking = {
            name: name,
            address: address,
            phone: phone,
            price: price,
            capacity: capacity
        }
        const parking = await repository.add(newParking);
        response.success(req, resp, parking, 201);
    }
}

async function getParking(req, res) {
    const id = req.params.id;
    const parking = await repository.get(id);
    const reserves = await getByParking(id);
    reserves.map(reserve => {
        return {
            userId: reserve.userId,
            date: reserve.date
        }
    })
    let resParking = {
        name: parking.name,
        address: parking.address,
        phone: parking.phone,
        price: parking.price,
        capacity: parking.capacity,
        reserves: reserves
    }
    response.success(req, res, resParking, 200);
}

async function deleteParking(req, res) {
    const { adress } = req.body;
    if (!adress)
        response.error('Invalid data');
    else {
        const parking = await repository.delete(adress);
        response.success(req, res, parking, 200);
    }
}

module.exports = {
    getParkings,
    addParking,
    getParking,
    deleteParking
}