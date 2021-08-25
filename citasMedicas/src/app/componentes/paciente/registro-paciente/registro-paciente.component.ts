import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/modelo/Paciente';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {

  paciente:Paciente= new Paciente;
  constructor(private route : Router, private ps:PacienteService, private us:UsuarioService) { }

  goBack(){
    this.route.navigate(['/registro']);
  }

  goToInicio(){
    this.ps.create(this.paciente).subscribe(data => {
      localStorage.setItem('usuario', JSON.stringify(data));
      alert("Bienvenido");
      this.route.navigate(['/inicio']);
    });
    
  }

  ngOnInit(): void {
  }

}
