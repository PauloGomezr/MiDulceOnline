const Usuario = require("../models/usuarioModel");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  // ver errores

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    //Verifivar usuario registrado
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    //Verificar password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    //Todo correcto, crear firma de token

    const payload = {
      usuario: { id: usuario.id }
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 43200 //60 minutos
      },
      (error, token) => {
        if (error) throw error;

        //MSG confirma
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("hubo un error");
    console.log(error);
    res.status(400).send("hubo un error");
  }
};

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id);
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ msg: "Hubo un error" });
  }
};
