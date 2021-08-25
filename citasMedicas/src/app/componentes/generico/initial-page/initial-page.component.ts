import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  userActual: Usuario = new Usuario;
  constructor(private route : Router, public us : UsuarioService) { 
    //this.userActual = this.us.getUsuario();
  }

  ngOnInit(): void {
    this.userActual = JSON.parse(localStorage.getItem('usuario')!);
    console.log(this.userActual);
  }

}
