import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styles: []
})
export class TareaComponent implements OnInit {

  constructor(private tareaService:TareaService) { }

  ngOnInit() {
    this.tareaService.getTareas().subscribe();
  }

  //Eliminar
  public eliminarTarea(idTarea:any){
    console.log("Se eliminó la tarea " + idTarea);
    this.tareaService.deleteTarea(idTarea);
    location.reload(true);
  }

}
