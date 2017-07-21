import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea-form',
  templateUrl: 'formTarea.component.html',
})
export class FormTareaComponent implements OnInit {
  formularioTarea:FormGroup;
  uri:string;
  tarea:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private tareaService:TareaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(50)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idTarea"];
      if(this.uri !== "nuevo") {
        this.tareaService.getTarea(params["idTarea"])
        .subscribe(data => {
          this.tarea = data;
          this.formularioTarea = new FormGroup({
            'nombre': new FormControl(this.tarea.nombre, validaciones),
            'descripcion': new FormControl(this.tarea.descripcion, validaciones),
            'fechaEntrega': new FormControl(this.tarea.fechaEntrega, validaciones)
          });
        });
      } else {
        this.formularioTarea = new FormGroup({
          'nombre': new FormControl('', validaciones),
          'descripcion': new FormControl('', validaciones),
          'fechaEntrega': new FormControl('', validaciones)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nueva") {
      console.log("Nueva Tarea");
      console.log(this.formularioTarea.value);
      this.tareaService.newtarea(this.formularioTarea.value)
      .subscribe(res => {
        if(res.estado) {
          console.log(res.estado);
          console.log(res.mensaje);
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/tareas']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de Tarea");
      this.tareaService.editTarea(this.formularioTarea.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}