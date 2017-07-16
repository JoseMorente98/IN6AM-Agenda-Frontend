import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  //Constructor
  constructor(
    private router:Router,
    private usuarioService:UsuarioService
  ) {  }

  //Si el Usuario esta logeado puede pasar al dashboard de lo contrario no
  canActivate() {
    if(this.usuarioService.verificarUsuario()) {
      console.log("Paso el GUARD");
      return true;
    } else {
      console.log("Bloqueado por el GUARD");
      return false;
    }
  }
}
