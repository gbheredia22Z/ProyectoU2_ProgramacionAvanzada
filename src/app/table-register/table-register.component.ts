import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../model/Estudiante';
@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss']
})
export class TableRegisterComponent implements OnInit {

  datos: any[] = [];
  estudiante:  any[] = [];
  constructor(private http: HttpClient, private estudianteService: EstudianteService, private router: Router) {
    this.http.get<any[]>('http://52.91.172.28:8080/api/estudiante/').subscribe(data => {
      this.datos = data;
    });
    console.log(this.datos);
  }
  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/registro-comprobante']);
  }

  navegar_aceptados(){
    this.router.navigate(['/inscripciones-aceptadas']);
  }

  async enviar(_id: string, estado_comprobante: string, correo:string){
    this.estudianteService.actualizarAtributosEstudiante(_id, estado_comprobante).subscribe(res=>{
      if(estado_comprobante == 'APROBADO'){
          const to = ""+correo+"";
          const subject = "Aprobación de registro";
          const message = "Su solicitud a sido aprobada, continue con el proceso enviando el comprobante de pago accediendo al siguiente enlace: http://localhost:4200/registro-comprobante";

          this.estudianteService.enviarcorreo(to, subject, message).subscribe(
            res=>{
              location.reload();
            },(err) => console.log(err)
          );
      }else{
        const to = ""+correo+"";
        const subject = "Rechazo de registro";
        const message = "Su registro a sido rechazado";

        this.estudianteService.enviarcorreo(to, subject, message).subscribe(
          res=>{
            location.reload();
          },(err) => console.log(err)
        );
      }
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
    (err) => console.log(err)
    );
  }

}