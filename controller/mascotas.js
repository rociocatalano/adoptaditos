const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let { Mascotas } = require("../dataccess/mascotas");

/* Obtener todas las mascotas */
router.get("/", (req, res) => {
  res.status(200).json(Mascotas);
});

/* Obtener una mascota especifica */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = Mascotas.find((mascota) => mascota.id == id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.sendStatus(404);
  }
});

/* Agregar una mascota */
router.post("/", (req, res) => {
  const body = { ...req.body, id: uuidv4() };
  Mascotas.push(body);
  res.status(201).json(body);
});

/* Borrar una mascota */

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = Mascotas.findIndex((mascotas) =>mascotas.id == id);

  if (index >= 0) {
    Mascotas.splice(index, 1);
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

/* Modificar una mascota */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const index = Mascotas.findIndex((mascotas) =>mascotas.id == id);
  if (index >= 0) {
    Mascotas[index] = req.body;
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
