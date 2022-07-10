let Adoptantes = [{
        id: 1,
        nombre: "Victoria",
        apellido: "Lopez",
        provincia: "Ciudad Autónoma de Buenos Aires",
        localidad: "-",
        mail: "victorialopez@gmail.com",
        telefono: 456821328,
        puntuacion: 8,
        publicacionesGuardadas: []
    },
    {
        id: 2,
        nombre: "Juan",
        apellido: "Dominguez",
        provincia: "Córdoba",
        localidad: "Villa Carlos Paz",
        mail: "juandominguez@gmail.com",
        telefono: 36464815,
        puntuacion: 9,
        publicacionesGuardadas: []
    },
    {
        id: 3,
        nombre: "Pablo",
        apellido: "Blanco",
        provincia: "Buenos Aires",
        localidad: "Tandil",
        mail: "pabloblanco@gmail.com",
        telefono: 36464815,
        puntuacion: 7,
        publicacionesGuardadas: []
    }
];


const getAll = (filter) => {
    let filtrado = Adoptantes;

    if (filter.provincia) {
        filtrado = filtrado.filter(e => e.provincia === filter.provincia)
    }
    return filtrado
}
const getOne = (id) => { return Adoptantes.find((registro) => registro.id == id); }

const save = (body) => { Adoptantes.push(body); }

const estado = (id) => {
    const index = Adoptantes.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Adoptantes.splice(index, 1);
        return true
    }
    return false
}

const modificar = (id, req) => {
    const index = Adoptantes.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Adoptantes[index] = req.body;
        return true
    }
    return false
}

const borrar = (id) => {
    const index = Adoptantes.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Adoptantes.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = { getAll, estado, modificar, save, getOne, borrar };