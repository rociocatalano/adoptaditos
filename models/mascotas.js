const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Mascotas extends Model {}

Mascotas.init({
    id_mascota: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    raza: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    peso: {
        type: DataTypes.INTEGER(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'Mascotas'
})

module.exports = Mascotas