import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from '../modelo/Diagnostico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var headers = new HttpHeaders();
headers.append('Access-Control-Allow-Origin',' *');

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  private url :string ="https://localhost:44372/api/Diagnostico";

  constructor(private http:HttpClient) { }

  public getById(id:number):Observable<Diagnostico>{
    //https://localhost:44372/api/Diagnostico/5
    return this.http.get<Diagnostico>(this.url+"/"+id.toString());
  }

  public getAll():Observable<Diagnostico[]>{
    return this.http.get<Diagnostico[]>(this.url);
  }

  public create(diagnostico:Diagnostico):Observable<any>{
    return this.http.post(this.url,diagnostico, {headers, responseType: 'text'});
  }

  public delete(id:number):Observable<any>{
    //https://localhost:44372/api/Diagnostico/13
    return this.http.delete(this.url+"/"+id.toString(), 
                        { headers, responseType: 'text'});
  }
}
