import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ambiente} from "./ambiente";
import {HttpClient} from "@angular/common/http";  //no olvidar los imports
import {Modelstudent} from "../models/modelstudent";


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  ambiente: Ambiente;           //no se lo que hace pero se tiene que poner

  constructor(private http: HttpClient) {
    this.ambiente = new Ambiente();
  }

  getStudent(_id:string): Observable<Modelstudent>{  //no es un array porque es solo una asignatura lo que le paso
    return this.http.get<Modelstudent>(this.ambiente.urlStudent+'/getStudent'+ `/${_id}`);
    }
  getStudents(): Observable<Modelstudent[]>{  //esto es el observable. me da un array de studnets
      return this.http.get<Modelstudent[]>(this.ambiente.urlStudent + '/getStudents');  
      }
  addStudent(addstu: Modelstudent){//: Observable<void> 
        return this.http.post(this.ambiente.urlStudent + '/addStudent', addstu);
      }

  
}
