const { Sequelize } = require('sequelize');
require('dotenv').config();

const development = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}

const sequelize = new Sequelize(
    development.database,
    development.username,
    development.password,
    {
        dialect: development.dialect,
        host: development.host,
        port: development.port,
    }
);

module.exports = sequelize;