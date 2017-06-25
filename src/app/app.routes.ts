import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { HorarioComponent } from './components/horario/horario.component';
import { SalasComponent } from './components/salas/salas.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';


const APP_ROUTES: Routes = [
  { path: 'disponibilidad', component: DisponibilidadComponent },
  { path: 'horario', component: HorarioComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
