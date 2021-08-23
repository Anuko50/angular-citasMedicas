import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelo/Cita';
import { Diagnostico } from 'src/app/modelo/Diagnostico';
import { CitaService } from 'src/app/servicios/cita.service';
import { DiagnosticoService } from 'src/app/servicios/diagnostico.service';

@Component({
  selector: 'app-form-diagnostico',
  templateUrl: './form-diagnostico.component.html',
  styleUrls: ['./form-diagnostico.component.css']
})
export class FormDiagnosticoComponent implements OnInit {
  citaSelected:Cita = new Cita;
  citas?:Cita[];
  diagnostiocoNuevo:Diagnostico= new Diagnostico;
  constructor(private route : Router, private ds : DiagnosticoService, private cs: CitaService) { }

  ngOnInit(): void {
    this.cs.getAll().subscribe(data=>{
      this.citas=data;
    });
  }

  public crearDiagnostico(){
    this.diagnostiocoNuevo.idCita=this.citaSelected.id;
    this.ds.create(this.diagnostiocoNuevo).subscribe(data=>{
      alert(data);
      this.route.navigate(['./plataforma-diagnostico']);
    });
  }
}
