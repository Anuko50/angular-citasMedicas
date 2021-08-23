import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../modelo/Medico';
var headers = new HttpHeaders();
headers.append('Access-Control-Allow-Origin',' *');

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private pacientes ?:Medico[];
  public paciente ?: Medico
  private url="https://localhost:44372/api/Medico"

  constructor(private http: HttpClient) { }
 
  getById(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id.toString())
  }

  public getAll():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.url);
  }

  
  public create(medico:Medico):Observable<any>{
    return this.http.post<Medico>(this.url,medico);
  }

  /*
    TODO:
  */
  public addDiagnostico(idCita:number, idDiagnostico:number){}

  public addPaciente(id:number, idPaciente:number):Observable<any>{
    //https://localhost:44372/api/Medico/123?idPaciente=2
    return this.http.put(this.url+"/"+id.toString()+"?idPaciente="+idPaciente.toString(), "",
                        { headers, responseType: 'text'})
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id.toString(), 
                        { headers, responseType: 'text'});
  }
}

