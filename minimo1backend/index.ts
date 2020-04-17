"use strict";
//¡¡¡¡¡¡¡¡¡IMPORTANTE: EL NOMBRE DE LAS COLECCIONES EN MINUSCULA PORQUE SINO NO LAS DETECTA!!!!!!!!!
//Import libraries
import express = require("express");
import mongoose = require("mongoose");
import cors = require("cors");
import bodyParser = require('body-parser');

//Import routes
//let studentsRouter = require("./routes/StudentsRoutes"); //variable con la ruta students
//let subjectsRouter = require("./routes/SubjectsRoutes"); //variable con la ruta subjects
let casoRouter = require("./routes/CasoRoutes");


//Server variable initialization
let app = express();
app.use(cors());
app.use(bodyParser.json()); //para poder enviar json con el POST


app.use('/caso', casoRouter);   //students
//app.use('/asignaturas', subjectsRouter);   //subjects


//Mongo database connection
mongoose.connect("mongodb://127.0.0.1:27017/dbexamen1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(function () {
    console.log('Connection to the database successful');
}).catch(function (err) {
    console.log("Database error: " + err.message);
});


//Make app listen on port 3000
const port = 3000; // en el puerto que vamos a escuchar
app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
module.exports = app;
