import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router:Router, private usuarioService:UsuarioService ) { }

  login() {
    const decoder = new TextDecoder();
    console.log(this.email);
    console.log(this.password);
    this.usuarioService.iniciarSesion(this.email, this.password).subscribe(res=>{
      if(res == true){
        this.navegar();
      }else{
        alert('Usuario y/o contraseña incorrectos');
      }
    },
    (err) => console.log(err)
    );
  }
  navegar(){
    this.router.navigate(['/Registro'])
  }


  ngOnInit(): void {
  }


}
