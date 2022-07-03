const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
//let { Mascotas } = require("../dataccess/mascotas");
let dao = require('../dataccess/mascotas');


/* Obtener todas las mascotas */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

/* Obtener una mascota especifica */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    //const data = Mascotas.find((mascota) => mascota.id == id);
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

/* Agregar una mascota sin usuario logeado -- funciona */
router.post("/", (req, res) => {
    const body = {...req.body, id: uuidv4() };
    dao.save(body);
    res.status(201).json(body);
});


//agregar un elemento (POST) con usuario logueado
/*router.post("/", middleware.validarUserLogin, (req, res) => {
    const body = {...req.body, id: uuidv4(), user: req.user };
    dao.save(body);
    res.status(200).json(body);
});*/

/* Borrar una mascota */

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    //const index = Mascotas.findIndex((mascotas) => mascotas.id == id);

    if (dao.borrar(id)) {
        //Mascotas.splice(index, 1);
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar una mascota */

router.put("/:id", (req, res) => {
    const id = req.params.id;
    //const index = Mascotas.findIndex((mascotas) => mascotas.id == id);
    if (dao.modificar(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;