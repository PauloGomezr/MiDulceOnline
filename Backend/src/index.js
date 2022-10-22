const express = require("express");
const conectarBD = require("./config/bd");
const cors = require("cors");

const app = express();
const port = 7000;

//conectamos la bd
conectarBD();
app.use(cors());
app.use(express.json());

//prefijo productos
app.use("/api/productos", require("../src/routes/route_producto"));
//prefijo usuarios
app.use("/api/usuarios", require("../src/routes/route_usuario"));

//routes
app.get("/", (req, res) => {
  res.send("Bienvenidos ya estamos conectados con el navegador");
});

app.listen(port, () =>
  console.log("El servidor se encuentra conectado en el puerto", port)
);
