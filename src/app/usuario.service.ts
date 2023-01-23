import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient) {

  }

  iniciarSesion(correo_usuario:string, contrasenia_usuario:string){
    return this.http.get('http://44.202.153.93:8080/api/usuario/inicio_sesion/'+correo_usuario+"&"+ contrasenia_usuario, this.httpOptions);
  }

}
