import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private route : Router) { }



  goToMedico(){
    this.route.navigate(['/registro-medico']);
  }

  goToHome(){
    this.route.navigate(['/login']);
  }

  goToPaciente(){
    this.route.navigate(['/registro-paciente']);
  }

  ngOnInit(): void {
  }

}
