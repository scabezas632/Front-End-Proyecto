import { RouterModule, Routes } from '@angular/router';

import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorComponent } from './components/profesores/profesor.component';

import { SalasComponent } from './components/salas/salas.component';

import { GenerarHorarioComponent } from './components/generar-horario/generar-horario.component';
import { CargarComponent } from './components/cargar/cargar.component';

import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './secure/secure.component';


import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


const APP_ROUTES: Routes = [
  { path: 'profesores', component: ProfesoresComponent, canActivate: [AuthGuardService] },
  { path: 'profesor/:id', component: ProfesorComponent, canActivate: [AuthGuardService] },
  { path: 'salas', component: SalasComponent, canActivate: [AuthGuardService] },
  { path: 'salas/:id', component: SalasComponent, canActivate: [AuthGuardService] },
  { path: 'horario', component: GenerarHorarioComponent, canActivate: [AuthGuardService] },
  { path: 'cargar', component: CargarComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  // { path: '', pathMatch: 'full', redirectTo: '' }
  { path: '**', component: LoginComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
