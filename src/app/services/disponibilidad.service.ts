import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Disponibilidad } from '../interfaces/disponibilidad.interface';
import 'rxjs/Rx'


@Injectable()
export class DisponibilidadService {

  disponibilidadUrl:string = "http://localhost:8000/api/profesor"

  constructor( private http:Http ) { }

  nuevaDisponibilidad( disponibilidad:any[], idProfesor$:string ){

    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let token = localStorage.getItem('token');

    let url = `${ this.disponibilidadUrl }/${ idProfesor$ }/disponibilidad?token=${ token }`;

    return this.http.post( url, disponibilidad, headers )
        .map( res=>{
           res.json().datos;
        })
  }

  actualizarDisponibilidad( disponibilidad:any[], idProfesor$:string, idDisponibilidad$:string ){

    let body = JSON.stringify( disponibilidad );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let token = localStorage.getItem('token');

    let url = `${ this.disponibilidadUrl }/${ idProfesor$ }/disponibilidad/${ idDisponibilidad$ }?token=${ token }`;

    return this.http.put( url, body, { headers } )
        .map( res=>{
          return res.json().datos;
        })
  }

  getDisponibilidades( idProfesor$:string ){
    let token = localStorage.getItem('token');
    console.log(token);

    let url = `${ this.disponibilidadUrl }/${ idProfesor$ }/disponibilidad?token=${ token }`;

    return this.http.get( url )
        .map( res=>{
          return res.json().datos;
        })
  }

}
