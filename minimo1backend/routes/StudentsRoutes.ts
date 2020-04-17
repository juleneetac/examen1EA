"use strict";

import express = require("express");
let router = express.Router();
let studentsControl = require('../controllers/studentsControl');  //students

// router.get('/getStudents/:studiesName', studentsControl.getStudentsOf);  //me da los estudiantes de la carrera que le paso
// router.get('/getStudent/:studentId', studentsControl.getStudent);  //datos de un studiante en concreto
// router.get('/getStudents', studentsControl.getStudents)
// router.post('/addStudent', studentsControl.postStudent);   

module.exports = router;
