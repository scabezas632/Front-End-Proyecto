import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalasService } from '../../services/salas.service';
import { Horario } from '../../interfaces/horario.interface';
import {CsvService} from "angular2-json2csv";

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas:any[] = [];
  loading:boolean = true;

  public horario:Horario = {
    dia:null,
    periodo_1: "",
    periodo_2: "",
    periodo_3: "",
    periodo_4: "",
    periodo_5: "",
    periodo_6: "",
    periodo_7: "",
    periodo_8: "",
    class_id:0
  }

  //ARREGLO HORARIO
  public arregloHorario:any[] = [];

  //Matriz horario
  public matrizHorario: any[] = [["Periodos", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado"],
                                 ["1", "", "", "", "", "", ""],
                							   ["2", "", "", "", "", "", ""],
                							   ["3", "", "", "", "", "", ""],
                							   ["4", "", "", "", "", "", ""],
                							   ["5", "", "", "", "", "", ""],
                							   ["6", "", "", "", "", "", ""],
                							   ["7", "", "", "", "", "", ""],
                							   ["8", "", "", "", "", "", ""]];

  //CONTIENE matrizHorario EN FORMATO JSON
  horarioJSON:any;

  //ID de la sala
  id:string = "";


  constructor( private _salasServices:SalasService,
                private router:Router,
                private activatedRoute:ActivatedRoute,
                private _csvService: CsvService ) {

    this._salasServices.getSalas()
          .subscribe( data => {
              this.salas = data;
              console.log(this.salas);
              this.loading = false;
          })

    this.activatedRoute.params
        .subscribe( parametros=>{
          this.id = parametros['id']
          if(this.id !=="nuevo" ){
            //OBTIENE LOS DATOS DEL PROFESOR
            this._salasServices.getHorarioSala( this.id )
                  .subscribe( horario => {
                    this.horario = horario
                    for(let i in this.horario){
                       this.arregloHorario.push(this.horario[i])
                    }
                    this.insertarMatrizHorario();
              })
          }

        } );
  }

  ngOnInit() {
  }

  insertarMatrizHorario(){

    //MODIFICAR LA matrizHorario CON LOS DATOS DE DISPONIBILIDAD
    let dia;
    for(let i in this.arregloHorario){
      //INICIA LA VARIABLE "dia" SEGÚN EL VALOR DEL AREGLO
      if(this.arregloHorario[i].dia==1)dia=1;
      if(this.arregloHorario[i].dia==2)dia=2;
      if(this.arregloHorario[i].dia==3)dia=3;
      if(this.arregloHorario[i].dia==4)dia=4;
      if(this.arregloHorario[i].dia==5)dia=5;
      if(this.arregloHorario[i].dia==6)dia=6;

      //SEGÚN EL DIA, SE ASIGNAN LOS PERIODOS DEL ARREGLO
      this.matrizHorario[1][dia]=this.arregloHorario[i].periodo_1;
      this.matrizHorario[2][dia]=this.arregloHorario[i].periodo_2;
      this.matrizHorario[3][dia]=this.arregloHorario[i].periodo_3;
      this.matrizHorario[4][dia]=this.arregloHorario[i].periodo_4;
      this.matrizHorario[5][dia]=this.arregloHorario[i].periodo_5;
      this.matrizHorario[6][dia]=this.arregloHorario[i].periodo_6;
      this.matrizHorario[7][dia]=this.arregloHorario[i].periodo_7;
      this.matrizHorario[8][dia]=this.arregloHorario[i].periodo_8;
    }

    //OBTENER EL INDEX DE LA SALA
    let index;
    for(let i in this.salas){
      if(this.salas[i].id==this.id){
        index = i;
      }
    }

    //OBTENER NOMBRE DE LA SALA
    let nombreSala = this.salas[index].nombre;

    this.horarioJSON = JSON.stringify(this.matrizHorario);
    this._csvService.download(this.horarioJSON, "Horario - "+nombreSala);
  }

}
