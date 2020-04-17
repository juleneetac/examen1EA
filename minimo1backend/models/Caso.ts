'use strict';

import mongoose = require("mongoose");
let Schema = mongoose.Schema;
let caso = new Schema({
    nombre: String,
    fecha: String,
    DNI: String,
    telefono: String,
    fiebre: String,
    tos: String,
    dificultad: String,
    malestar: String,
});

module.exports = mongoose.model('casos', caso);