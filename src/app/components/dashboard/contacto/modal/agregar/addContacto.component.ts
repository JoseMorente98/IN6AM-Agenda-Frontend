import { ContactoService } from '../../../../../services/contacto.service';
import { CategoriaService } from '../../../../../services/categoria.service';
import { ContactoComponent } from '../../../../../components/dashboard/contacto/contacto.component';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './addContacto.component.html'
})
export class AddContactoComponent implements OnInit {
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
  private activatedRoute:ActivatedRoute,
  private contactoComponent:ContactoComponent
  ) { 
    let validaciones = [
      Validators.required, Validators.minLength(50)
    ];

    //AGREGAR
    this.activatedRoute.params.subscribe(params => {
      this.formularioContacto = new FormGroup({
        'nombre': new FormControl('', validaciones),
        'apellido': new FormControl('', validaciones),
        'telefono': new FormControl('', validaciones),
        'correo': new FormControl('', validaciones),
        'idCategoria': new FormControl('', Validators.required)
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
      console.log("Nuevo Contacto");
      console.log(this.formularioContacto.value);
      this.contactoService.newContacto(this.formularioContacto.value)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
        }
      });
  }

}