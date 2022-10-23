const { response, json } = require("express");
const { now } = require("mongoose");
const Usuario = require("../models/usuarioModel");

//Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    //creamos el usuario

    usuario = new Usuario(req.body);
    await usuario.save();
    res.send(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear un nuevo usuario");
  }
};

//Buscar usuario por id
exports.buscarUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      res.status(404).json({ msg: "El usuario no existe" });
    }
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al consultar el usuario");
  }
};

//Mostrar todos lo usuarios
exports.mostrarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar los usuarios");
  }
};

//modificar datos del usuario
exports.actualizarUsuario = async (req, res) => {
  try {
    const { nombre, apellido, correo, clave, estado } = req.body;
    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      res.status(404).json({ msg: "No existe el usuario para actualizar" });
    }
    //se asignan los nuevos datos
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.clave = clave;
    usuario.estado = estado;
    usuario.fechaActualizacion = new Date();

    usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, {
      new: true
    });
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el usuario");
  }
};

//Inactivar usuario
exports.inactivarUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ msg: "El usuario no existe" });
    }
    console.log(usuario.estado);
    usuario.estado = false;
    usuario.fechaActualizacion = new Date();
    usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, {
      new: true
    });
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al inactivar el usuario");
  }
};
