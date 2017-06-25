import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTES
import { AppComponent } from './app.component';
import { HorarioComponent } from './components/horario/horario.component';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SalasComponent } from './components/salas/salas.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

//SERVICIOS

@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    DisponibilidadComponent,
    NavbarComponent,
    SalasComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
