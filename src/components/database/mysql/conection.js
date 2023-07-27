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

        asociateModels();
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

function asociateModels() {
    User.hasMany(Reserve, { foreignKey: 'userId' });
    Reserve.belongsTo(User, { foreignKey: 'userId' });

    Parking.hasMany(Reserve, { foreignKey: 'parkingId' });
    Reserve.belongsTo(Parking, { foreignKey: 'parkingId' });
}

syncDatabase();

module.exports = sequelize;