import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormDiagnosticoComponent } from './componentes/diagnostico/form-diagnostico/form-diagnostico.component';
import { HomePageComponent } from './componentes/generico/home-page/home-page.component';
import { InitialPageComponent } from './componentes/generico/initial-page/initial-page.component';
import { ListaDiagnosticosComponent } from './componentes/diagnostico/lista-diagnosticos/lista-diagnosticos.component';
import { PlataformaDiagnosticoComponent } from './componentes/diagnostico/plataforma-diagnostico/plataforma-diagnostico.component';
import { RegistroMedicoComponent } from './componentes/medico/registro-medico/registro-medico.component';
import { RegistroPacienteComponent } from './componentes/paciente/registro-paciente/registro-paciente.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PlataformaMedicoComponent } from './componentes/medico/plataforma-medico/plataforma-medico.component';
import { ListaMedicosComponent } from './componentes/medico/lista-medicos/lista-medicos.component';
import { PlataformaPacienteComponent } from './componentes/paciente/plataforma-paciente/plataforma-paciente.component';
import { PlataformaCitaComponent } from './componentes/cita/plataforma-cita/plataforma-cita.component';
import { ListaPacientesComponent } from './componentes/paciente/lista-pacientes/lista-pacientes.component';
import { ListaCitasComponent } from './componentes/cita/lista-citas/lista-citas.component';
import { FormCitaComponent } from './componentes/cita/form-cita/form-cita.component';
import { ModificarCitaComponent } from './componentes/cita/modificar-cita/modificar-cita.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: HomePageComponent},
  {path: 'inicio', component: InitialPageComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registro-medico', component: RegistroMedicoComponent},
  {path: 'registro-paciente', component: RegistroPacienteComponent},
  {path: 'lista-diagnosticos', component: ListaDiagnosticosComponent},
  {path: 'lista-medicos', component: ListaMedicosComponent},
  {path: 'lista-pacientes', component: ListaPacientesComponent},
  {path: 'lista-citas', component: ListaCitasComponent},
  {path: 'plataforma-medico', component: PlataformaMedicoComponent},
  {path: 'plataforma-diagnostico', component: PlataformaDiagnosticoComponent},
  {path: 'plataforma-paciente', component: PlataformaPacienteComponent},
  {path: 'plataforma-cita', component: PlataformaCitaComponent},
  {path: 'form-diagnostico', component: FormDiagnosticoComponent},
  {path: 'form-cita', component: FormCitaComponent},
  {path: 'modificar-cita', component: ModificarCitaComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
