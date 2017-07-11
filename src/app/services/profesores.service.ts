import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Profesor } from '../interfaces/profesor.interface';
import 'rxjs/Rx'


@Injectable()
export class ProfesoresService {

  profesoresUrl:string = "http://localhost:8000/profesores";
  profesorUrl:string = "http://localhost:8000/profesores"

  constructor( private http:Http ) { }

  nuevoProfesor( profesor:Profesor ){

    let body = JSON.stringify( profesor );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.profesoresUrl, body, { headers } )
        .map( res=>{
          // console.log(res.json().datos);
           res.json().datos;
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
          // console.log(res.json().datos);
          return res.json().datos;
        })
  }

  getProfesor( key$:string ){
    let url = `${ this.profesorUrl }/${ key$ }`;
    return this.http.get( url )
        .map( res=>res.json().datos );
  }

  getProfesores(){

    let headers = new Headers();
    headers.append( 'Authorization', 'Basic YXBpQHV0ZW0uY2w6c2VjcmVldA==' );

    return this.http.get( this.profesoresUrl )
        .map( res=>{
          // console.log(res.json().datos);
          return res.json().datos;
        })
  }

  borrarProfesor( key$:string ){

    let url = `${ this.profesorUrl }/${ key$ }`;
    return this.http.delete( url )
          .map( res=> res.json().datos )

  }

}
