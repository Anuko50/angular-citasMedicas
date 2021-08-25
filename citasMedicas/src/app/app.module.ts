import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './componentes/generico/home-page/home-page.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroPacienteComponent } from './componentes/paciente/registro-paciente/registro-paciente.component';
import { RegistroMedicoComponent } from './componentes/medico/registro-medico/registro-medico.component';
import { InitialPageComponent } from './componentes/generico/initial-page/initial-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './servicios/usuario.service';
import { NavBarComponent } from './componentes/generico/nav-bar/nav-bar.component';
import { DiagnosticoService } from './servicios/diagnostico.service';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './componentes/paciente/lista-pacientes/lista-pacientes.component';
import { ListaMedicosComponent } from './componentes/medico/lista-medicos/lista-medicos.component';
import { ListaCitasComponent } from './componentes/cita/lista-citas/lista-citas.component';
import { ListaDiagnosticosComponent } from './componentes/diagnostico/lista-diagnosticos/lista-diagnosticos.component';
import { FormDiagnosticoComponent } from './componentes/diagnostico/form-diagnostico/form-diagnostico.component';
import { PlataformaDiagnosticoComponent } from './componentes/diagnostico/plataforma-diagnostico/plataforma-diagnostico.component';
import { PlataformaCitaComponent } from './componentes/cita/plataforma-cita/plataforma-cita.component';
import { FormCitaComponent } from './componentes/cita/form-cita/form-cita.component';
import { PlataformaMedicoComponent } from './componentes/medico/plataforma-medico/plataforma-medico.component';
import { PlataformaPacienteComponent } from './componentes/paciente/plataforma-paciente/plataforma-paciente.component';
import { ModificarCitaComponent } from './componentes/cita/modificar-cita/modificar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistroComponent,
    RegistroPacienteComponent,
    RegistroMedicoComponent,
    InitialPageComponent,
    NavBarComponent,
    ListaPacientesComponent,
    ListaMedicosComponent,
    ListaCitasComponent,
    ListaDiagnosticosComponent,
    FormDiagnosticoComponent,
    PlataformaDiagnosticoComponent,
    PlataformaCitaComponent,
    FormCitaComponent,
    PlataformaMedicoComponent,
    PlataformaPacienteComponent,
    ModificarCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //aqui metemos los servicios:
  providers: [
    DiagnosticoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
