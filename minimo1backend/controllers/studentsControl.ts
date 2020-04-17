'use strict';

let StudentSchema = require('../models/Students');
//let mongoose = require('mongoose');  //no se si se debe quitar
//let Students = mongoose.model('Students');
//const ObjectId = require('mongodb').ObjectID;


async function postStudent (req, res){  //registrarse un usuario si el usuario ya existe da error
    let student = req.body;
    console.log("Name: "+student.name)
    console.log("Address: "+student.address)
    console.log("phone home: "+ student.phones[0].home)
    console.log("phone work: "+ student.phones[0].work)
    console.log("Carrera: "+ student.studies)
    let stu = new StudentSchema()
    console.log(stu)
        try{
            stu.name = student.name
            stu.address = student.address
            stu.phones = student.phones
            //stu.phones.work = student.phones.work
            stu.studies = student.studies
            await stu.save();
            return res.status(201).send({message: "Student añadido successfully"}) 
            } 
        catch (err) {
            res.status(500).send(err);
            console.log(err);
            }
    }

async function getStudentsOf (req, res){
    // le paso una carrera como parametro y me da los estudiantes de esta carrera
    let study = req.params.studiesName;
    let student = await StudentSchema.find({studies: study}, {name:1});  //con lo de name:1 hago que solo me de el nombre
    if(student) {
        res.status(200).json(student);
    } else {
        res.status(424).send({message: 'Grade not found'});
    }
}
async function getStudent (req, res){ //me da datos de un estudiante especifico
    let my_id = req.params.studentId;
    let student = await StudentSchema.findById(my_id);
    if(student) {
        res.status(200).json(student);
        console.log(student)
    } else {
        res.status(424).send({message: 'studnet not found'});
    }
};

async function getStudents (req, res){   //me da el nombre de todas las asignaturas
    let students = await StudentSchema.find().select('name');
    console.log(students);
    if(students) {
        res.status(200).json(students);
    } else {
        res.status(424).send({message: 'students error'});
    }
}
// async function getStudentsS (req, res){
//     let student = await StudentSchema.find({studies:"Sistemas"}, {name:1});
//     console.log(student);
//     if(student) {
//         res.status(200).json(student);
//     } else {
//         res.status(424).send({message: 'Grade not found'});
//     }
// }

// async function getStudentsA (req, res){
//     let student = await StudentSchema.find({studies:"Aeros"}, {name:1});
//     if(student) {
//         res.status(200).json(student);
//     } else {
//         res.status(424).send({message: 'Grade not found'});
//     }
// }
// async function getStudentsT (req, res){
//     let student = await StudentSchema.find({studies:"Telematica"}, {name:1});
//     if(student) {
//         res.status(200).json(student);
//     } else {
//         res.status(424).send({message: 'Grade not found'});
//     }
// }



module.exports = {postStudent, getStudentsOf, getStudent, getStudents};