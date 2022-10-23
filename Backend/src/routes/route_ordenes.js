//rutas para ordenes
const express = require("express");
const router = express.Router();
const productoController = require("../controller/ordenesController");

//Metodos CRUD
router.post("/", productoController.crearOrden);
router.get("/", productoController.mostrarOrdenes);
router.get("/:id", productoController.buscarOrden);
router.delete("/:id", productoController.eliminarOrden);
// router.put("/:id", productoController.actualizarOrden);

module.exports = router;
