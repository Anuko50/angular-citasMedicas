import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelo/Cita';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.css']
})
export class ModificarCitaComponent implements OnInit {
  fecha:string="";
  motivoCita:string="";
  citaVieja:Cita = new Cita;
  citaNueva:Cita = new Cita;
  constructor(private route : Router, private cs: CitaService) { }

  ngOnInit(): void {
    this.citaVieja = JSON.parse(localStorage.getItem('cita-a-modificar')!);
    console.log(this.citaVieja);
  }

  public modificar(){
    
    var fechaFinal:string;
    var motivoFinal:string; 

    if(this.fecha==""){
      if(this.motivoCita==""){ //ambos son vacíos
        console.log("ambos son vacios");
        alert("Debe introducirse algún dato para actualizar");
        return;
      }else{ //la fecha está vacía pero el motivo de la cita no:
        console.log("la fecha está vacía pero el motivo de la cita no");
        fechaFinal = this.citaVieja.fechaHora !;
        motivoFinal = this.motivoCita;
      }
    }else if(this.motivoCita==""){ //fecha no vacía pero motivo sí
      console.log("fecha no vacía pero motivo sí");
        fechaFinal = this.fecha;
        motivoFinal = this.citaVieja.motivoCita!;
    }else{ // los dos llenos
      console.log("los dos llenos");
      fechaFinal = this.fecha;
      motivoFinal = this.motivoCita;
    }
    fechaFinal=  fechaFinal.substring(0,10)+" "+fechaFinal.substring(11);

    this.citaNueva = this.citaVieja;
    this.citaNueva.fechaHora = fechaFinal;
    this.citaNueva.motivoCita  = motivoFinal;
    console.log(this.citaNueva);
    this.cs.updateCita(this.citaNueva).subscribe(data=>{
      //console.log(data);
    });
    alert("La cita ya ha sido modificada");
    localStorage.removeItem('cita-a-modificar');
    this.route.navigate(['./lista-citas']);

  }

}
