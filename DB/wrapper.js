require('./association')
const sequelize = require('../DB/config')

const addData = async (tableName, data) => {
    try {
        const result = await tableName.create({ ...data });
        if (!result.dataValues) return null;
        return result.dataValues;
    } catch (error) {
        throw new Error(error);
    }
};

const getAllDataByCondition = async (tableName, condition) => {
    try {
        const result = await tableName.findAndCountAll({
            where: { ...condition },
        });
        if (!result) return null;
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const getSingleDataByCondition = async (tableName, condition) => {
    try {
        const result = await tableName.findOne({
            where: { ...condition },
            returning: true,
        });
        if (!result) return null;
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const updateSingleData = async (tableName, newData, condition) => {
    try {
        const result = await tableName.update(
            { ...newData },
            {
                where: { ...condition },
                returning: true,
            },
        );
        if (!result) return null;
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const innerQueryGet = async (primaryTable, SecondaryTable, condition, pageSize = 10, pageNumber = 0) => {
    try {
        const result = await primaryTable.findAndCountAll({
            limit: +pageSize,
            offset: +pageSize * +pageNumber,
            where: { ...condition },
            include: [
                {
                    model: SecondaryTable,
                    where: { isDeleted: false },
                    required: false,
                },
            ],
        });
        if (!result) return null;
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const searchProductDetailRawQuery = async (searchTerm) => {
    try {
        const result = await sequelize.query(`
        SELECT DISTINCT * FROM PUBLIC."productDetails" AS pD
        LEFT OUTER JOIN PUBLIC."productVariantDetails" AS pVD
        ON pVD."productDetailProductId" = pD."productId"
        WHERE LOWER(pD."productName") LIKE '%${searchTerm}%' 
        OR LOWER(pD."description") LIKE '%${searchTerm}%' 
        OR LOWER(pVD."variantName") LIKE '%${searchTerm}%' 
        `);
        return result;
    } catch (error) {
        throw Error(error);
    }
}

module.exports = {
    addData,
    getAllDataByCondition,
    getSingleDataByCondition,
    updateSingleData,
    innerQueryGet,
    searchProductDetailRawQuery,
}