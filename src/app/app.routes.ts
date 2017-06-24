import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { HorarioComponent } from './components/horario/horario.component';


const APP_ROUTES: Routes = [
  { path: 'disponibilidad', component: DisponibilidadComponent },
  { path: 'horario', component: HorarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
