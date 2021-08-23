import { Usuario } from "./Usuario";
import { Medico } from "./Medico";

export class Paciente extends Usuario{
    nss ?:string;
    numTarjeta ?:string;
    telefono ?:string;
    direccion ?:string;
    medicos ?: number[];
}