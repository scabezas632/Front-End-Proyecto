import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Profesor } from '../interfaces/profesor.interface';
import 'rxjs/Rx'


@Injectable()
export class ProfesoresService {

  // profesoresUrl:string = "https://paralela-2fcd6.firebaseio.com/Profesores.json";
  profesoresUrl:string = "http://localhost:8000/profesores";
  // profesorUrl:string = "https://paralela-2fcd6.firebaseio.com/Profesores/";
  profesorUrl:string = "http://localhost:8000/profesores"

  constructor( private http:Http ) { }

  nuevoProfesor( profesor:Profesor ){

    let body = JSON.stringify( profesor );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.profesoresUrl, body, { headers } )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })
  }

  actualizarProfesor( profesor:Profesor, key$:string ){

    let body = JSON.stringify( profesor );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.profesorUrl }/${ key$ }`;

    return this.http.put( url, body, { headers } )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })
  }

  getProfesor( key$:string ){
    let url = `${ this.profesorUrl }/${ key$ }`;
    return this.http.get( url )
        .map( res=>res.json() );
  }

  getProfesores(){

    // return this.http.get( this.profesoresUrl )
    //     .map( res=>res.json() );
    return this.http.get( this.profesoresUrl )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })
  }

  borrarProfesor( key$:string ){

    let url = `${ this.profesorUrl }/${ key$ }.json`;
    return this.http.delete( url )
          .map( res=> res.json() )

  }

}
