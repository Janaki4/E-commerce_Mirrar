require('dotenv/config')
const sequelize = require('./DB/config')
const creatServer = require('./HELPERS/server')
const app = creatServer()


sequelize.sync()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));


app.listen(process.env.SERVER_PORT || 8000, () => {
    console.log(`App running on port ${process.env.SERVER_PORT}`);
});
