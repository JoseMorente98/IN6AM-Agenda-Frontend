import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})

export class SignupComponent implements OnInit {
  formularioSignUp:FormGroup;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }
  constructor(
   private usuarioService:UsuarioService,
   private router:Router) { }

  ngOnInit() {
    this.formularioSignUp = new FormGroup({
      'nick': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required)
    });
  }

  public iniciarSesion() {
    console.log(this.formularioSignUp.value);
  }

  public registrar() {
    this.usuarioService.registrar(this.formularioSignUp.value)
    .subscribe(res => {
      if(res.estado) {
        this.notificacion.estado = res.estado;
        this.notificacion.mensaje = res.mensaje
        this.formularioSignUp.reset();

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      }
    });
  }
}
