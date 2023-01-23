import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-comprobantes-aceptadas',
  templateUrl: './comprobantes-aceptadas.component.html',
  styleUrls: ['./comprobantes-aceptadas.component.scss']
})
export class ComprobantesAceptadasComponent implements OnInit {
  datos: any[] = [];
  constructor(private http: HttpClient, private estudianteService: EstudianteService) {
    this.http.get<any[]>('http://44.202.153.93:8080/api/estudiante/comprobante-aceptados/').subscribe(data => {
      this.datos = data;
    });
    console.log(this.datos);
  }
  ngOnInit(): void {
  }
}
