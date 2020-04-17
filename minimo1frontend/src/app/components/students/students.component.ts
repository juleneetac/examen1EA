import { Component, OnInit } from '@angular/core';
import {Modelstudent} from "../../models/modelstudent";
import {StudentsService} from "../../services/students.service";
import { SubjectsService } from 'src/app/services/subjects.service';
import { Modelsubject } from 'src/app/models/modelsubject';
import { Modelmodify } from 'src/app/models/modelmodify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  subjects: Modelsubject[];
  students: Modelstudent[];
  studentaddsub: Modelstudent;
  
  selstu: string;  //son para seleccionar con ngmodel en el selected list
  selsub: string;
  //student1: Modelstudent;
  //subject1: Modelsubject;

  constructor(private subjectService: SubjectsService, private studentService: StudentsService, private router: Router) {
    //this.student1 = new Modelstudent();
    //this.subject1 = new Modelsubject();
   }


  ngOnInit() {
    this.getSubjects();
    this.selstu = "";
    this.selsub = "";
    this.getStudents();

  }

  public addtosubj(idstu: string, idsub: string){
    let modify = new Modelmodify(idstu, idsub);
    this.subjectService.putStudentinSubject(modify)
      .subscribe(
        (res) => {
          console.log(res);
          confirm('Se añadio OK')
        },
        (err) => {
          console.log(err);
        });
       // window.location.reload();
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

  public getStudents(){   //obtengo todas las asignaturas
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        console.log(this.students);
      },
      (err) => {
        console.log("err", err);
      }
    )  //el subject service es el declarado arriba en private
  }

}
