'use strict';

let CasoSchema = require('../models/Caso');

async function getCasos (req, res){   //me da el nombre de todas las asignaturas
    let caso = await CasoSchema.find();
    console.log(caso);
    if(caso) {
        res.status(200).json(caso);
    } else {
        res.status(424).send({message: 'error en el caso'});
    }
}

async function postCaso (req, res){  //registrarse un usuario si el usuario ya existe da error
    let c = req.body;
    console.log("Nombre: "+c.nombre)
    console.log("Fecha: "+c.fecha)
    console.log("DNI: "+ c.dni)
    console.log("Telefono: "+ c.telefono )
    console.log("Fiebre: "+ c.fiebre)
    console.log("Tos: "+c.tos)
    console.log("Dificultad: "+c.dificultad)
    console.log("Malestar: "+c.malestar)
    let caso = new CasoSchema()
    console.log(caso)
        try{
            caso.nombre = c.nombre
            caso.fecha = c.fecha
            caso.DNI = c.DNI
            caso.telefono = c.telefono
            caso.fiebre =  c.fiebre
            caso.tos = c.tos
            caso.dificultad = c.dificultad
            caso.malestar = c.malestar

            await caso.save();
            return res.status(201).send({message: "Nuevo seguimiento añadido"}) 
            } 
        catch (err) {
            res.status(500).send(err);
            console.log(err);
            }
    }

    module.exports = {getCasos, postCaso};