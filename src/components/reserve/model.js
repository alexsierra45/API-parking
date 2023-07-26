const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql/config');
const User = require('../parking');

const Reserve = sequelize.define('Reserve', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    parkingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'Parking',
        //     key: 'id'
        // }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'User',
        //     key: 'id'
        // }
    },
    date: DataTypes.DATE,
    durationMin: DataTypes.INTEGER
});

module.exports = Reserve;