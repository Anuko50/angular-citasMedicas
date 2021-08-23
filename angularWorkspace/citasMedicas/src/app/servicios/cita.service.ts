import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../modelo/Cita';
var headers = new HttpHeaders();
headers.append('Access-Control-Allow-Origin',' *');

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private citas ?:Cita[];
  private url="https://localhost:44372/api/Cita"

  constructor(private http: HttpClient) { }

  getById(id:number):Observable<any>{
    //https://localhost:44372/api/Usuario/10
    return this.http.get(this.url+"/"+id.toString());
  }

  public getAll():Observable<Cita[]>{
    return this.http.get<Cita[]>(this.url);
  }

  public addDiagnostico(idCita:number, idDiagnostico:number):Observable<any>{
    //https://localhost:44372/api/Cita/fw?idCita=21&idDiagnostico=32
    return this.http.put(this.url+"/"+idCita.toString()+"?idCita="+idCita.toString()
                          +"&idDiagnostico="+idDiagnostico.toString(), 
                        { headers, responseType: 'text'});

  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id.toString(), 
                        { headers, responseType: 'text'});
  }

  public create(cita:Cita, idMedico:number, idPaciente:number):Observable<any>{
    //https://localhost:44372/api/Cita?idMedico=1&idPaciente=1
    return this.http.post(this.url+"?idMedico="+idMedico.toString()+"&idPaciente="+idPaciente.toString(),cita,
     { headers, responseType: 'text'});
  }
}
