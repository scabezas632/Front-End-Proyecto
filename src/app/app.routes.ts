import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';


import { HorarioComponent } from './components/horario/horario.component';

import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorComponent } from './components/profesores/profesor.component';

import { SalasComponent } from './components/salas/salas.component';
import { SalaComponent } from './components/salas/sala.component';



const APP_ROUTES: Routes = [
  { path: 'disponibilidad', component: DisponibilidadComponent },
  { path: 'horario', component: HorarioComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'profesor/:id', component: ProfesorComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'sala/:id', component: SalaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
