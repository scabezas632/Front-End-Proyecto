import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Sala } from '../../interfaces/sala.interface';
import { SalasService } from '../../services/salas.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalaComponent implements OnInit {

  private sala:Sala = {
    nombre:null
  }

  //Dias en total
  public dias:any[]=[0,1,2,3,4,5];

  //Periodos a usar
  public periodos:any[]=[0,1,2,3,4,5,6,7];

  public matrizHorario: any[] = [[0, 0, 0, 0, 0, 0],
                							   [0, 0, 0, 0, 0, 0],
                							   [0, 0, 0, 0, 0, 0],
                							   [0, 0, 0, 0, 0, 0],
                							   [0, 0, 0, 0, 0, 3],
                							   [0, 0, 0, 0, 0, 3],
                							   [0, 0, 0, 0, 0, 3],
                							   [0, 0, 0, 0, 0, 3]];

 //ID del profesor
 id:string = "";

  constructor(  private _salasService:SalasService,
                private router:Router,
                private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params
        .subscribe( parametros=>{

          this.id = parametros['id']
          if(this.id !=="nueva" ){
            this._salasService.getSala( this.id )
                  .subscribe( sala => this.sala = sala)
          }
        } );
  }

  ngOnInit() {
    console.log(this.sala[0].pivot)
  }

  //Funciones de horario
  getEstadoBloque(coordenada){
    let dato = coordenada.split("-");
    let fila = +dato[0];
    let columna = +dato[1];


    // console.log("bloques["+columna+"]["+fila+"]: "+this.matrizHorario[columna][fila]);

    return this.matrizHorario[columna][fila];
  }

  changeEstadoBloque(coordenada){
    let dato = coordenada.split("-");
    let fila = +dato[0];
    let columna = +dato[1];

    if(fila==5 && columna>=4){
      this.matrizHorario[columna][fila]=this.matrizHorario[columna][fila];
    }else{
      this.matrizHorario[columna][fila]=!this.matrizHorario[columna][fila];
    }
  }

}
