import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable() 
export class ContactoService{
    contactos:any[];

    //Constructor
    constructor(private _http: Http, private _router: Router){
    }

    //Obtener Contactos
    public getContactos() {
      let uriContacto = "http://localhost:3000/api/contactos";
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });
      let options = new RequestOptions({ headers: headers});
      return this._http.get(uriContacto, options)
      .map(res => res.json());
    }

    //Obtener Contacto
    public getContacto(idContacto:number) {
      let uri = "http://localhost:3000/api/contactos/" + idContacto;
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });

      let options = new RequestOptions({ headers: headers});
      return this._http.get(uri, options)
      .map(res => {
        console.log(res.json());
        return res.json();
      });
    }

    //Agregar Contactos
    public newContacto(contacto:any) {
      let uriContacto = "http://localhost:3000/api/contactos/";
      let data = JSON.stringify(contacto);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.post(uriContacto, data, { headers })
      .map(res => {
        return res.json();
      });
    }

    //Editar Contacto
    public editContacto(contacto:any, idContacto:any) {
      let uriContacto = "http://localhost:3000/api/contactos/" + idContacto;
      let data = JSON.stringify(contacto);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.put(uriContacto, data, { headers })
      .map(res => {
        return res.json();
      });
    }

    //ELIMINAR
    public eliminarContacto(idContacto:any) {
    let uri = "http://localhost:3000/api/contactos/" + idContacto;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    return this._http.delete(uri, options)
    .map(res => {
      return res.json();
    });
  }

}