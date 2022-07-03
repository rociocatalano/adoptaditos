let Mascotas = [
  {
    gatos : [
      {
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
        compatibilidad: "gato, perro"
      }
    ],
    perros : [
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
        id: 3,
        nombre: "Goro",
        raza: "perro",
        edad: 3,
        tamaño: "mediano",
        zona: "retiro",
        especial: true,
        sexo: "M",
        compatibilidad: "perro"
      }
    ]
  } 
];




module.exports = { Mascotas };
