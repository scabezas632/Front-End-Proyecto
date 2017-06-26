import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Profesor } from '../../interfaces/profesor.interface';
import { ProfesoresService } from '../../services/profesores.service';



@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styles: []
})
export class ProfesorComponent implements OnInit {

  private profesor:Profesor = {
    nombre:"",
    apellido:"",
    email:"",
    rut:0
  }

  nuevo:boolean = false;
  id:string = "";

  constructor( private _profesoresService:ProfesoresService,
                private router:Router,
                private activatedRoute:ActivatedRoute){

    this.activatedRoute.params
        .subscribe( parametros=>{

          this.id = parametros['id']
          if(this.id !=="nuevo" ){
            this._profesoresService.getProfesor( this.id )
                  .subscribe( profesor => this.profesor = profesor)
          }

        } );
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.profesor);

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
              console.log(data);
            },
          error=> console.error(error));
    }
  }

  agregarNuevo( forma:NgForm ){
    this.router.navigate(['/profesor','nuevo']);

    forma.reset();

  }

}
