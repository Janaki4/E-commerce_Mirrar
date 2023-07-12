const express = require('express')
const router = express.Router();
const {
    addProductDetailsController,
    getAllProductDetailsController,
    getSingleProductDetailsController,
    updateSingleProductDetailsController,
    deleteSingleProductDetailsController,
    addProductVariantDetailsController,
    getSingleProductVariantDetailsController,
    updateSingleProductVariantDetailsController,
    deleteSingleProductVariantDetailsController,
    searchProductsDetailsController, } = require("../CONTROLLER");


// ******************* Product ********************
router.route('/product/add').post(addProductDetailsController)
router.route('/product/products/all').get(getAllProductDetailsController)
router.route('/product/:productid/single').get(getSingleProductDetailsController)
router.route('/product/:productid/update').patch(updateSingleProductDetailsController)
router.route('/product/:productid/delete').delete(deleteSingleProductDetailsController)

// ******************* Product variant ********************
router.route('/product/variant/add').post(addProductVariantDetailsController)
router.route('/product/variant/:variantid/single').get(getSingleProductVariantDetailsController)
router.route('/product/variant/:variantid/update').patch(updateSingleProductVariantDetailsController)
router.route('/product/variant/:variantid/delete').delete(deleteSingleProductVariantDetailsController)

// ************** Search Product **************
router.route('/product/variant/search/:searchterm').get(searchProductsDetailsController)


module.exports = router