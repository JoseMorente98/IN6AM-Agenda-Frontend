import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../../../services/contacto.service';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './editContacto.component.html'
})
export class EditContactoComponent implements OnInit {

  constructor(private contactoService:ContactoService) { }

  ngOnInit() {

  }

}
