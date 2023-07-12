const express = require('express');
const cors = require('cors');
const productRouter = require('../API/PRODUCT_MODULE/ROUTES/productRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('../SWAGGER/CONFIG/index')

function creatServer() {
    const app = express();
    app.options('*', cors());
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
    app.use(express.json());
    app.use(productRouter)
    return app
}

module.exports = creatServer