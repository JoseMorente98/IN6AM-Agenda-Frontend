import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable() 
export class HistorialService{
    historiales:any[];

    //Constructor
    constructor(private _http: Http, private _router: Router){
    }

    //Obtener historiales
    public getHistorial() {
      let uri = "http://localhost:3000/api/historiales";
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });
      let options = new RequestOptions({ headers: headers});
      return this._http.get(uri, options)
      .map(res => res.json());
    }

    //Agregar Contactos
    public newHistorial(historial:any) {
      let uri = "http://localhost:3000/api/historial/";
      let data = JSON.stringify(historial);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.post(uri, data, { headers })
      .map(res => {
        return res.json();
      });
    }

}