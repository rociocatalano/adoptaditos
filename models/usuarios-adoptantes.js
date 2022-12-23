const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class UsuariosAdoptantes extends Model {}

UsuariosAdoptantes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    provincia: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    localidad: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    sequelize,
    underscored: true,
    modelName: 'usuarios_adoptantes'
})

module.exports = UsuariosAdoptantes