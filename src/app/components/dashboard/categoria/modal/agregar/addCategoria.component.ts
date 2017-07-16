import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../../services/categoria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './addCategoria.component.html'
})
export class AddCategoriaComponent implements OnInit {
  formularioCategoria:FormGroup;
  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.formularioCategoria = new FormGroup({
      'nombre': new FormControl('', Validators.required)
    });
  }

  //ADD CATEGORIA
  public agregarCategoria() {
    console.log(this.formularioCategoria.value);
    this.categoriaService.addCategoria(this.formularioCategoria.value);
    location.reload(true);
  }

}
