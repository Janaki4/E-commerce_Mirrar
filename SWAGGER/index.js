const addProductDoc = require('./PRODUCT_MODULE/addProductDoc')
const getAllProductDetailsDoc = require('./PRODUCT_MODULE/getAllProductDetailsDoc')
const getSingleProductDetailsDoc = require('./PRODUCT_MODULE/getSingleProductDetailsDoc')
const updateProductDetailsDoc = require('./PRODUCT_MODULE/updateProductDetailsDoc')
const deleteProductDetails = require('./PRODUCT_MODULE/deleteProductDetails')
const searchProductDescVariantDoc = require('./PRODUCT_MODULE/searchProductDescVariantDoc')

const addProductVariantDoc = require('./PRODUCT_VARIANT_MODULE/addProductVariantDoc')
const getSingleProductVariantDetails = require('./PRODUCT_VARIANT_MODULE/getSingleProductVariantDetails')
const updateProductVariantDoc = require('./PRODUCT_VARIANT_MODULE/updateProductVariantDoc')
const deleteProductVariantDoc = require('./PRODUCT_VARIANT_MODULE/deleteProductVariantDoc')


module.exports = {
    paths: {
        '/product/add': { ...addProductDoc },
        '/product/products/all': { ...getAllProductDetailsDoc },
        '/product/{productid}/single': { ...getSingleProductDetailsDoc },
        '/product/{productid}/update': { ...updateProductDetailsDoc },
        '/product/{productid}/delete': { ...deleteProductDetails },
        '/product/variant/search/{searchterm}': { ...searchProductDescVariantDoc },

        '/product/variant/add': { ...addProductVariantDoc },
        '/product/variant/{variantid}/single': { ...getSingleProductVariantDetails },
        '/product/variant/{variantid}/update': { ...updateProductVariantDoc },
        '/product/variant/{variantid}/delete': { ...deleteProductVariantDoc },
    }
}