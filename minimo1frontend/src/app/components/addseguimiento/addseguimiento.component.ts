import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasoService } from 'src/app/services/caso.service';
import { Modelcaso } from 'src/app/models/modelcaso';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addseguimiento',
  templateUrl: './addseguimiento.component.html',
  styleUrls: ['./addseguimiento.component.css']
})
export class AddseguimientoComponent implements OnInit {

  casos: Modelcaso[];
  segForm: FormGroup;   //para los validators
  validation_messages: any;

  fecha: string;
  fiebre: string;
  tos: string;
  dificultad: string;
  malestar: string;

  constructor(private casoService: CasoService, private router: Router, private formBuilder: FormBuilder) { 
    this.segForm = this.formBuilder.group({

      fecha: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)])),
    
      fiebre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[sn]$/)])),

      tos: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^[sn]$/)])),
      dificultad : new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern(/^[sn]$/)])),
      malestar: new FormControl('', Validators.compose([
              Validators.required,
              Validators.pattern(/^[sn]$/)])),
    }

    );
}

  ngOnInit(){
    this.validation_messages = {
      'fecha': [
        { type: 'required', message: 'fecha is required'},
        { type: 'pattern', message: 'formato dd/mm/yyyy' },
      ],
      'fiebre': [
        { type: 'required', message: ' is required'},
        { type: 'pattern', message: 'pon "s"si tiene fiebre y "n" si no'},
      ],
      'tos': [
        { type: 'required', message: 'tos is required'},
        { type: 'pattern', message: 'pon "s" si tiene tos y "n" si no'},
      ],
      'dificultad': [
        { type: 'required', message: 'dificultad is required'},
        { type: 'pattern', message: 'pon "s"si tiene dificultad y "n" si no'},
      ],
      'malestar': [
        { type: 'required', message: ' malestar is required'},
        { type: 'pattern', message: 'pon "s"si tiene malestar y "n" si no'},
      ],           
  }
}
  

  addSeg(event){
    event.preventDefault()
    console.log(event)
    let credencial: Modelcaso= new Modelcaso("Pep", this.fecha, "999999999R", "234234234", this.fiebre, this.tos, this.dificultad, this.malestar)
    this.casoService.addSeguimiento(credencial).subscribe(
      res =>{
              console.log(res);
              confirm('Se añadio un seguimiento')
      },
      err => {
        console.log(err);
        //this.handleError(err);
      });
  }

  public getCasos(){   //obtengo todas las asignaturas
    this.casoService.getCasos().subscribe(
      (data) => {
        this.casos = data;
        console.log(this.casos);
      },
      (err) => {
        console.log("err", err);
      }
    )  //el subject service es el declarado arriba en private
  }

}
