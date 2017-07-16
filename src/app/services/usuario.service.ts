import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//Inyectable
@Injectable()
export class UsuarioService {
  usuarioUri = "http://localhost:3000/api/usuarios";
  usuarios:any[];

  //Constructor
  constructor(
    private http:Http,
    private router:Router
  ) {}

  //Metodo para Autentias el usuario
  public autenticar(usuario:any) {
    let uriUsuario:string = "http://localhost:3000/auth/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsIm5pY2siOiJASkh1ZXJ0YXMiLCJjb250cmFzZW5hIjoiMTIzNCIsImlhdCI6MTQ5OTk2NzgwMCwiZXhwIjoxNDk5OTcxNDAwfQ.r_8l_8Is_oxopIQWamCLGm5iJL2UfXcOaimRkYO9bWM');

    let options = new RequestOptions({headers : headers});
    let data = JSON.stringify(usuario);

    this.http.post(uriUsuario, data, options)
    .subscribe(res => {
      console.log(res.json());
      let token = res.json().token;
      if(token) {
        console.log("Si existe el token");
        localStorage.setItem('token', token);
        //localStorage.setItem('idUsuario', res.json().USUARIO.idUsuario);
        this.router.navigate(['/dashboard/usuario']);
      } else {
        console.log("No existen token");
        return false;
      }
    }, error => {
      console.log(error.text());
    })

  }

  //Metodo para Verificar Usuario y Disponibilidad de Token
  public verificarUsuario():boolean {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  public getUsuarios() {
    return this.http.get(this.usuarioUri)
    .map(res => {
      this.usuarios = res.json();
      console.log(this.usuarios);
    });
  }
}
