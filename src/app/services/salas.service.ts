import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Sala } from '../interfaces/sala.interface';
import 'rxjs/Rx'


@Injectable()
export class SalasService {

  salaUrl:string = "http://localhost:8000/api/salas";
  horarioUrl:string = "http://localhost:8000/api/sala";

  constructor( private http:Http ) { }

  getHorarioSala( idSala$:string ){
    let token = localStorage.getItem('token');

    let url = `${ this.horarioUrl }/${ idSala$ }/horario?token=${ token }`;
    return this.http.get( url )
        .map( res=>res.json().datos );
  }

  getSalas(){
    let headers = new Headers();
    let token = localStorage.getItem('token');

    console.log(token);

    let url = `${ this.salaUrl }?token=${ token }`;

    return this.http.get( url )
        .map( res=>{
          return res.json().datos;
        })
  }

}
