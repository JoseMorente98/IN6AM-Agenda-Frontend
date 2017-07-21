import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable() 
export class CategoriaService{
    categorias:any[];

    //Constructor
    constructor(private _http: Http, private _router: Router){
    }

    //Obtener categorias
    public getCategorias() {
      let uriCategoria = "http://localhost:3000/api/categorias";
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });
      let options = new RequestOptions({ headers: headers});
      return this._http.get(uriCategoria, options)
      .map(res => res.json());
    }

    //Obtener Tarea
    public getCategoria(idCategoria:number) {
      let uriCategoria = "http://localhost:3000/api/categorias/" + idCategoria;
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });

      let options = new RequestOptions({ headers: headers});
      return this._http.get(uriCategoria, options)
      .map(res => {
        console.log(res.json());
        return res.json();
      });
    }

    //Agregar categorias
    public newCategoria(categoria:any) {
      let uriCategoria = "http://localhost:3000/api/categorias/";
      let data = JSON.stringify(categoria);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.post(uriCategoria, data, { headers })
      .map(res => {
        return res.json();
      });
    }

    //Editar Contacto
    public editCategoria(categoria:any, idCategoria:any) {
      let uriCategoria = "http://localhost:3000/api/categorias/" + idCategoria;
      let data = JSON.stringify(categoria);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.put(uriCategoria, data, { headers })
      .map(res => {
        return res.json();
      });
    }

    
  //ELIMINAR
  public deleteCategoria(idCategoria:any) {
    let uriCategoria = "http://localhost:3000/api/categorias/" + idCategoria;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    return this._http.delete(uriCategoria, options)
    .map(res => {
      return res.json();
    });
  }
  
}