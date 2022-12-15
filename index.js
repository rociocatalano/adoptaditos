const http = require("http");
const app = require("./app");
const { connectDb, sequelize } = require("./utils/db")

const server = http.createServer(app);

connectDb()

sequelize.sync().then(() => {
  console.log('Conectado a la BD correctamente')
}).catch((error) => {
  console.log('error', error)
})

server.listen(8000, () => {
  console.log("server running");
});
