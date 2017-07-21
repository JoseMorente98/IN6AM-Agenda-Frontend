import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

//Inyectable
@Injectable() 
export class TareaService{
    tareas:any[];

    //Constructor
    constructor(private _http: Http, private _router: Router){
    }

    //Obtener Tareas
    public getTareas() {
      let uriTarea = "http://localhost:3000/api/tareas";
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });
      let options = new RequestOptions({ headers: headers});
      return this._http.get(uriTarea, options)
      .map(res => res.json());
    }

    //Obtener Tarea
    public getTarea(idTarea:number) {
      let uriTarea = "http://localhost:3000/api/tareas/" + idTarea;
      let headers = new Headers({
        'Authorization': localStorage.getItem('token')
      });

      let options = new RequestOptions({ headers: headers});
      return this._http.get(uriTarea, options)
      .map(res => {
        console.log(res.json());
        return res.json();
      });
    }

    //Agregar Tareas
    public newtarea(tarea:any) {
      let uriTarea = "http://localhost:3000/api/tareas/";
      let data = JSON.stringify(tarea);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.post(uriTarea, data, { headers })
      .map(res => {
        return res.json();
      });
    }

    //Editar Contacto
    public editTarea(tarea:any, idTarea:any) {
      let uriTarea = "http://localhost:3000/api/tareas/" + idTarea;
      let data = JSON.stringify(tarea);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this._http.put(uriTarea, data, { headers })
      .map(res => {
        return res.json();
      });
    }

    
  //ELIMINAR
  public deleteTarea(idTarea:any) {
    let uriTarea = "http://localhost:3000/api/tareas/" + idTarea;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    return this._http.delete(uriTarea, options)
    .map(res => {
      return res.json();
    });
  }
}