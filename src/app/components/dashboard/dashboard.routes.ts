import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { TareaComponent } from './tarea/tarea.component';

export const dashboard_routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'tareas', component: TareaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario'}
];
