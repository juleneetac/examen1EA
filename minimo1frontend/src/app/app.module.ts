import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { FormControl, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import {Router, RouterModule} from '@angular/router';
import { AddseguimientoComponent } from './components/addseguimiento/addseguimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    AddstudentComponent,
    AddseguimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,  //añadirlo para el maplist a la hora de hacer un ngfor
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
