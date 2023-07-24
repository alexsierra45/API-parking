const repository = require('./repository');

function getParkings(req, res, next) {
    const parkings = repository.list();
    req.body.parkingsId = parkings.map(parking => parking.id);
    next();
}

module.exports = getParkings;