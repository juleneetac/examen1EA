'use strict';

let SubjectsSchema = require('../models/Subjects');
let StudentsSchema = require('../models/Students');
let mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectID;  //para usar el 9id directamente
import {Request, Response } from 'express';

async function getSubjects (req, res){   //me da el nombre de todas las asignaturas
    let subject = await SubjectsSchema.find().select('name');
    console.log(subject);
    if(subject) {
        res.status(200).json(subject);
    } else {
        res.status(424).send({message: 'Subjects error'});
    }
}

async function getStudentfrom (req, res){  //detalles de una asignatura, es decir, los students que tiene
    let _id = req.params.subjectId;  //el req.params crea un parametro que llamaremos subjectId
    // req.params es para get
    let subject = await SubjectsSchema.findById(_id).populate('students', 'name'); 
    //la asignatura de la cual quiero buscar sus estudiantes, depende de el id que le pase como parametro
    console.log(subject);
    if(subject) {
        res.status(200).json(subject); //subject.students esto envia solo el nombre. de momento poner solo(subject)
    } else {
        res.status(424).send({message: 'Subjects error'});
    }
}

 async function putStudentinSubject (req, res){   //añado un alumno a una asignatura
    //si el alumno no existe me da error
    let subjectId = req.body.subjectId;  //req.body es para post que le paso un json
    let studentId = req.body.studentId;
    console.log(`subject: ${subjectId}, studentID: ${studentId}`);
    let result = await SubjectsSchema.updateOne({_id: subjectId}, {$addToSet:{students: studentId}})
    console.log(`subject: ${subjectId}, studentID: ${studentId}`);
    res.status(200).send(result);
    res.status(200).send({message: "Student added successfully to the station"})

    // let studentFound = await StudentsSchema.findById(studentId);
    // console.log(studentFound);  //para buscar si existe o no, de momento no lo implemento


    // if (!studentFound) {
    //     console.log('Student not found');
    //     return res.status(404).send({message: 'Student not found'})
    // }
    // else{

    //     let result = await SubjectsSchema.updateOne({_id: subjectId}, {$addToSet:{students: studentId}})
    //     console.log(`subject: ${subjectId}, studentID: ${studentId}`);
    //     res.status(200).send(result);
    //     res.status(200).send({message: "Student added successfully to the station"})
    //     }
}

async function getStudentDetails (req, res){   //ver detalle de un alumno dentro de una asignatura
    try {
        let _id = req.params.studentId;
        let student = await StudentsSchema.findById(_id);
        if(!student){
            return res.status(404).send({message: 'student not found'});
        }else{
            res.status(200).send(student);
        }
    } catch(err) {
        res.status(500).send(err);
    }
}
// async function hello (req: Request, res:Response){ //IGNORAR ERA SOLO PARA PROBAR
    
//     const s_aux: string = req.body.msg;
//     console.log('texto', s_aux);
//     res.status(200).json(s_aux);
// }

// async function hello2 (req: Request, res:Response){  //IGNORAR ERA SOLO PARA PROBAR
    
//     const s_aux: string = req.params.msg;
//     console.log('texto', s_aux);
//     res.status(200).json(s_aux);
// }

// async function getStudentEA (req, res){
//     let subject = await SubjectsSchema.findOne({name:'EA'}).populate('students', 'name'); 
//     //me da los estudiantes de la asignatura de EA con el nombre solo, si no pongo name me da toda la info del student
//     console.log(subject);
//     if(subject) {
//         res.status(200).json(subject);
//     } else {
//         res.status(424).send({message: 'Subjects error'});
//     }
// }


module.exports = {getSubjects, getStudentfrom, putStudentinSubject, getStudentDetails};