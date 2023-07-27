const { Sequelize } = require('sequelize');
const sequelize = require('./config');

const User = require('../../user/model');
const Parking = require('../../parking/model');
const Reserve = require('../../reserve/model');

async function syncDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Successful connection to the database.');

        await sequelize.sync();
        console.log('Models synchronized with the database.');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

function asociateModels() {
    User.hasMany(Reserve);
    Reserve.belongsTo(User);

    Parking.hasMany(Reserve);
    Reserve.belongsTo(Parking);
}

syncDatabase();
asociateModels();

module.exports = sequelize;