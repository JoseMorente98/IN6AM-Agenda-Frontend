import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styles: []
})
export class TareaComponent implements OnInit {
  tareas:any[] = [];
  constructor(private tareaService:TareaService) { }


  public inicializar() {
    this.tareaService.getTareas().subscribe(data => {
      this.tareas = data;
      console.log(this.tareas);
    });
  }

  ngOnInit() {
    this.inicializar();
  }

  eliminarTarea(idTarea:any) {
    this.tareaService.deleteTarea(idTarea)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }

}
