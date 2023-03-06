import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EstudianteService } from '../estudiante.service';
@Component({
  selector: 'app-table-comprobant',
  templateUrl: './table-comprobant.component.html',
  styleUrls: ['./table-comprobant.component.scss']
})
export class TableComprobantComponent implements OnInit {
  datos: any[] = [];
  constructor(private http: HttpClient, private estudianteService: EstudianteService,  private router: Router) {
    this.http.get<any[]>('http://52.91.172.28:8080/api/estudiante/comprobante/').subscribe(data => {
      this.datos = data;
    });
    console.log(this.datos);
  }
  ngOnInit(): void {
  }

  enviar(_id: string, estado_comprobante: string, correo: string){
    this.estudianteService.updateEstadoComprobante(_id, estado_comprobante).subscribe(res=>{
      if(estado_comprobante == 'APROBADO'){
        const to = ""+correo+"";
        const subject = "Aprobación de comprobante";
        const message = "Su comprobante a sido aceptado, gracias por confiar en nosotros";

        this.estudianteService.enviarcorreo(to, subject, message).subscribe(
          res=>{
            location.reload();
          },(err) => console.log(err)
        );
      }else{
        const to = ""+correo+"";
        const subject = "Rechazo de comprobante";
        const message = "Su comprobante a sido rechazado";

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

  navegar(){
    this.router.navigate(['/comprobantes-aceptados']);
  }
}
