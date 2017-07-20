import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTES
import { app_routing } from './app.routes';

//SERVICES
import { UsuarioService } from './services/usuario.service';
import { CategoriaService } from './services/categoria.service';
import { ContactoService } from './services/contacto.service';
import { TareaService } from './services/tarea.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HistorialService } from './services/historial.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { SignupComponent } from './components/signup/signup.component';

//COMPONENTES CATEGORIA
import { CategoriaComponent } from './components/dashboard/categoria/categoria.component';
import { AddCategoriaComponent } from './components/dashboard/categoria/modal/agregar/addCategoria.component';
import { EditCategoriaComponent } from './components/dashboard/categoria/modal/editar/editCategoria.component';

//COMPONENTES TAREAS
import { TareaComponent } from './components/dashboard/tarea/tarea.component';
import { AddTareaComponent } from './components/dashboard/tarea/modal/agregar/addTarea.component';
import { EditTareaComponent } from './components/dashboard/tarea/modal/editar/editTarea.component';

//COMPONENTES USUARIOS
import { ContactoComponent } from './components/dashboard/contacto/contacto.component';
import { FormContactoComponent } from './components/dashboard/contacto/formContacto.component';

//IMPORTAR HISTORIAL
import { HistorialComponent } from './components/dashboard/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    ContactoComponent,
    CategoriaComponent,
    TareaComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    AddCategoriaComponent,
    EditCategoriaComponent,
    AddTareaComponent,
    EditTareaComponent,
    FormContactoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [
    UsuarioService,
    CategoriaService,
    ContactoService,
    TareaService,
    AuthGuardService,
    HistorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
