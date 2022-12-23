const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require('../dataccess/usuarios-refugios');


/* Obtener todos los refugios */
router.get("/", async(req, res) => {
    res.status(200).json(await dao.getAll(req.query));
});

/* Obtener un refugio especifico */
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const data = await dao.getOne(id);

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
router.post("/", middleware.validarUserLogin, async(req, res) => {

    const body = {...req.body, id: uuidv4(), user: req.user };
    const data = await dao.save(body);
    res.status(200).json(data);
});


/* Borrar un usuario refugio */

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    await dao.borrar(id)
    res.sendStatus(202);
});

/* Modificar un refugio */

router.put("/:id", async(req, res) => {
    const id = req.params.id;
    if (await dao.update(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;