import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe();
  }

}
