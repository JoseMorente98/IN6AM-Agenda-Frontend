import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  constructor(private contactoService:ContactoService) { }

  ngOnInit() {
    this.contactoService.getContactos().subscribe();
    
  }

}
