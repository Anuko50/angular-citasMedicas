import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/modelo/Medico';
import { Paciente } from 'src/app/modelo/Paciente';
import { MedicoService } from 'src/app/servicios/medico.service';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit {

  id:number=0;
  medicos?:Medico[];
  pacientes?:Paciente[];
  pacienteSelected:Paciente=new Paciente;
  medicoStoraged:Medico=JSON.parse(localStorage.getItem('usuario')!);
  inicio:Boolean=true;
  constructor(private route : Router, private ms : MedicoService, private ps : PacienteService) {   }

  ngOnInit(): void {
    if(this.inicio){
      this.getMedicos();
      this.getPacientes();
      this.inicio=false;
    }
  }

  public getMedicos(){
    this.ms.getAll().subscribe(data =>{
      this.medicos=data;
      });
  }

  
  public getPacientes(){
    this.ps.getAll().subscribe(data =>{
      this.pacientes=data;
      });
  }

  anyadirPaciente(id:number){
    this.ms.addPaciente(id, this.pacienteSelected.id).subscribe(data =>{
      alert(data);
      this.getMedicos();
    });
  }

  sonIguales(id:number):Boolean{
    if(this.medicoStoraged.id == id){
      return true;
    }else{
      return false;
    }
  }

  public deleteMedico(id:number){

    if(this.sonIguales(id)){
      var que:Boolean = window.confirm("Está a punto de eliminarse a sí mismo. ¿Desea continuar?");
      if(que){
        this.ms.delete(id).subscribe(data => {
          //alert(data);
          this.getMedicos();
        });
        alert("se va a cerrar la sesión");
        localStorage.clear();
        this.route.navigate(['']);
      }else{
        this.route.navigate(['./lista-medicos']);
      }
    }else{
      this.ms.delete(id).subscribe(data => {
        alert(data);
        this.getMedicos();
      });
    }


  }
}
