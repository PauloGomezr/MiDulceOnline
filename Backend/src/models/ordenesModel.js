const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Usuario = mongoose.model("Usuario");
const Producto = mongoose.model("Producto");

const ordenesSchema = new Schema(
  {
    usuario: {
      type: Schema.ObjectId,
      required: true,
      ref: Usuario
    },
    tipoTransaccion: {
      type: String,
      required: true,
      trim: true
    },
    estado: {
      type: Boolean,
      require: true,
      default: true
    },
    fechaRegistro: {
      type: Date,
      required: true,
      default: Date.now()
    },
    articulos: [
      {
        producto: {
          type: Schema.ObjectId,
          ref: Producto
        },
        cantidad: {
          type: Number,
          required: true,
          trim: true
        },
        subtotal: {
          type: Number,
          required: true,
          default: 0.0
        }
      }
    ],
    valorTotal: {
      type: Number,
      required: true,
      default: 0.0
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Ordenes", ordenesSchema);
