import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
     this.categoriaService.getCategorias().subscribe();
  }

  //ELIMINAR
  public eliminarCategoria(idCategoria:any){
    console.log("Se eliminó la " + idCategoria);
    this.categoriaService.deleteCategoria(idCategoria);
    location.reload(true);
  }

}
