require('dotenv/config')
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_USERNAME,
});

module.exports = sequelize;
