import { Paciente } from "./Paciente";
import { Diagnostico } from "./Diagnostico";
import {Medico} from "./Medico";
import { Time } from "@angular/common";


export class Cita{
    id:number=0;
    fechaHora ?:string;
    atribute11 ?:string;
    motivoCita ?:string;
    diagnostico:number=0;
    medico:number=0;
    paciente:number=0;
}