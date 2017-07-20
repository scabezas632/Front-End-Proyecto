import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Profesor } from '../../interfaces/profesor.interface';
import { Disponibilidad } from '../../interfaces/disponibilidad.interface';
import { ProfesoresService } from '../../services/profesores.service';
import { DisponibilidadService } from '../../services/disponibilidad.service';



@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }
    `],
  styleUrls: ['./profesores.component.css']
})
export class ProfesorComponent{

  public profesor:Profesor = {
    nombre:"",
    apellido:"",
    rut:""
  }

  public disponibilidad:Disponibilidad = {
    dia:null,
    periodo_1: 0,
    periodo_2: 0,
    periodo_3: 0,
    periodo_4: 0,
    periodo_5: 0,
    periodo_6: 0,
    periodo_7: 0,
    periodo_8: 0,
    teacher_id:0
  }

  //Dias en total
  public dias:any[]=[0,1,2,3,4,5];

  //Dias que no tienen horario ocupado
  public diasDisponibles:any[]=[0,1,2,3,4,5];

  //Dias que están en la base de datos
  public diasUpdate:any[]=[]

  //Dias que no están en la base de datos
  public diasCreate:any[]=[0,1,2,3,4,5];

  //Periodos a usar
  public periodos:any[]=[0,1,2,3,4,5,6,7];

  // ESTADOS DE LA MATRIZ
  // 1 = Disponible para ser usado
  // 2 = No disponible para ser usado
  // 3 = Deshabilitado
  public matrizHorario: any[] = [[1, 1, 1, 1, 1, 1],
                							   [1, 1, 1, 1, 1, 1],
                							   [1, 1, 1, 1, 1, 1],
                							   [1, 1, 1, 1, 1, 1],
                							   [1, 1, 1, 1, 1, 3],
                							   [1, 1, 1, 1, 1, 3],
                							   [1, 1, 1, 1, 1, 3],
                							   [1, 1, 1, 1, 1, 3]];


  //Para que la disponibilidad se carge una sola vez
  interruptor:boolean = false;

  //Para que siempre carge primero la disponibilidad
  enabled:boolean = false;

  //Alerta enabled disponibiilidad
  errorMostrarDisponibilidad:boolean = false;

  //Para saber si se efectúo correctamente la actualización
  actualizado:boolean = false;
  errorActualizado:boolean = false;

  //ID del profesor
  id:string = "";

  public arregloDisponibilidad:any[] = [];

  constructor( private _profesoresService:ProfesoresService,
                private _disponibilidadService:DisponibilidadService,
                private router:Router,
                private activatedRoute:ActivatedRoute){

    this.activatedRoute.params
        .subscribe( parametros=>{
          this.id = parametros['id']
          if(this.id !=="nuevo" ){
            //OBTIENE LOS DATOS DEL PROFESOR
            this._profesoresService.getProfesor( this.id )
                  .subscribe( profesor => this.profesor = profesor)
                  // console.log(this.profesor);
          }

        } );

    this.activatedRoute.params
        .subscribe( parametros=>{
          this.id = parametros['id']
          if(this.id !=="nuevo" ){
            //OBTIENE LAS DISPONIBILIDADES DEL PROFESOR
            this._disponibilidadService.getDisponibilidades( this.id )
                  .subscribe( disponibilidad => this.disponibilidad = disponibilidad)
          }

        } );

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

    if(!this.enabled){
      this.errorMostrarDisponibilidad = true;
    }
    if(this.enabled){
      let dato = coordenada.split("-");
      let fila = +dato[0];
      let columna = +dato[1];

      if(fila==5 && columna>=4){
        this.matrizHorario[columna][fila]=this.matrizHorario[columna][fila];
      }else{
        //CON NUMEROS
        if(this.matrizHorario[columna][fila]==1){
          this.matrizHorario[columna][fila]=2;
        }
        else{
          this.matrizHorario[columna][fila]=1;
        }
        //CON BOOLEANOS
        // this.matrizHorario[columna][fila]=!this.matrizHorario[columna][fila];
      }

      //SI SE CAMBIO UN DIA DISPONIBLE, LO BORRA
      let index = this.diasDisponibles.indexOf(fila);
      let contador = 0;
      for(let i in this.periodos){
          contador+=this.matrizHorario[i][fila];
      }

      if(index==-1){
        //0 de lunes a Viernes y 12 el Sábado
        if(contador==0 || contador==12){
          this.diasDisponibles.push(fila);
          contador=0;
        }
      }else{
        this.diasDisponibles.splice(index,1);
        contador=0;
      }
    }
}

  completarDia(dia, llenar){
    for(let i in this.periodos){
      if(llenar==true){
        if(this.getEstadoBloque( dia+"-"+i )==1){
          this.changeEstadoBloque( dia+"-"+i );
        }
      }else{
        if(this.getEstadoBloque( dia+"-"+i )==2){
          this.changeEstadoBloque( dia+"-"+i );
        }
      }
    }
  }

  guardar(key:any){
    this.cambiarVariableAlerta()

    //Si hay dias nuevos, añadirlos
    if(this.diasCreate.length>0){
      //AÑADE AL ARREGLO LOS DIAS QUE FALTAN
      for(let i in this.diasCreate){
        this.arregloDisponibilidad.push(
          {
            "dia":this.diasCreate[i]+1,
            "periodo_1":this.matrizHorario[0][this.diasCreate[i]],
            "periodo_2":this.matrizHorario[1][this.diasCreate[i]],
            "periodo_3":this.matrizHorario[2][this.diasCreate[i]],
            "periodo_4":this.matrizHorario[3][this.diasCreate[i]],
            "periodo_5":this.matrizHorario[4][this.diasCreate[i]],
            "periodo_6":this.matrizHorario[5][this.diasCreate[i]],
            "periodo_7":this.matrizHorario[6][this.diasCreate[i]],
            "periodo_8":this.matrizHorario[7][this.diasCreate[i]],
            "teacher_id":key}
        );
      }

      //VERIFICA CUALES NO ESTÁN EN LA BASE DE DATOS
      let idArreglo;
      for(let i in this.arregloDisponibilidad){
        for(let j in this.diasCreate){
          if(this.arregloDisponibilidad[i].dia==this.diasCreate[j]+1){
            idArreglo=i;
          }
        }

        this._disponibilidadService.nuevaDisponibilidad( this.arregloDisponibilidad[idArreglo],this.id )
              .subscribe( data=>{
                this.actualizado = true;
              },
            error=> {
              console.error(error)
              this.errorActualizado = true;
            });
      }
    }
    //SI HABIAN DE ANTES, ACTUALIZARLOS
    if(this.diasUpdate.length>0){
      //ENCONTRAR INDEX DE LOS QUE HABIAN
      let idArreglo;
      for(let i in this.arregloDisponibilidad){
        for(let j in this.diasUpdate){
          if(this.arregloDisponibilidad[i].dia==this.diasUpdate[j]+1){
            idArreglo=i;

          }
        }

        //PARTE QUE NO FUNCIONA
        // console.log("DIA: "+this.arregloDisponibilidad[idArreglo].dia);

        this.arregloDisponibilidad[idArreglo].periodo_1 = this.matrizHorario[0][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_2 = this.matrizHorario[1][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_3 = this.matrizHorario[2][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_4 = this.matrizHorario[3][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_5 = this.matrizHorario[4][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_6 = this.matrizHorario[5][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_7 = this.matrizHorario[6][this.diasUpdate[idArreglo]];
        this.arregloDisponibilidad[idArreglo].periodo_8 = this.matrizHorario[7][this.diasUpdate[idArreglo]];

        let idDisponibilidad = this.arregloDisponibilidad[idArreglo].id;

        this._disponibilidadService.actualizarDisponibilidad( this.arregloDisponibilidad[idArreglo], this.id,  idDisponibilidad )
              .subscribe( data=>{
                // console.log(idDisponibilidad+" ACTUALIZADO");
                this.actualizado = true;
              },
            error=> {
              console.error(error)
              this.errorActualizado = true;
            });

      }
    }
  }

  mostrarDisponibilidad(){
    if(this.interruptor==false){
      this.enabled=true;
      this.errorMostrarDisponibilidad = false;

      //CONVERTIR DE JSON A ARRAY
      for(let i in this.disponibilidad){
         this.arregloDisponibilidad.push(this.disponibilidad[i])
      }

      //MODIFICAR LA matrizHorario CON LOS DATOS DE DISPONIBILIDAD
      let dia;
      for(let i in this.arregloDisponibilidad){
        //INICIA LA VARIABLE "dia" SEGÚN EL VALOR DEL AREGLO
        if(this.arregloDisponibilidad[i].dia==1)dia=0;
        if(this.arregloDisponibilidad[i].dia==2)dia=1;
        if(this.arregloDisponibilidad[i].dia==3)dia=2;
        if(this.arregloDisponibilidad[i].dia==4)dia=3;
        if(this.arregloDisponibilidad[i].dia==5)dia=4;
        if(this.arregloDisponibilidad[i].dia==6)dia=5;

        //BORRA LOS DIAS QUE YA ESTÁN USADOS
        let index = this.diasDisponibles.indexOf(dia);
        this.diasDisponibles.splice(index,1);
        this.diasCreate.splice(index,1);

        //AÑADE LOS DIAS QUE ESTÁN USADOS
        this.diasUpdate.push(dia);

        //SEGÚN EL DIA, SE ASIGNAN LOS PERIODOS DEL ARREGLO
        this.matrizHorario[0][dia]=this.arregloDisponibilidad[i].periodo_1;
        this.matrizHorario[1][dia]=this.arregloDisponibilidad[i].periodo_2;
        this.matrizHorario[2][dia]=this.arregloDisponibilidad[i].periodo_3;
        this.matrizHorario[3][dia]=this.arregloDisponibilidad[i].periodo_4;
        this.matrizHorario[4][dia]=this.arregloDisponibilidad[i].periodo_5;
        this.matrizHorario[5][dia]=this.arregloDisponibilidad[i].periodo_6;
        this.matrizHorario[6][dia]=this.arregloDisponibilidad[i].periodo_7;
        this.matrizHorario[7][dia]=this.arregloDisponibilidad[i].periodo_8;

      }
      this.interruptor=true;
    }
  }

  cambiarVariableAlerta(){
    this.actualizado = false;
    this.errorActualizado = false;
    this.errorMostrarDisponibilidad = false;
  }


}
