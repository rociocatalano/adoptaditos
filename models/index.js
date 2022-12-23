const Mascotas = require("./mascotas")
const UsuariosAdoptantes = require("./usuarios-adoptantes")
const UsuariosRefugios = require("./usuarios-refugios")

//pensar esta parte
Mascotas.belongsTo(UsuariosRefugios, { through: 'usuarios_refugio_id' })
UsuariosRefugios.hasMany(Mascotas)

Mascotas.belongsTo(UsuariosAdoptantes, { through: 'usuarios_adoptante_id' })
UsuariosAdoptantes.hasMany(Mascotas)

module.exports = {
    Mascotas,
    UsuariosAdoptantes,
    UsuariosRefugios
}