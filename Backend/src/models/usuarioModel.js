const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    correo:{
        type:String,
        require:true
    },
    clave:{
        type:String,
        require:true 
    },
    estado:{
        type:String,
        require:true 
    },
    fechaCreacion:{
        type:Date,
        required:true
    }
},{versionKey:false});

//exportar
module.exports = mongoose.model('Usuario',usuarioSchema);