//rutas para producto
const express = require("express");
const router = express.Router();
const productoController = require("../controller/productoController");

//Metodos CRUD
router.post("/", productoController.crearProducto);
router.get("/", productoController.mostrarProductos);
router.get("/:id", productoController.buscarProducto);
router.delete("/:id", productoController.eliminarProducto);
router.put("/:id", productoController.actualizarProducto);

module.exports = router;
