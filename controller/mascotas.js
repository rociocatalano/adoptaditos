const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
//let { Mascotas } = require("../dataccess/mascotas");
let dao = require('../dataccess/mascotas');


/* Obtener todas las mascotas */
router.get("/", async(req, res) => {
    res.status(200).json(await dao.getAll(req.query));
});

/* Obtener una mascota especifica */
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    //const data = Mascotas.find((mascota) => mascota.id == id);
    const data = await dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

/* Agregar una mascota sin usuario logeado -- funciona */
/*
router.post("/", (req, res) => {
    const body = {...req.body, id: uuidv4() };
    dao.save(body);
    res.status(201).json(body);
});*/


//agregar un elemento (POST) con usuario logueado
router.post("/", middleware.validarUserLogin, async(req, res) => {

    const body = {...req.body, id: uuidv4(), user: req.user };
    const data = await dao.save(body);
    res.status(200).json(data);
});


/* Borrar una mascota sin usuario logeado*/

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    //const index = Mascotas.findIndex((mascotas) => mascotas.id == id);
    await dao.borrar(id)
    res.sendStatus(202);
});



/* Modificar una mascota */

router.put("/:id", async(req, res) => {
    const id = req.params.id;
    //const index = Mascotas.findIndex((mascotas) => mascotas.id == id);
    if (await dao.modificar(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;