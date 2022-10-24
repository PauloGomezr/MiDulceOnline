//Ruta autenticar usuario

const express = require("express")
const router = express.Router();
const {check} = require("express-validator");
const authController = require("../controller/authController");
const auth = require("../middleware/auth");

//Autenticar usuario
router.post(
    "/",
    [
        check("email", "Agrega un email valido").isEmail(),
        check("password", "El password debe ser mínimo 6 caracteres").islength({
            min: 6,
        })
    ],
);

router.get('/',auth,authController.usuarioAutenticado)

module.exports = router;