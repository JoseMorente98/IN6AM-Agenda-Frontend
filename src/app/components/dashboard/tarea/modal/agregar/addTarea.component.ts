import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../../../services/tarea.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './addTarea.component.html'
})
export class AddTareaComponent implements OnInit {
  formularioTarea:FormGroup;
  constructor(private tareaService:TareaService) { }

  ngOnInit() {
    this.formularioTarea = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'fechaEntrega': new FormControl('', Validators.required)
    });
  }

  public agregarTarea() {
    console.log(this.formularioTarea.value);
    this.tareaService.addTareas(this.formularioTarea.value);
    location.reload(true);
  }

}