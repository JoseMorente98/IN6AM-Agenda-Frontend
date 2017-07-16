import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../../services/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './editCategoria.component.html'
})
export class EditCategoriaComponent implements OnInit {

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {

  }

}
