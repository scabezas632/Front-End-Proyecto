import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { CsvService } from "angular2-json2csv";

//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

//Profesores
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorComponent } from './components/profesores/profesor.component';

//SERVICIOS
import { ProfesoresService } from './services/profesores.service';
import { SalasService } from './services/salas.service';
import { DisponibilidadService } from './services/disponibilidad.service';
import { GenerarService } from './services/generar.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


import { SecureComponent } from './secure/secure.component'
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { CommonModule } from '@angular/common';

//PIPES
import { KeysPipe } from './pipes/keys.pipe';
import { GenerarHorarioComponent } from './components/generar-horario/generar-horario.component';
import { CargarComponent } from './components/cargar/cargar.component';
import { SalasComponent } from './components/salas/salas.component';

// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
//   { path: 'secure', component: SecureComponent, canActivate: [AuthGuardService]},
//   { path: 'login', component: LoginComponent},
//   { path: '**', component: LoginComponent}
// ];

/*export const routes: RouterConfig = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent}
];*/

/*export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
      tokenGetter: (() => localStorage.getItem('token')) })
      , http, options);
}*/

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent,
    ProfesoresComponent,
    ProfesorComponent,
    KeysPipe,
    NavbarComponent,
    GenerarHorarioComponent,
    CargarComponent,
    SalasComponent
  ],
  imports: [
    // RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProfesoresService,
    SalasService,
    DisponibilidadService,
    GenerarService,
    CsvService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http,RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
