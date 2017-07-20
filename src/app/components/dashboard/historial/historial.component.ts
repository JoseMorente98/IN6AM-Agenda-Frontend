import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../../services/historial.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: []
})
export class HistorialComponent implements OnInit {
  historiales:any[] = [];
  formularioCategoria;
  constructor(private historialService:HistorialService) { }

  ngOnInit() {
     this.historialService.getHistorial().subscribe(data => {
      this.historiales = data;
      console.log(this.historiales);
    });
  }

}
