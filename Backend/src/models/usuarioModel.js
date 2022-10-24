const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    apellido: {
      type: String,
      required: true,
      trim: true
    },
    correo: {
      type: String,
      required: true,
      trim: true
    },
    /*clave: {
      type: String,
      required: true,
      trim: true
    },*/
    password: {
      type: String,
      require: true,
      trim: true
    },
    registro: {
      type: Date,
      default: Date.now() 
    },
    estado: {
      type: Boolean,
      required: true,
      default: true
    },
    fechaCreacion: {
      type: Date,
      required: true,
      default: Date.now()
    },
    fechaActualizacion: {
      type: Date
      //required:true
      //default: Date.now()
    },
  },
  { versionKey: false }
);

//exportar
module.exports = mongoose.model("Usuario", usuarioSchema);
