const mongoose = require('mongoose');

const ordenesSchema = mongoose.Schema({
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "Usuario"
    },
    tipoOrden:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    fechaRegistro:{
        type:Date,
        required:true,
        default: Date.now()
    },
    articulos:[
        {
            producto:{
                type:mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Producto"
            },
            cantidad:{
                type:String,
                required:true 
            },
            subtotal:{
                type:Number,
                required:true, 
                default: 0.0
            }
        }
        
    ],
    valorTotal:{
        type:Number,
        required:true, 
        default: 0.0
    }

},{versionKey:false});

module.exports= mongoose.model('Ordenes',productoSchema);