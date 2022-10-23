const { response, json } = require("express");
const { now } = require("mongoose");
const Producto = require("../models/productoModel");

//Creación un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    let producto;

    //creamos el producto
    producto = new Producto(req.body);
    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear un nuevo producto");
  }
};

//Buscar producto por id
exports.buscarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({ msg: "El producto no existe" });
    }
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al consultar el producto");
  }
};

//Mostrar todos los productos
exports.mostrarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar los productos");
  }
};

//Modificar la información de un producto
exports.actualizarProducto = async (req, res) => {
  try {
    const {
      nombreProd,
      precioComp,
      presentacion,
      categoria,
      precioVenta,
      cantidad
    } = req.body;
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({ msg: "No existe el producto para actualizar" });
    }
    //se asignan los nuevos datos
    producto.nombreProd = nombreProd;
    producto.precioComp = precioComp;
    producto.presentacion = presentacion;
    producto.categoria = categoria;
    producto.precioVenta = precioVenta;
    producto.cantidad = cantidad;
    producto.fechaActualizacion = new Date();

    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      { new: true }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el producto");
  }
};

//Eliminar producto por id
exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "El producto no existe" });
    }

    await Producto.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Se elimino el producto satisfactoriamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el producto");
  }
};

//Inactivar producto
exports.inactivarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "El producto no existe" });
    }
    console.log(producto.estado);
    producto.estado = false;
    producto.fechaActualizacion = new Date();
    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      {
        new: true
      }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al inactivar el producto");
  }
};
