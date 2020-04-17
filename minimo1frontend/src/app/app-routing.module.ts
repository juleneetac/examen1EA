import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { StudentsComponent } from './components/students/students.component';
import { AddseguimientoComponent } from './components/addseguimiento/addseguimiento.component';


const routes: Routes = [
  // {
  //   path:'addStud',
  //   component: AddstudentComponent
  // },
  // {
  //   path:'addStudtoSubj',
  //   component: StudentsComponent
  // },
  // {
  //   path:'',
  //   component: SubjectsComponent
  // }
  {
    path:'',
    component: AddseguimientoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
