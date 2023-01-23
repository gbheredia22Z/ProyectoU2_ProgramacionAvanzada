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
    this.http.get<any[]>('http://44.202.153.93:8080/api/estudiante/comprobante/').subscribe(data => {
      this.datos = data;
    });
    console.log(this.datos);
  }
  ngOnInit(): void {
  }

  enviar(_id: string, estado_comprobante: string){
    this.estudianteService.updateEstadoComprobante(_id, estado_comprobante).subscribe(res=>{
      location.reload();
    },
    (err) => console.log(err)
    );
  }

  navegar(){
    this.router.navigate(['/comprobantes-aceptados']);
  }
}
