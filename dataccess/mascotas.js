const { Mascotas } = require('../models/')

const getAll = async(filter) => {
    const datos = await Mascotas.findAll(filter, { attributes: { exclude: ['createdAt', 'updatedAt'] } })
    return datos
};

const getOne = async(id) => {
    return await Mascotas.findByPk(id, {
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
}

const save = (body) => {
    const data = {...body };
    const mascotas = Mascotas.create(data);
    return mascotas;
}

const modificar = async(id, body) => {
    const data = await getOne(id);
    data.nombre = body.nombre;
    data.raza = body.raza;
    data.edad = body.edad;
    data.tamanio = body.tamanio;
    data.zona = body.zona;
    data.especial = body.especial;
    data.sexo = body.sexo;
    data.compatibilidad = body.compatibilidad;
    await data.save()
    return data
}

const borrar = (id) => {
    Mascotas.destroy({
        where: {
            id
        }
    })
}

module.exports = { getAll, getOne, save, borrar, modificar };