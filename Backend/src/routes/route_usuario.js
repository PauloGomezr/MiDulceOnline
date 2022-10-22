//rutas para usuario
const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

//Metodos CRUD
router.get("/", usuarioController.mostrarUsuarios);
router.post("/", usuarioController.crearUsuario);
router.get("/:id", usuarioController.buscarUsuario);
router.patch("/:id", usuarioController.inactivarUsuario); //cambiar un atributo
router.put("/:id", usuarioController.actualizarUsuario);

module.exports = router;
