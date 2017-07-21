import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: 'formCategoria.component.html',
})
export class FormCategoriaComponent implements OnInit {
  formularioCategoria:FormGroup;
  uri:string;
  categoria:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private categoriaService:CategoriaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(50)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idCategoria"];
      if(this.uri !== "nuevo") {
        this.categoriaService.getCategoria(params["idCategoria"])
        .subscribe(data => {
          this.categoria = data;
          this.formularioCategoria = new FormGroup({
            'nombre': new FormControl(this.categoria.nombre, validaciones)
          });
        });
      } else {
        this.formularioCategoria = new FormGroup({
          'nombre': new FormControl('', validaciones)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nueva") {
      console.log("Nueva Categoria");
      console.log(this.formularioCategoria.value);
      this.categoriaService.newCategoria(this.formularioCategoria.value)
      .subscribe(res => {
        if(res.estado) {
          console.log(res.estado);
          console.log(res.mensaje);
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/categoria']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de categoria");
      this.categoriaService.editCategoria(this.formularioCategoria.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}