const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql/config');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: 'compositeIndex',
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'compositeIndex',
    },
    role: {
        type: DataTypes.STRING(20),
        defaultValue: 'client',
    },
    email: DataTypes.STRING(50),
    phone: DataTypes.STRING(20)
});

module.exports = User;