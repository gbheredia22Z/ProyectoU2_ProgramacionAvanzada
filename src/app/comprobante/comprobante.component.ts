import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EstudianteService } from '../estudiante.service';
@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {
  cedula!: string;
  constructor(private http: HttpClient, private router:Router, private estudianteService: EstudianteService) {

    }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/comprobante'])
  }

  uploadImage(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if(reader.result !== null){
        const image = reader.result.toString();
        const cedula = this.cedula;
        console.log(cedula);

        this.estudianteService.uploadComprobante(cedula,image).subscribe(res=>{
          this.navegar();
        },
        (err) => console.log(err)
        );
      }else{
        console.log("Error al procesar la imagen")
    }
    };
  }
}
