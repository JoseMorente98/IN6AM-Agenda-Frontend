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

    let options = new RequestOptions({headers : headers});
    let data = JSON.stringify(usuario);

    this.http.post(uriUsuario, data, options)
    .subscribe(res => {
      console.log(res.json());
      let token = res.json().token;
      if(token) {
        console.log("Si existe el token");
        localStorage.setItem('token', token);
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
    } else{
      this.router.navigate(['/login/']);
    }
    return false;
  }

  public registrar(usuario:any) {
    let uriUsuario:string = "http://localhost:3000/api/usuarios";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers : headers});
    let data = JSON.stringify(usuario);

    return this.http.post(uriUsuario, data, options)
    .map(res => {
      return res.json();
    }, error => {
      console.log(error.text());
    })

  }

  //Obtener categorias
    public getUsuario() {
      let uriUsuario = "http://localhost:3000/api/usuarios";
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });
      let options = new RequestOptions({ headers: headers});
      return this.http.get(uriUsuario, options)
      .map(res => res.json());
    }
}
