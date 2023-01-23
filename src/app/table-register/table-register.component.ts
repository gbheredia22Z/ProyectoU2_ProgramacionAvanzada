import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss']
})
export class TableRegisterComponent implements OnInit {

  datos: any[] = [];
  constructor(private http: HttpClient, private estudianteService: EstudianteService, private router: Router) {
    this.http.get<any[]>('http://44.202.153.93:8080/api/estudiante/').subscribe(data => {
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

  enviar(_id: string, estado_comprobante: string){
    this.estudianteService.actualizarAtributosEstudiante(_id, estado_comprobante).subscribe(res=>{
      location.reload();
    },
    (err) => console.log(err)
    );
  }

}
