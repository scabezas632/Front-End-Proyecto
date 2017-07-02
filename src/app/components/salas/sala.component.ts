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

  public dias:any[]=[0,1,2,3,4,5];
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

  public departamentos:any[] = [];

  nuevo:boolean = false;
  id:string = "";

  constructor(  private _salasService:SalasService,
                private router:Router,
                private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params
        .subscribe( parametros=>{

          this.id = parametros['id']
          if(this.id !=="nueva" ){
            this._salasService.getSala( this.id )
                  .subscribe( profesor => this.sala = profesor)
          }
        } );
  }

  ngOnInit() {
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

  completarDia(dia, llenar){

    for(let i=0;i<=8;i++){
      if(llenar==true){
        if(this.getEstadoBloque( dia+"-"+i )==false){
          this.changeEstadoBloque( dia+"-"+i );
        }
      }else{
        if(this.getEstadoBloque( dia+"-"+i )==true){
          this.changeEstadoBloque( dia+"-"+i );
        }
      }
    }
  }


  guardar(){
    console.log(this.sala);

    if(this.id == "nueva"){
      //insertando
      this._salasService.nuevaSala( this.sala )
            .subscribe( data=>{
              this.router.navigate(['/sala',data.name])
            },
          error=> console.error(error));
    }else{
      //actualizando
      this._salasService.actualizarSala( this.sala, this.id )
            .subscribe( data=>{
              console.log(data);
            },
          error=> console.error(error));
    }
  }

  agregarNuevo( forma:NgForm ){
    this.router.navigate(['/sala','nueva']);

    forma.reset();

  }

}
