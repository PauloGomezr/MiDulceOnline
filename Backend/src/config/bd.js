const mongoose = require("mongoose");
require("dotenv").config();

const conectarBD = () => {
  //Conexion con mongo atlas en la nube
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Conexión exitosa con Mongo Atlas"))
    .catch((err) => console.error(err));
};

module.exports = conectarBD;
