import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

//Inyectable
@Injectable() 
export class TareaService{
    uriTarea = "http://localhost:3000/api/tareas";
    tareas:any[];

    //Constructor
    constructor(private _http: Http, private _router: Router){
    }

    //Obtener Tareas
    getTareas() {
        return this._http.get(this.uriTarea)
        .map(res => {
            this.tareas = res.json();
        });
    }

    //Agregar Tareas
    public addTareas(tarea: any) {
    let tareaUri:string = "http://localhost:3000/api/tareas/";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers: headers});
    let data = JSON.stringify(tarea);

    this._http.post(tareaUri, data, options)
      .subscribe(res => {
        console.log(res.json());
        this._router.navigate(['dashboard/tareas']);
      }, error => {
        console.log(error.text());
      });
  }

  //Eliminar tarea
    public deleteTarea(idTarea:  any){
    let uriEliminarTarea :string = "http://localhost:3000/api/tareas/" + idTarea;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers})
    this._http.delete(uriEliminarTarea, options)
      .subscribe(res => {
        console.log(res.json());
        this._router.navigate(['dashboard']);
      }, error => {
        console.log(error.text());
      });
  }
}