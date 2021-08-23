import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../modelo/Paciente';
var headers = new HttpHeaders();
headers.append('Access-Control-Allow-Origin',' *');

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes :Paciente[] = [];
  public paciente:Paciente = new Paciente;
  private url="https://localhost:44372/api/Paciente"

  constructor(private http: HttpClient) { }
 
  getById(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id.toString())
  }

  public getAll():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url);
  }

  public create(paciente:Paciente):Observable<any>{
    return this.http.post<Paciente>(this.url,paciente);
  }

  public addMedico(id:number, idMedico:number):Observable<any>{
    //https://localhost:44372/api/Paciente/0?idMedico=0
    return this.http.put(this.url+"/"+id.toString()+"?idMedico="+idMedico.toString(), "",
                        { headers, responseType: 'text'})
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id.toString(), 
                        { headers, responseType: 'text'});
  }
}

