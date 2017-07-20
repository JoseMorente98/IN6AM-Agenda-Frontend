import { ContactoService } from '../../../../../services/contacto.service';
import { CategoriaService } from '../../../../../services/categoria.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './editContacto.component.html'
})
export class EditContactoComponent implements OnInit {
  categorias: any[] = [];
  formularioContacto:FormGroup;
  uriContacto:string;
  contacto:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  //Constructor
  constructor(
  private contactoService:ContactoService,
  private router:Router,
  private categoriaService:CategoriaService,
  private activatedRoute:ActivatedRoute
  ) { 
    let validaciones = [
      Validators.required, Validators.minLength(50)
    ];

  //EDITAR
  this.activatedRoute.params.subscribe(params => {
      this.uriContacto = params["idContacto"];
        this.contactoService.getContacto(params["idContacto"])
        .subscribe(contacto => {
          this.contacto = contacto;
          this.formularioContacto = new FormGroup({
            'idContacto': new FormControl(this.contacto.idContacto, validaciones),
            'nombre': new FormControl(this.contacto.nombre, validaciones),
            'apellido': new FormControl(this.contacto.apellido, validaciones),
            'direccion': new FormControl(this.contacto.direccion, validaciones),
            'telefono': new FormControl(this.contacto.telefono, validaciones),
            'idCategoria': new FormControl(this.contacto.idCategoria,  Validators.required),
          });
        });
    });
  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
  }

  public guardarCambios() {
    console.log("Modificacion de contacto");
    this.contactoService.editContacto(this.formularioContacto.value, this.uriContacto)
    .subscribe(res => {
      console.log(res);
    });
  }

}
