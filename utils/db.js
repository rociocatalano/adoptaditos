require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    "adoptaditos", //nombre de la base de datos
    "root", //usuario de la base de datos
    "****", //contraseña de la base de datos
    {
        host: "localhost",
        port: "3306",
        dialect: 'mysql'
    }
)

const connectDb = async() => {
    try {
        await sequelize.authenticate()
        console.log('conectado a la base de datos')
    } catch (error) {
        console.log('ERROR:', error)
        return process.exit()
    }
}

module.exports = { connectDb, sequelize }