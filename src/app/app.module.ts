import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTES
import { AppComponent } from './app.component';
import { HorarioComponent } from './components/horario/horario.component';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Profesores
import { ProfesoresComponent } from './components/profesores/profesores.component';

//Salas
import { SalasComponent } from './components/salas/salas.component';
import { ProfesorComponent } from './components/profesores/profesor.component';
import { SalaComponent } from './components/salas/sala.component';

//SERVICIOS
import { ProfesoresService } from './services/profesores.service';
import { SalasService } from './services/salas.service';

//PIPES
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    DisponibilidadComponent,
    NavbarComponent,
    ProfesoresComponent,
    SalasComponent,
    ProfesorComponent,
    SalaComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ProfesoresService,
    SalasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
