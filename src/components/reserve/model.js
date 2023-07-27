const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql/config');

const Reserve = sequelize.define('Reserve', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    parkingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'unique_reserve'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: 'unique_reserve'
    }
});

module.exports = Reserve;