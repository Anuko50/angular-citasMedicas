import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/modelo/Medico';
import { MedicoService } from 'src/app/servicios/medico.service';

@Component({
  selector: 'app-plataforma-medico',
  templateUrl: './plataforma-medico.component.html',
  styleUrls: ['./plataforma-medico.component.css']
})
export class PlataformaMedicoComponent implements OnInit {

  quiere:boolean=false;
  medicoBuscado:Medico = new Medico;
  idABuscar:number=0;
  constructor(private route : Router, private ms : MedicoService) { }

  ngOnInit(): void { }

  lista(){
    this.route.navigate(["./lista-medicos"]);
  }

  buscar(){  
    
    this.ms.getById(this.idABuscar).subscribe(data =>
      {
        this.medicoBuscado=data;
        if(data != null){
          this.quiere=true;
        }else{
          this.quiere=false;
        }
      });
  }
}
