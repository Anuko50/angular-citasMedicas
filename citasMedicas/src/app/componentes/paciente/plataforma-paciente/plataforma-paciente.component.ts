import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/modelo/Paciente';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-plataforma-paciente',
  templateUrl: './plataforma-paciente.component.html',
  styleUrls: ['./plataforma-paciente.component.css']
})
export class PlataformaPacienteComponent implements OnInit {
  quiere:boolean=false;
  pacienteBuscado:Paciente = new Paciente;
  idABuscar:number=0;
  
  constructor(private route : Router, private ps : PacienteService) { }

  ngOnInit(): void {
  }
  lista(){
    this.route.navigate(["./lista-pacientes"]);
  }

  buscar(){  
    
    this.ps.getById(this.idABuscar).subscribe(data =>
      {
        this.pacienteBuscado=data;
        if(data != null){
          this.quiere=true;
        }else{
          this.quiere=false;
        }
      });
  }


}
