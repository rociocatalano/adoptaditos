const Mascotas = require("./mascotas")
const UsuariosAdoptantes = require("./usuarios-adoptantes")
const UsuariosRefugios = require("./usuarios-refugios")

//pensar esta parte
Mascotas.belongsTo(UsuariosRefugios)
UsuariosRefugios.hasMany(Mascotas)

Mascotas.belongsTo(UsuariosAdoptantes)
UsuariosAdoptantes.hasMany(Mascotas)

module.exports = {
    Mascotas,
    UsuariosAdoptantes,
    UsuariosRefugios
}