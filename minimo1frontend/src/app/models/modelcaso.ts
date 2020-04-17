import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Modelcaso {

    nombre: string;
    fecha: string;
    DNI: string;
    telefono: string;
    fiebre: string;
    tos: string;
    dificultad: string;
    malestar: string;

    constructor(nombre = '', fecha='', DNI='', telefono='', fiebre = '',tos = '',dificultad= '', malestar= '') {
        this.nombre = nombre;
        this.fecha = fecha;
        this.DNI = DNI;
        this.telefono = telefono;
        this.fiebre = fiebre;
        this.tos = tos;
        this.dificultad = dificultad;
        this.malestar = malestar;   
    }
}


