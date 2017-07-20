import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalasService } from '../../../services/salas.service';
import { AuthService } from '../../../services/auth.service';
import { GenerarService } from '../../../services/generar.service';
// import { GenerarHorarioComponent } from '../../generar-horario/generar-horario.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{

  salas:any[] = [];

  constructor( private _authService:AuthService,
              private router: Router,
              private _salasServices: SalasService,
              private _generarServices: GenerarService) {
  }

  obtenerEstados(){
    if(this._generarServices.returnVariable()){
      console.log("obtenerEstados: "+true);
      //ESTA CORRIENDO UN PROCESO
      return true;
    }else{
      console.log("obtenerEstados: "+false);
      //SE DETUVO EL PROCESO
      return false;
    }
  }


  ConfirmaGenerar() {
    let mensaje = confirm("¿Está seguro que desea generar un nuevo horario?\n Esto podría tomar unos minutos");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      //Mandar a componente "generar-horario"
      this.router.navigate(['./horario']);
      //Ejecutar codigo paralelo
    }
  }


  ConfirmaCargar() {
    let mensaje = confirm("¿Está seguro que desea cargar la base de datos?\n Esto podría tomar unos minutos");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      //Mandar a componente "generar-horario"
      this.router.navigate(['./cargar']);
      //Ejecutar codigo paralelo
    }
  }

}
