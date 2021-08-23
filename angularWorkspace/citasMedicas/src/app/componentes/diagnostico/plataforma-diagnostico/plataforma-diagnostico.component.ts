import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diagnostico } from 'src/app/modelo/Diagnostico';
import { DiagnosticoService } from 'src/app/servicios/diagnostico.service';

@Component({
  selector: 'app-plataforma-diagnostico',
  templateUrl: './plataforma-diagnostico.component.html',
  styleUrls: ['./plataforma-diagnostico.component.css']
})
export class PlataformaDiagnosticoComponent implements OnInit {
  quiere:boolean=false;
  diagnosticoBuscado:Diagnostico=new Diagnostico;
  idABuscar:number=0;
  constructor(private route : Router, private ds : DiagnosticoService) { }

  ngOnInit(): void {
  }

  Crear(){
    this.route.navigate(["./form-diagnostico"]);
  }

  lista(){
    this.route.navigate(["./lista-diagnosticos"]);
  }

  buscar(){  
    
    this.ds.getById(this.idABuscar).subscribe(data =>
      {
        this.diagnosticoBuscado=data;
        if(data != null){
          this.quiere=true;
        }else{
          this.quiere=false;
        }
      });
  }

}
