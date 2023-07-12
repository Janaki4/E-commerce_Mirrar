const swaggerModules = require('../index')
const basicInfo = require('./basicInfo')

module.exports = {
    ...basicInfo,
    ...swaggerModules
}