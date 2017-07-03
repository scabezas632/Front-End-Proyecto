import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Profesor } from '../../interfaces/profesor.interface';
import { ProfesoresService } from '../../services/profesores.service';
import { DepartamentosService } from '../../services/departamentos.service';



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
    id:null,
    name:"",
    apellido:"",
    rut:null,
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

  formas:FormGroup;
  nuevo:boolean = false;
  id:string = "";

  constructor( private _profesoresService:ProfesoresService,
                private _departamentosService:DepartamentosService,
                private router:Router,
                private activatedRoute:ActivatedRoute){

    this.formas = new FormGroup({
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ] ),
      'apellido': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ] ),
      'rut': new FormControl('', [
                                    Validators.required
                                  ] ),
    })


    this.activatedRoute.params
        .subscribe( parametros=>{
          this.id = parametros['id']
          if(this.id !=="nuevo" ){
            //OBTIENE LOS DATOS DEL PROFESOR
            this._profesoresService.getProfesor( this.id )
                  .subscribe( profesor => this.profesor = profesor)
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


  guardar( forma:any ){
    console.log(forma);
    if(this.id == "nuevo"){
      //insertando
      this._profesoresService.nuevoProfesor( this.profesor )
            .subscribe( data=>{
              this.router.navigate(['/profesor',data.name])
            },
          error=> console.error(error));
    }else{
      //actualizando
      this._profesoresService.actualizarProfesor( this.profesor, this.id )
            .subscribe( data=>{
            },
          error=> console.error(error));
    }
  }

  // passwordIguales( control: FormControl ): any {
  //   let formas:any = this;
  //   if( control.value === formas.controls['password1'].value ){
  //     console.log("iguales")
  //     return{
  //       passwordiguales:true
  //     }
  //   }else{
  //     console.log("NO iguales")
  //     return null;
  //   }
  // }

  agregarNuevo( forma:NgForm ){
    this.router.navigate(['/profesor','nuevo']);

    forma.reset();

  }


}
