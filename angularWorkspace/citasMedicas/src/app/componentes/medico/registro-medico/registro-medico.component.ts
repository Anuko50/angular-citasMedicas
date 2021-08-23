import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/modelo/Medico';
import { MedicoService } from 'src/app/servicios/medico.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.component.html',
  styleUrls: ['./registro-medico.component.css']
})
export class RegistroMedicoComponent implements OnInit {

  medico:Medico = new Medico;

  constructor(private route : Router, private sm:MedicoService, private us:UsuarioService) { }

  goBack(){
    this.route.navigate(['/registro']);
  }

  goToInicio(){
    this.sm.create(this.medico).subscribe(data=> {
      //this.us.setUsuario(<Usuario>this.medico);
      localStorage.setItem('usuario', JSON.stringify(this.medico));
      alert("Bienvenido");
      this.route.navigate(['/inicio']);
    });
    
  }

  ngOnInit(): void {
  }

}
