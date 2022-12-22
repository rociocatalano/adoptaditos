const { v4: uuidv4 } = require("uuid"); 
let Mascotas = [{
        id: 1,
        nombre: "juan",
        raza: "gato",
        edad: 3,
        tamaño: "mediano",
        zona: "Devoto",
        especial: false,
        sexo: "M",
        compatibilidad: "gato"
    },
    {
        id: 2,
        nombre: "Enki",
        raza: "gato",
        edad: 1,
        tamaño: "pequeño",
        zona: "Paternal",
        especial: false,
        sexo: "F",
        compatibilidad: "gato" + "perro"
    },
    {
        id: 3,
        nombre: "Arya",
        raza: "perro",
        edad: 5,
        tamaño: "grande",
        zona: "Villa del Parque",
        especial: true,
        sexo: "F",
        compatibilidad: "perro"
    },
    {
        id: 4,
        nombre: "Goro",
        raza: "perro",
        edad: 3,
        tamaño: "mediano",
        zona: "retiro",
        especial: true,
        sexo: "M",
        compatibilidad: "perro"
    }
];

const getAll = (filter) => {
    let filtrado = Mascotas;

    if (filter.compatibilidad) {
        filtrado = filtrado.filter(e => e.compatibilidad === filter.compatibilidad);
    }
    if (filter.tamaño) {
        filtrado = filtrado.filter(e => e.tamaño === filter.tamaño);
    }
    if (filter.raza) {
        filtrado = filtrado.filter(e => e.raza === filter.raza);
    }
    if (filter.edad) {
        filtrado = filtrado.filter(e => e.edad === filter.edad);
    }
    if (filter.zona) {
        filtrado = filtrado.filter(e => e.zona === filter.zona);
    }
    if (filter.especial) {
        filtrado = filtrado.filter(e => e.especial === filter.especial);
    }
    if (filter.sexo) {
        filtrado = filtrado.filter(e => e.sexo === filter.sexo);
    }
    if (filter.nombre) {
        filtrado = filtrado.filter(e => e.nombre === filter.nombre);
    }
    return filtrado
}
const getOne = (id) => { return Mascotas.find((registro) => registro.id == id); }

const save = (body) => { 
    const data = {id: uuidv4(), ...body};
    Comments.push(data);
    return data;
}

const estado = (id) => {
    const index = Mascotas.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Mascotas.splice(index, 1);
        return true
    }
    return false
}


const modificar = (id, req) => {
    const index = Mascotas.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Mascotas[index] = req.body;
        return true;
    }
    return false;
}


const borrar = (id) => {
    const index = Mascotas.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Mascotas.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = { getAll, estado, modificar, save, getOne, borrar };