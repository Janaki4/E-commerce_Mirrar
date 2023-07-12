const { UNSUCCESSFULL, INVALID_QUERY_TYPE, NO_DATA_FOUND } = require('../../../CONSTANT/message')
const { addData, getAllDataByCondition, getSingleDataByCondition, updateSingleData, innerQueryGet, searchProductDetailRawQuery } = require('../../../DB/wrapper')
const productDetails = require('../../../MODELS/productDetails')
const productVariantDetails = require('../../../MODELS/productVariantDetails')
const {
    addProductDetailsSchema,
    updateProductDetailsSchema,
    addProductVariantDetailsSchema,
    updateProductVariantDetailsSchema,
} = require('../../../HELPERS/validation')

const addProductDetailsService = async (productPayload) => {
    await addProductDetailsSchema.validateAsync({ ...productPayload })
    const productAdded = await addData(productDetails, productPayload)
    if (productAdded) {
        return { statusCode: 201, payload: productAdded }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}

const getAllProductDetailsService = async (pageSize, pageNumber) => {
    const allProductsDetails = await innerQueryGet(productDetails, productVariantDetails, { isDeleted: false }, pageSize, pageNumber)
    if (allProductsDetails) {
        return { statusCode: 200, payload: allProductsDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}

const getSingleProductDetailsService = async (productId) => {
    if (!productId) {
        return { statusCode: 400, payload: UNSUCCESSFULL }
    }
    const singleProductDetails = await innerQueryGet(productDetails, productVariantDetails, { productId, isDeleted: false })
    if (singleProductDetails) {
        return { statusCode: 200, payload: singleProductDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}

const updateSingleProductDetailsService = async (productId, productPayload) => {
    if (!productId) {
        return { statusCode: 400, payload: UNSUCCESSFULL }
    }
    await updateProductDetailsSchema.validateAsync({ ...productPayload })
    const updatedProductDetails = await updateSingleData(productDetails, productPayload, { productId, isDeleted: false })
    if (updatedProductDetails) {
        return { statusCode: 200, payload: updatedProductDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}


const deleteSingleProductDetailsService = async (productId) => {
    const deletedProductDetails = await updateSingleData(productDetails, { isDeleted: true }, { productId, isDeleted: false })
    if (deletedProductDetails) {
        return { statusCode: 200, payload: deletedProductDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}


const addProductVariantDetailsService = async (productVariantPayload) => {
    await addProductVariantDetailsSchema.validateAsync({ ...productVariantPayload })
    const productVariantDetailsAdded = await addData(productVariantDetails, productVariantPayload)
    if (productVariantDetailsAdded) {
        return { statusCode: 201, payload: productVariantDetailsAdded }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}


const getSingleProductVariantDetailsService = async (variantId) => {
    if (!variantId) {
        return { statusCode: 400, payload: UNSUCCESSFULL }
    }
    const singleProductVariantDetails = await innerQueryGet(productVariantDetails, productDetails, { variantId, isDeleted: false })
    if (singleProductVariantDetails) {
        return { statusCode: 200, payload: singleProductVariantDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}

const updateSingleProductVariantDetailsService = async (variantId, variantDetailsPayload) => {
    if (!variantId) {
        return { statusCode: 400, payload: UNSUCCESSFULL }
    }
    await updateProductVariantDetailsSchema.validateAsync({ ...variantDetailsPayload })
    const updatedProductVariantDetails = await updateSingleData(productVariantDetails, variantDetailsPayload, { variantId, isDeleted: false })
    if (updatedProductVariantDetails) {
        return { statusCode: 200, payload: updatedProductVariantDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}


const deleteSingleProductVariantDetailsService = async (variantId) => {
    if (!variantId) {
        return { statusCode: 400, payload: UNSUCCESSFULL }
    }
    const deletedProductVariantDetails = await updateSingleData(productVariantDetails, { isDeleted: true }, { variantId, isDeleted: false })
    if (deletedProductVariantDetails) {
        return { statusCode: 200, payload: deletedProductVariantDetails }
    }
    return { statusCode: 400, payload: UNSUCCESSFULL }
}

const searchProductsDetailsService = async (searchTerm) => {
    // let condition
    searchTerm = searchTerm.toLowerCase()
    // switch (+queryType) {
    //     case 0:
    //         condition = `LOWER(pD."productName") LIKE '%${searchTerm}%' `
    //         break;
    //     case 1:
    //         condition = `LOWER(pD."description") LIKE '%${searchTerm}%' `
    //         break
    //     case 2:
    //         condition = `LOWER(pVD."variantName") LIKE '%${searchTerm}%' `
    //         break
    //     default:
    //         return { statusCode: 400, payload: INVALID_QUERY_TYPE }
    // }
    console.log(searchTerm)
    const searchResult = await searchProductDetailRawQuery(searchTerm)
    console.log(searchResult)
    if (searchResult[0].length) {
        return { statusCode: 200, payload: searchResult[0] }
    }
    return { statusCode: 400, payload: NO_DATA_FOUND }
}


module.exports = {
    addProductDetailsService,
    getAllProductDetailsService,
    getSingleProductDetailsService,
    updateSingleProductDetailsService,
    deleteSingleProductDetailsService,
    addProductVariantDetailsService,
    getSingleProductVariantDetailsService,
    updateSingleProductVariantDetailsService,
    deleteSingleProductVariantDetailsService,
    searchProductsDetailsService,
}