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
        type:Boolean,
        require:true,
        default: true
    },
    fechaCreacion:{
        type:Date,
        required:true,
        default: Date.now()
    },
    fechaActualizacion:{
        type:Date,
        //required:true
        //default: Date.now()
    }
},{versionKey:false});

//exportar
module.exports = mongoose.model('Usuario',usuarioSchema);