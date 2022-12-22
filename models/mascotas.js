const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Mascotas extends Model {}

Mascotas.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    raza: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER(200),
        allowNull: false
    },
    tamanio: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    zona: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    especial: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    compatibilidad: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'Mascotas'
})

module.exports = Mascotas