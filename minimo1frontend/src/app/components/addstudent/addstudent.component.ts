import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';
import { Modelstudent } from 'src/app/models/modelstudent';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  name: string;
  address: string;
  home: string;
  work: string;
  studies: string;

  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl("")
  }

  addStu(event){
    event.preventDefault()
    console.log(event)
    let credencial: Modelstudent = new Modelstudent(this.name, this.address, this.home, this.work, this.studies)
    this.studentService.addStudent(credencial).subscribe(
      res =>{
              console.log(res);
              confirm('Se registro OK')
              this.goHome();
      },
      err => {
        console.log(err);
        //this.handleError(err);
      });
  }

}
