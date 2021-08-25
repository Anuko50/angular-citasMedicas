import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diagnostico } from 'src/app/modelo/Diagnostico';
import { DiagnosticoService } from 'src/app/servicios/diagnostico.service';

@Component({
  selector: 'app-lista-diagnosticos',
  templateUrl: './lista-diagnosticos.component.html',
  styleUrls: ['./lista-diagnosticos.component.css']
})
export class ListaDiagnosticosComponent implements OnInit {

  diagnosticos?: Diagnostico[];
  inicio:Boolean=true;
  constructor(private route : Router, private ds : DiagnosticoService) { 
  }

  ngOnInit(): void {
    if(this.inicio){
      this.getDiagnosticos();
      this.inicio=false;
    }
  }

  public getDiagnosticos(){
    this.ds.getAll().subscribe(data =>{
      this.diagnosticos=data;
      });
  }

  public updateDiagnostico(id:number){
    
  }

  public deleteDiagnostico(id:number){
    this.ds.delete(id).subscribe(data => {
      alert(data);
      this.getDiagnosticos();
    });
  }
}
