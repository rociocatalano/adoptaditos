const { UsuariosAdoptantes } = require('../models/')

const getAll = async (filter) => {
    const datos = await UsuariosAdoptantes.findAll()
    return datos
};

const getOne = async(id) => { return await UsuariosAdoptantes.findByPk(id); }

const save = async(body) => {
    const data = {...body }
    const user = await UsuariosAdoptantes.create(data);
    return user;
}

const borrar = async(id) => {
    await UsuariosAdoptantes.destroy({
        where: {
            id
        }
    })
}

const update = async(id, body) => {
    const data = await getOne(id)
    data.nombre = body.nombre
    data.apellido = body.apellido
    data.provincia = body.provincia
    data.localidad = body.localidad
    data.mail = body.mail
    data.telefono = body.telefono
    data.puntuacion = body.puntuacion
    data.publicacionesGuardadas = body.publicacionesGuardadas
    await data.save()
    return data;
}

module.exports = { getAll, getOne, save, borrar, update };