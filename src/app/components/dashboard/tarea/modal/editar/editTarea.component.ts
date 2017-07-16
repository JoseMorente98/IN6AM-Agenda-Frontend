import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../../../services/tarea.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './editTarea.component.html'
})
export class EditTareaComponent implements OnInit {

  constructor(private tareaService:TareaService) { }

  ngOnInit() {

  }

}
