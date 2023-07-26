const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql/config');

const Parking = sequelize.define('Parking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    price: DataTypes.INTEGER,
    totalSpaces: DataTypes.INTEGER,
});

module.exports = Parking;