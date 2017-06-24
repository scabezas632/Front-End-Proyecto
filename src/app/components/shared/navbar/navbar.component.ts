import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ConfirmaGenerar() {
    let mensaje = confirm("¿Está seguro que desea generar un nuevo horario?\n Esto podría tomar unos minutos");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      //Ejecutar codigo paralelo
    }
  }

}
