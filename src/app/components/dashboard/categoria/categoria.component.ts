import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {
  categorias:any[] = [];
  formularioCategoria;
  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
     this.inicializar();
  }

  public inicializar() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
  }

  borrarCategoria(idCategoria:any) {
    this.categoriaService.deleteCategoria(idCategoria)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }

  //CARGAR
  public cargarCategoria(idCategoria:any){
    console.log("Se la categoria " + idCategoria);
    this.categoriaService.getCategoria(idCategoria);
  }

}
