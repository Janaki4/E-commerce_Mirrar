const productDetails = require('../MODELS/productDetails')
const productVariantDetails = require('../MODELS/productVariantDetails')


productDetails.hasMany(productVariantDetails,)
productVariantDetails.belongsTo(productDetails)

