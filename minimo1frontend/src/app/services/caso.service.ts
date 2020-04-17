import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ambiente} from "./ambiente";
import {HttpClient} from "@angular/common/http";  //no olvidar los imports
import {Modelstudent} from "../models/modelstudent";
import { Modelcaso } from '../models/modelcaso';


@Injectable({
  providedIn: 'root'
})
export class CasoService {
  ambiente: Ambiente;           //no se lo que hace pero se tiene que poner

  constructor(private http: HttpClient) {
    this.ambiente = new Ambiente();
  }

  getCasos(): Observable<Modelcaso[]>{  //esto es el observable. me da un array de studnets
    return this.http.get<Modelcaso[]>(this.ambiente.urlCaso + '/getCasos');  
    }

  addSeguimiento(addse: Modelcaso){//: Observable<void> 
      return this.http.post(this.ambiente.urlCaso + '/addSeguimiento', addse);
    }

}
