const { addProductDetailsService,
    getAllProductDetailsService,
    getSingleProductDetailsService,
    updateSingleProductDetailsService,
    deleteSingleProductDetailsService,
    addProductVariantDetailsService,
    getSingleProductVariantDetailsService,
    updateSingleProductVariantDetailsService,
    deleteSingleProductVariantDetailsService,
    searchProductsDetailsService, } = require("../SERVICE");

const addProductDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await addProductDetailsService(req.body)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const getAllProductDetailsController = async (req, res) => {
    try {
        const { pageSize, pageNumber } = req.query
        const { statusCode, payload } = await getAllProductDetailsService(pageSize, pageNumber)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const getSingleProductDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await getSingleProductDetailsService(req.params.productid)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const updateSingleProductDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await updateSingleProductDetailsService(req.params.productid, req.body)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const deleteSingleProductDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await deleteSingleProductDetailsService(req.params.productid)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const addProductVariantDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await addProductVariantDetailsService(req.body)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const getSingleProductVariantDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await getSingleProductVariantDetailsService(req.params.variantid)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const updateSingleProductVariantDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await updateSingleProductVariantDetailsService(req.params.variantid, req.body)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const deleteSingleProductVariantDetailsController = async (req, res) => {
    try {
        const { statusCode, payload } = await deleteSingleProductVariantDetailsService(req.params.variantid)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

const searchProductsDetailsController = async (req, res) => {
    try {
        const { searchterm } = req.params
        const { statusCode, payload } = await searchProductsDetailsService(searchterm)
        res.status(statusCode).send({ payload })
    } catch (error) {
        res.status(400).send({ error: error.name, payload: error.message })
    }
}

module.exports = {
    addProductDetailsController,
    getAllProductDetailsController,
    getSingleProductDetailsController,
    updateSingleProductDetailsController,
    deleteSingleProductDetailsController,
    addProductVariantDetailsController,
    getSingleProductVariantDetailsController,
    updateSingleProductVariantDetailsController,
    deleteSingleProductVariantDetailsController,
    searchProductsDetailsController,
}