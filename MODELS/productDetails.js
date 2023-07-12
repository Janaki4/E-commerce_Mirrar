const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../DB/config');

const productDetails = sequelize.define('productDetails', {
    productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    basePrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brandName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = productDetails;