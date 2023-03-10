import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estudiante } from './model/Estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  /*   estudiantes = this.socket.fromEvent<any[]>('estudiantes'); */

    headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    httpOptions = {
      headers: this.headers_object
    };

    constructor(private http: HttpClient
     /*  private socket:Socket */) {}



getEstudiante(_id:any){
  return this.http.get('http://52.91.172.28:8080/api/estudiante?id='+_id, this.httpOptions);
}

guardarEstudiante(estudiante:any){
  return this.http.post('http://52.91.172.28:8080/api/estudiante',{estudiante},this.httpOptions);
}

eliminarEstudiante(_id:string){
  return this.http.delete('http://52.91.172.28:8080/api/estudiante/'+_id,this.httpOptions);
}

searchEstudiante(cedula_estudiante:string){
  return this.http.post('http://52.91.172.28:8080/api/estudiante/searchCedula',{cedula_estudiante},this.httpOptions);
}
searchEmail(email_estudiante:string){
  return this.http.post('http://52.91.172.28:8080/api/estudiante/searchEmail',{email_estudiante},this.httpOptions);
}
editarEstudiante(estudiante:any){
  return this.http.patch('http://52.91.172.28:8080/api/estudiante/'+estudiante._id,{estudiante},this.httpOptions);
}

uploadComprobante(cedula:string, comprobante:string){
  return this.http.put('http://52.91.172.28:8080/api/estudiante/'+cedula,{comprobante}!,this.httpOptions);
}

getEstudiantes(){
  return this.http.get('http://52.91.172.28:8080/api/estudiante/',this.httpOptions);
}

updateEstadoComprobante(_id:string, estado_comprobante:string){
  return this.http.put('http://52.91.172.28:8080/api/estudiante/estado_comprobante/'+_id,{estado_comprobante},this.httpOptions);
}

obtenerEstudiantes(filters?: string) {
  return this.http.get<Estudiante[]>(
    `http://52.91.172.28:8080/api/estudiante?${filters}`,
    this.httpOptions
  );
}
actualizarAtributosEstudiante(_id:string, estado_inscripcion:string){
  return this.http.put('http://52.91.172.28:8080/api/estudiante/inscripcion/'+_id,{estado_inscripcion},this.httpOptions);
}

enviarcorreo(to:string, subject:string, message:string){
  const jsonString = '{"to": "'+to+'", "subject": "'+subject+'","message": "'+message+'"}';
  const body = JSON.parse(jsonString);

  console.log(body)
  return this.http.post('http://52.91.172.28:8080/send-email', body,this.httpOptions);
}

}