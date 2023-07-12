const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../DB/config');

const productVariantDetails = sequelize.define('productVariantDetails', {
    variantId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    variantName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    additionalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    SKU: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    specification: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stocksAvailable: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10
    },
    productColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = productVariantDetails;