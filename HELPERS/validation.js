const Joi = require('joi');

const addProductDetailsSchema = Joi.object({
    productName: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    description: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    brandName: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    basePrice: Joi.number()
        .required(),
});

const updateProductDetailsSchema = Joi.object({
    productName: Joi.string()
        .invalid(...['null', 'undefined']),
    description: Joi.string()
        .invalid(...['null', 'undefined']),
    basePrice: Joi.number()
        .required(),
});

const addProductVariantDetailsSchema = Joi.object({
    variantName: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    specification: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    SKU: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    productDetailProductId: Joi.string()
        .invalid(...['null', 'undefined'])
        .required(),
    additionalCost: Joi.number()
        .required(),
    stocksAvailable: Joi.number()
        .required(),
    productColor: Joi.string()
        .required(),
});

const updateProductVariantDetailsSchema = Joi.object({
    variantName: Joi.string()
        .invalid(...['null', 'undefined']),
    specification: Joi.string()
        .invalid(...['null', 'undefined']),
    additionalCost: Joi.number(),
    stocksAvailable: Joi.number(),
    productColor: Joi.string(),
});

module.exports = {
    addProductDetailsSchema,
    updateProductDetailsSchema,
    addProductVariantDetailsSchema,
    updateProductVariantDetailsSchema,
}