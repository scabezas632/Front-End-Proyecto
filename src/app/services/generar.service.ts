import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/Rx'

@Injectable()
export class GenerarService {

  horarioUrl:string = "http://localhost:8000/api/generar_horario";

  cargarUrl:string = "http://localhost:8000/api/cargar";

  generando:boolean = true;

  constructor( private http:Http) { }

  generarHorario( ){

    let headers = new Headers({
      "Access-Control-Expose-Headers" : "Authorization"
    });
    headers.append('Access-Control-Allow-Origin', '*');

    let token = localStorage.getItem('token');
    console.log(token);

    let url = `${ this.horarioUrl }?token=${ token }`;

    return this.http.post( url, "" )
        .map( res=>{
          this.generando = false;
          console.log(this.generando);
          res.json().datos

        });
  }

  cargarBD( ){
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');

    let token = localStorage.getItem('token');

    let url2 = `${ this.cargarUrl }?token=${ token }`;

    return this.http.post( url2, "")
        .map( res=>{
           res.json().datos;
        })
  }

  returnVariable(){
    return this.generando;
  }

}
