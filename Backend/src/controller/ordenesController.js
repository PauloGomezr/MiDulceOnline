const { response, json } = require("express");
const { now } = require("mongoose");
const Orden = require("../models/ordenesModel");

//Creación de  una nueva orden
exports.crearOrden = async (req, res) => {
  try {
    let orden;

    //creamos la orden de pedido
    orden = new Orden(req.body);
    await orden.save();
    res.send(orden);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear una nueva orden");
  }
};

//Mostrar todas las ordenes
exports.mostrarOrdenes = async (req, res) => {
  try {
    const orden = await Orden.find();
    res.json(orden);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar las ordenes");
  }
};

//Buscar orden por id
exports.buscarOrden = async (req, res) => {
  try {
    let orden = await Orden.findById(req.params.id);

    if (!orden) {
      res.status(404).json({ msg: "la referencia de orden existe" });
    }
    res.json(orden);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al consultar la orden");
  }
};

//Eliminar orden por id
exports.eliminarOrden = async (req, res) => {
  try {
    let orden = await Orden.findById(req.params.id);
    if (!orden) {
      res.status(404).json({ msg: "La orden no existe" });
    }

    await Orden.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Se elimino la orden satisfactoriamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar la orden");
  }
};
