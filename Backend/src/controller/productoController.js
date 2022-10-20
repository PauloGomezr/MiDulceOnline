const { response, json } = require("express");
const { now } = require("mongoose");
const Producto = require("../models/productoModel");

//Mostrar todos los productos
exports.mostrarProducto = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al cargar los productos")
    }
}

exports.crearProducto = async (req, res) => {
    try {
        let producto;

        //creamos el producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al ejecutar la peticion de creacion")
    }
}

exports.buscarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'El producto no existe'});
        }  
            res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al consultar el producto");
    }
}

exports.eliminarProducto = async (req, res)=>{
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'El producto no existe'});
        }

        await Producto.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'Se elimino el producto satisfactoriamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el producto");
    }
}

exports.actualizarProducto = async (req, res)=>{
    try {
       const {nombre_prod,precio_comp,presentacion,categoria,precio_venta,cantidad} =req.body; 
       let producto = await Producto.findById(req.params.id);

       if(!producto){
        res.status(404).json({msg: 'No existe el producto para actualizar'});
       }
       producto.nombre_prod = nombre_prod;
       producto.precio_comp = precio_comp;
       producto.presentacion = presentacion;
       producto.categoria = categoria;
       producto.precio_venta = precio_venta;
       producto.cantidad = cantidad;
       producto.fechaCreacion = now();

       producto = await Producto.findOneAndUpdate({_id:req.params.id},producto,{new:true});
       res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el producto");
        
    }
}