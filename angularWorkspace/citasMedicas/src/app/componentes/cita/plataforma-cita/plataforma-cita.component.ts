import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelo/Cita';
import { CitaService } from 'src/app/servicios/cita.service';
import { DiagnosticoService } from 'src/app/servicios/diagnostico.service';
import { MedicoService } from 'src/app/servicios/medico.service';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-plataforma-cita',
  templateUrl: './plataforma-cita.component.html',
  styleUrls: ['./plataforma-cita.component.css']
})
export class PlataformaCitaComponent implements OnInit {

  quiere:boolean=false;
  citaBuscada:Cita=new Cita;
  idABuscar:number=0;
  idPaciente:number=0;
  idDiagnostico:number=0;
  idMedico:number=0;

  constructor(private route : Router, private cs : CitaService,
    private ms : MedicoService, private ps : PacienteService,
    private ds : DiagnosticoService) { }

  ngOnInit(): void {
  }


  Crear(){
    this.route.navigate(["./form-cita"]);
  }

  lista(){
    this.route.navigate(["./lista-citas"]);
  }

  buscar(){  
    
    this.cs.getById(this.idABuscar).subscribe(data =>
      {
        this.citaBuscada=data;
        console.log(this.citaBuscada);
        if(data != null){
          this.quiere=true;
        }else{
          this.quiere=false;
        }
      });
  }
}
