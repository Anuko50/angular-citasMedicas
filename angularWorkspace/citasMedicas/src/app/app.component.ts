import { Component } from '@angular/core';
import { DiagnosticoService } from './servicios/diagnostico.service';
import { UsuarioService } from './servicios/usuario.service';

//decorador:
@Component({
  selector: 'app-root',                 //selector que lo carga
  templateUrl: './app.component.html',  //plantilla que especifica el html donde se carga el componente
  styleUrls: ['./app.component.css']    //css da formato al html
})
export class AppComponent {
  //aqui puedes añadir propiedades; cosas que vas a repetir en el html.
  title = 'CITAS MEDICAS';
  creador = 'Ana García Galindo';

  //inyecto el servicio creado:
  constructor(private servicioDiagnostico:DiagnosticoService,
              private servicioUsuario:UsuarioService){}

}
