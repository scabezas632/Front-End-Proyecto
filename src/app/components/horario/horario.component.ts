import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  public clicked:boolean = true;
  public periodos:any[]=[0,1,2,3,4,5,6,7,8];
  public matrizHorario: any[] = [[false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false],
                							   [false, false, false, false, false, false]];

  constructor() { }

  ngOnInit() {
  }

  getEstadoBloque(coordenada){
    let dato = coordenada.split("-");
    let fila = +dato[0];
    let columna = +dato[1];

    console.log("bloques["+columna+"]["+fila+"]: "+this.matrizHorario[columna][fila]);

    return this.matrizHorario[columna][fila];
  }

  changeEstadoBloque(coordenada){
    let dato = coordenada.split("-");
    let fila = +dato[0];
    let columna = +dato[1];

    this.matrizHorario[columna][fila]=!this.matrizHorario[columna][fila];
  }

  changeColor(){
    if (this.clicked){
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }


}
