import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Disponibilidad } from '../interfaces/disponibilidad.interface';
import 'rxjs/Rx'


@Injectable()
export class DisponibilidadService {

  disponibilidadUrl:string = "http://localhost:8000/profesor"

  constructor( private http:Http ) { }


  nuevaDisponibilidad( disponibilidad:any[], idProfesor$:string ){

    let url = `${ this.disponibilidadUrl }/${ idProfesor$ }/disponibilidad`;

    let body = JSON.stringify( disponibilidad );
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    console.log(body);


    return this.http.post( url, body, { headers } )
        .map( res=>{
          // console.log(res.json().datos);
           res.json().datos;
        })
  }

  actualizarDisponibilidad( disponibilidad:any[], idProfesor$:string, idDisponibilidad$:string ){

    let body = JSON.stringify( disponibilidad );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.disponibilidadUrl }/${ idProfesor$ }/disponibilidad/${ idDisponibilidad$ }`;

    return this.http.put( url, body, { headers } )
        .map( res=>{
          return res.json().datos;
        })
  }

  getDisponibilidades( idProfesor$:string ){
    let url = `${ this.disponibilidadUrl }/${ idProfesor$ }/disponibilidad`;

    return this.http.get( url )
        .map( res=>{
          // console.log(res.json().datos);
          return res.json().datos;
        })
  }

}
