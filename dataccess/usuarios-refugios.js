const { UsuariosRefugios } = require('../models/')

const getAll = async (filter) => {
    const datos = await UsuariosRefugios.findAll()
    return datos
};

const getOne = async(id) => { return await UsuariosRefugios.findByPk(id); }

const save = async(body) => {
    const data = {...body }
    const user = await UsuariosRefugios.create(data);
    return user;
}

const borrar = async(id) => {
    await UsuariosRefugios.destroy({
        where: {
            id
        }
    })
}

const update = async(id, body) => {
    const data = await getOne(id)
    data.nombre = body.nombre
    data.apellido = body.apellido
    data.refugio = body.refugio
    data.provincia = body.provincia
    data.localidad = body.localidad
    data.mail = body.mail
    data.telefono = body.telefono
    data.puntuacion = body.puntuacion
    await data.save()
    return data;
}

module.exports = { getAll, getOne, save, borrar, update };