import {Component, OnInit } from '@angular/core';
import {Modelsubject} from "../../models/modelsubject";
import {SubjectsService} from "../../services/subjects.service";
import {StudentsService} from "../../services/students.service";
import {Modelstudent} from "../../models/modelstudent";
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private studentService: StudentsService, private router: Router) {} 
  
  subjects: Modelsubject[];
  students: Modelstudent[];
  detailstudent: Modelstudent;

  ngOnInit() {
    //this.getSubjects();
  }
  
  public getSubjects(){   //obtengo todas las asignaturas
    this.subjectService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
        console.log(this.subjects);
      },
      (err) => {
        console.log("err", err);
      }
    )  //el subject service es el declarado arriba en private
  }

  public getStudentfrom(id:string){  //obtengo los estudiantes de una asignatura en concreto
    this.subjectService.getStudentfrom(id).subscribe(
      (data) => {
        this.students = data.students;   //este data.students se refiere al apartado students que hay en el model de subjects
        console.log("getstudentfrom", this.students);
      },
      (err) => {
        console.log("err", err);
      }
    )  //el subject service es el declarado arriba en private
  }
  public getStudent(id:string){  //obtengo los estudiantes de una asignatura en concreto
    this.studentService.getStudent(id).subscribe(
      (data) => {
        this.detailstudent = data;
        console.log(this.detailstudent);
      },
      (err) => {
        console.log("err", err);
      }
    )  //el subject service es el declarado arriba en private
  }

}
