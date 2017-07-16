import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable() 
export class ContactoService{
    uriContacto = "http://localhost:3000/api/contactos";
    contactos:any[];

    //Constructor
    constructor(private _http: Http, private _router: Router){
    }

    //Obtener Contactos
    getContactos() {
        return this._http.get(this.uriContacto)
        .map(res => {
            this.contactos = res.json();
        });
    }

    //Agregar Contactos
    public addContactos(tarea: any) {
    let contactosUri:string = "http://localhost:3000/api/contactos/";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers: headers});
    let data = JSON.stringify(tarea);

    this._http.post(contactosUri, data, options)
      .subscribe(res => {
        console.log(res.json());
        this._router.navigate(['dashboard/contactos']);
      }, error => {
        console.log(error.text());
      });
  }
}