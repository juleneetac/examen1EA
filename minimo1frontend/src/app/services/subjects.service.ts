import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ambiente} from "./ambiente";
import {HttpClient} from "@angular/common/http";
import {Modelsubject} from "../models/modelsubject";
import {Modelstudent} from "../models/modelstudent";
import { Modelmodify } from '../models/modelmodify';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  ambiente: Ambiente;           //no se lo que hace pero se tiene que poner
  addstsub: Modelmodify;   //añadir si se usa

  constructor(private http: HttpClient) {
    this.ambiente = new Ambiente();
  }

  getSubjects(): Observable<Modelsubject[]>{  //esto es el observable. me da un array de subjects
    return this.http.get<Modelsubject[]>(this.ambiente.urlSubject + '/getSubjects');  
    //me lleva a la ruta que me da todas las asignaturas y se llama como en el backend
    // this.ambiente.urlSubject == http://localhost:3000/asignaturas
    }
  getStudentfrom(_id:string): Observable<Modelsubject>{  //no es un array porque es solo una asignatura lo que le paso
      return this.http.get<Modelsubject>(this.ambiente.urlSubject+'/subjectDetail'+ `/${_id}`);
      }

  putStudentinSubject(addstsub: Modelmodify){
    return this.http.post(this.ambiente.urlSubject + '/addStudentsubj', addstsub);
  }
  
}
