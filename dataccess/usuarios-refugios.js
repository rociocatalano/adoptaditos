let Refugios = [{
        id: 1,
        nombre: "Ana",
        apellido: "Lopez",
        refugio: "El Campito",
        provincia: "Buenos Aires",
        localidad: "-",
        mail: "analopez@gmail.com",
        telefono: 46545631,
        puntuacion: 8
    },
    {
        id: 1,
        nombre: "Mario",
        apellido: "Perez",
        refugio: "Patitas",
        provincia: "Buenos Aires",
        localidad: "-",
        mail: "marioperez@gmail.com",
        telefono: 3546522,
        puntuacion: 9
    }
];


const getAll = (filter) => {
    let filtrado = Refugios;

    if (filter.compatibilidad) {
        filtrado = filtrado.filter(e => e.compatibilidad === filter.compatibilidad)
    }
    return filtrado
}
const getOne = (id) => { return Refugios.find((registro) => registro.id == id); }

const save = (body) => { Refugios.push(body); }

const estado = (id) => {
    const index = Refugios.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Refugios.splice(index, 1);
        return true
    }
    return false
}

const modificar = (id) => {
    const index = Refugios.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Refugios[index] = req.body;
        return true
    }
    return false
}

const borrar = (id) => {
    const index = Refugios.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Refugios.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = { getAll, estado, modificar, save, getOne, borrar };