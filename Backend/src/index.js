const express = require("express");
const conectarBD = require("./config/bd");
const cors = require("cors");

const app = express();
const port = 4000;

//conectamos la bd
conectarBD();

//Habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json());

//prefijo productos
app.use("/api/productos", require("../src/routes/route_producto"));
//prefijo usuarios
app.use("/api/usuarios", require("../src/routes/route_usuario"));
//prefijo auth
app.use("/api/auth", require("./src/routes/auth"));
//prefijo ordenes
app.use("/api/ordenes", require("../src/routes/route_ordenes"));

//routes
app.get("/", (req, res) => {
  res.send("Bienvenidos ya estamos conectados con el navegador");
});

//Conexion con mongo atlas
app.listen(port, () =>
  console.log("El servidor se encuentra conectado en el puerto", port)
);
