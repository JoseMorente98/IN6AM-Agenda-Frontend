import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../../../services/contacto.service';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: 'formContacto.component.html',
})
export class FormContactoComponent implements OnInit {
  categorias:any[] = [];
  formularioContacto:FormGroup;
  uri:string;
  contacto:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private contactoService:ContactoService,
    private categoriaService:CategoriaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(50)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idContacto"];
      if(this.uri !== "nuevo") {
        this.contactoService.getContacto(params["idContacto"])
        .subscribe(data => {
          this.contacto = data;
          this.formularioContacto = new FormGroup({
            'nombre': new FormControl(this.contacto.nombre, validaciones),
            'apellido': new FormControl(this.contacto.apellido, validaciones),
            'correo': new FormControl(this.contacto.correo, validaciones),
            'telefono': new FormControl(this.contacto.telefono, validaciones),
            'idCategoria': new FormControl(this.contacto.idCategoria,  Validators.required),
          });
        });
      } else {
        this.formularioContacto = new FormGroup({
          'nombre': new FormControl('', validaciones),
          'apellido': new FormControl('', validaciones),
          'correo': new FormControl('', validaciones),
          'telefono': new FormControl('', validaciones),
          'idCategoria': new FormControl('', Validators.required)
        });
      }
    });
  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
  }

  public guardarCambios() {
    if(this.uri === "nuevo") {
      console.log("Nuevo Contacto");
      console.log(this.formularioContacto.value);
      this.contactoService.newContacto(this.formularioContacto.value)
      .subscribe(res => {
        if(res.estado) {
          console.log(res.estado);
          console.log(res.mensaje);
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/contacto']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de contacto");
      this.contactoService.editContacto(this.formularioContacto.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}