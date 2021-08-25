import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mensajeLogin:string = "";
  usernameValor:string = "";
  claveValor:string = "";
  constructor(private route : Router, private us : UsuarioService) { }

  loggeando(){
    this.us.login(this.usernameValor, this.claveValor).subscribe(data => {
        
        this.mensajeLogin=data;
        if(this.mensajeLogin=="La clave o el usuario son incorrectos."){
          alert(this.mensajeLogin);
        }else{
          alert("Bienvenido");
          this.us.getById(parseInt(data)).subscribe(user =>{
            localStorage.setItem('usuario', JSON.stringify(user));
            this.route.navigate(['./inicio']);
          });
        }
        
    });
    
  }

  goToRegistro(){
    this.route.navigate(['/registro']);
  }
  bkcg = "../../assets/832751427db0d1154877e76dc39a0b0c.jpg"
  ngOnInit(): void {
  }

}
