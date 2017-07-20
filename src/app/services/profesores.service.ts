import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Profesor } from '../interfaces/profesor.interface';
import 'rxjs/Rx'


@Injectable()
export class ProfesoresService {

  profesoresUrl:string = "http://localhost:8000/api/profesores";
  profesorUrl:string = "http://localhost:8000/api/profesores";

  constructor( private http:Http ) { }

  nuevoProfesor( profesor:Profesor ){

    let body = JSON.stringify( profesor );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let token = localStorage.getItem('token');

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

    let token = localStorage.getItem('token');

    let url = `${ this.profesorUrl }/${ key$ }?token=${ token }`;

    return this.http.put( url, body, { headers } )
        .map( res=>{
          // console.log(res.json().datos);
          return res.json().datos;
        })
  }

  getProfesor( key$:string ){
    let token = localStorage.getItem('token');

    let url = `${ this.profesorUrl }/${ key$ }?token=${ token }`;
    return this.http.get( url )
        .map( res=>res.json().datos );
  }

  getProfesores(){
    let headers = new Headers();
    let token = localStorage.getItem('token');

    let url = `${ this.profesoresUrl }?token=${ token }`;

    return this.http.get( url )
        .map( res=>{
          return res.json().datos;
        })
  }

  borrarProfesor( key$:string ){
    let token = localStorage.getItem('token');

    let url = `${ this.profesorUrl }/${ key$ }`;
    return this.http.delete( url )
          .map( res=> res.json().datos )

  }

}
