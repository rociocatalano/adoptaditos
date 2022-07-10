const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require('../dataccess/usuarios-adoptantes');


/* Obtener todos los adoptantes */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

/* Obtener un adoptante especifico */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

/* Agregar un adoptante sin usuario logeado */
/*
router.post("/", (req, res) => {
    const body = {...req.body, id: uuidv4() };
    dao.save(body);
    res.status(201).json(body);
});*/


//agregar un elemento - nuevo adoptante (POST) con usuario logueado
router.post("/", middleware.validarUserLogin, (req, res) => {

    const body = {...req.body, id: uuidv4(), user: req.user };
    dao.save(body);
    res.status(200).json(body);
});


/* Borrar un usuario adoptante */

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar un adoptante */

router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (dao.modificar(id, req)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;