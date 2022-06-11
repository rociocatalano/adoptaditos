const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const mascotasController = require("./controller/mascotas");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);

app.use("/mascotas", mascotasController);

app.use(middleware.unknownEndpoint);
module.exports = app;
