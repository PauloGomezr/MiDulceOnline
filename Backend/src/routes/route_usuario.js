//rutas para usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');


//Metodos CRUD
router.post('/',usuarioController.crearUsuario);
router.get('/',usuarioController.mostrarUsuarios);
router.get('/:id',usuarioController.buscarUsuario);
router.delete('/:id',usuarioController.eliminarUsuario);
router.put('/:id',usuarioController.actualizarUsuario);












module.exports = router;