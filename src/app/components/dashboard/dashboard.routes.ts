import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormContactoComponent } from './contacto/formContacto.component';
import { FormTareaComponent } from './tarea/formTarea.component';
import { FormCategoriaComponent } from './categoria/formCategoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { TareaComponent } from './tarea/tarea.component';
import { HistorialComponent } from './historial/historial.component';

export const dashboard_routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:idContacto', component: FormContactoComponent },
  { path: 'tareas/:idTarea', component: FormTareaComponent },
  { path: 'categoria/:idCategoria', component: FormCategoriaComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'tareas', component: TareaComponent },
  { path: 'historial', component: HistorialComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario'}
];
