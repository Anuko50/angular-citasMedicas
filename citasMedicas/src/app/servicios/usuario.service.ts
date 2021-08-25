import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario';
var headers = new HttpHeaders();
headers.append('Access-Control-Allow-Origin',' *');



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private users ?:Usuario[];
  public usuario: Usuario=new Usuario;
  private url="https://localhost:44372/api/Usuario";

  constructor(private http: HttpClient) { }
  
  public setUsuario(u:Usuario){
      this.usuario=u;
  }

  public getUsuario(){
    return this.usuario;
  }

  //post/login
  login(username:string, clave:string):Observable<string>{
    //https://localhost:44372/api/Usuario/login?user=string&clave=111
    return this.http.post(this.url+"/login?user="+username+"&clave="+clave
                          ,"", {headers, responseType: 'text'});
  }
 
  getById(id:number):Observable<any>{
    //https://localhost:44372/api/Usuario/10
    return this.http.get(this.url+"/"+id.toString())
  }

  public getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id.toString(), 
                        { headers, responseType: 'text'});
  }
}
