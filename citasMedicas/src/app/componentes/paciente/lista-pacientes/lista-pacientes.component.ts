import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/modelo/Medico';
import { Paciente } from 'src/app/modelo/Paciente';
import { Usuario } from 'src/app/modelo/Usuario';
import { MedicoService } from 'src/app/servicios/medico.service';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  medicoSelected:Medico=new Medico;
  medicos?:Medico[];
  pacientes?:Paciente[];
  pacienteStored:Usuario= new Usuario;
  inicio:Boolean=true;
  constructor(private route : Router, private ps : PacienteService, private ms:MedicoService) { 
  }

  ngOnInit(): void {
    if(this.inicio){
      this.getPacientes();
      this.getMedicos();
      this.pacienteStored = JSON.parse(localStorage.getItem('usuario')!);
      this.inicio=false;
    }
  }

  public getPacientes(){
    this.ps.getAll().subscribe(data =>{
      this.pacientes=data;
      });
  }

  public getMedicos(){
    this.ms.getAll().subscribe(data=>{
      this.medicos=data;
    }
    );
  }

  anyadirMedico(id:number){
    this.ps.addMedico(id, this.medicoSelected.id).subscribe(data=> {
        alert(data);
        this.getPacientes();
      });
  }

  sonIguales(id:number):Boolean{
    if(this.pacienteStored.id == id){
      return true;
    }else{
      return false;
    }
  }

  public deletePaciente(id:number){
    if(this.sonIguales(id)){
      var que:Boolean = window.confirm("Está a punto de eliminarse a sí mismo. ¿Desea continuar?");
      if(que){
        this.ps.delete(id).subscribe(data => {
          //alert(data);
          this.getPacientes();
        });
        alert("se va a cerrar la sesión");
        localStorage.clear();
        this.route.navigate(['']);
      }else{
        this.route.navigate(['./lista-pacientes']);
      }
    }else{
      this.ps.delete(id).subscribe(data => {
        alert(data);
        this.getPacientes();
      });
    }

  }

 

}

