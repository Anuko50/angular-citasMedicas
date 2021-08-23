import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelo/Cita';
import { Diagnostico } from 'src/app/modelo/Diagnostico';
import { Medico } from 'src/app/modelo/Medico';
import { Paciente } from 'src/app/modelo/Paciente';
import { CitaService } from 'src/app/servicios/cita.service';
import { DiagnosticoService } from 'src/app/servicios/diagnostico.service';
import { MedicoService } from 'src/app/servicios/medico.service';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  citas?:Cita[];
  id?:number;
  inicio:Boolean=true;

  constructor(private route : Router, private cs: CitaService, 
    private ps : PacienteService, private ms:MedicoService) { }

  ngOnInit(): void {
    if(this.inicio){
      console.log("iniciando");
      this.inicio=false;
      this.getCitas();
    }
  }

  public getCitas(){
    console.log("hago Un getCitas()");
    this.cs.getAll().subscribe(data =>{
      this.citas=data;
      });
  }


  public deleteCita(id:number){
    this.cs.delete(id).subscribe(data => {
      alert(data);
      this.getCitas();
    });
  }
}
