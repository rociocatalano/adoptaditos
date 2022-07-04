const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require('../dataccess/usuarios-refugios');


/* Obtener todos los refugios */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

/* Obtener un refugio especifico */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

/* Agregar un refugio sin usuario logeado */
/*
router.post("/", (req, res) => {
    const body = {...req.body, id: uuidv4() };
    dao.save(body);
    res.status(201).json(body);
});*/


//agregar un elemento - nuevo refugio (POST) con usuario logueado
router.post("/", middleware.validarUserLogin, (req, res) => {

    const body = {...req.body, id: uuidv4(), user: req.user };
    dao.save(body);
    res.status(200).json(body);
});


/* Borrar un usuario refugio */

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar un refugio */

router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (dao.modificar(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;