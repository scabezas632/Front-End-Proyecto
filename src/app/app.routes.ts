import { RouterModule, Routes } from '@angular/router';

import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorComponent } from './components/profesores/profesor.component';

import { SalasComponent } from './components/salas/salas.component';
import { SalaComponent } from './components/salas/sala.component';



const APP_ROUTES: Routes = [
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'profesor/:id', component: ProfesorComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'sala/:id', component: SalaComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
