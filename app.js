const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const mascotasController = require("./controller/mascotas");
const loginController = require("./controller/login");
const refugiosController = require("./controller/usuarios-refugios");
const adoptantesController = require("./controller/usuarios-adoptantes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use(middleware.processToken);

app.use("/mascotas", mascotasController);
app.use("/login", loginController);
app.use("/usuarios-refugios", refugiosController);
app.use("/usuarios-adoptantes", adoptantesController);

app.use(middleware.unknownEndpoint);
module.exports = app;