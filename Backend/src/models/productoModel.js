const mongoose = require("mongoose");

const productoSchema = mongoose.Schema(
  {
    nombreProd: {
      type: String,
      required: true
    },
    precioComp: {
      type: Number,
      required: true
    },
    presentacion: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
      required: true
    },
    precioVenta: {
      type: Number,
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    },
    estado: {
      type: Boolean,
      require: true,
      default: true
    },
    fechaCreacion: {
      type: Date,
      required: true,
      default: Date.now()
    },
    fechaActualizacion: {
      type: Date
      //required:true,
      //default: Date.now()
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Producto", productoSchema);
