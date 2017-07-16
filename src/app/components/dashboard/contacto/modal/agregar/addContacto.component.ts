import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../../../services/contacto.service';
import { CategoriaService } from '../../../../../services/categoria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './addContacto.component.html'
})
export class AddContactoComponent implements OnInit {
  formularioContacto:FormGroup;
  constructor(private contactoService:ContactoService,
  private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe();

    this.formularioContacto = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'idCategoria': new FormControl('', Validators.required),
    });
  }

  public agregarContacto() {
    console.log(this.formularioContacto.value);
    this.contactoService.addContactos(this.formularioContacto.value);
    location.reload(true);
  }

}