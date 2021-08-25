import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelo/Cita';
import { Medico } from 'src/app/modelo/Medico';
import { Paciente } from 'src/app/modelo/Paciente';
import { CitaService } from 'src/app/servicios/cita.service';
import { MedicoService } from 'src/app/servicios/medico.service';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css']
})
export class FormCitaComponent implements OnInit {

  fecha?:Date;
  medicos?:Medico[];
  pacientes?:Paciente[];
  medico:Medico=new Medico;
  paciente:Paciente= new Paciente;
  cita:Cita= new Cita;
  constructor(private route : Router, private cs : CitaService, private ms:MedicoService, private ps:PacienteService) { }

  ngOnInit(): void {
    this.ms.getAll().subscribe(data=>{
      this.medicos=data;
    });

    this.ps.getAll().subscribe(data=>{
      this.pacientes=data;
    });
  }

  public crearCita(){
    var str = this.fecha?.toString();
    //2021-08-27T10:42:52
    //2021-08-05 12:03:00
    var fechaParsed= str?.substring(0,10)+" "+str?.substring(11);
    console.log(fechaParsed);
    this.cita.fechaHora=fechaParsed;
    this.cita.medico=this.medico.id;
    this.cita.paciente=this.paciente.id;
    console.log(this.cita);
    this.cs.create(this.cita, this.medico.id, this.paciente.id).subscribe(data=>{
      alert(data);
      this.route.navigate(['./plataforma-cita']);
    });
  }
  
}
