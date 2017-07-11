import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Sala } from '../interfaces/sala.interface';
import 'rxjs/Rx'

@Injectable()
export class SalasService {

  salasUrl:string = "http://localhost:8000/salas";

  salaPruebaURL:string = "http://localhost:8000/cursos/1/horario/2/salas";

  constructor( private http:Http ) { }

  getSala( key$:string ){
    let url = `${ this.salasUrl }/${ key$ }`;
    return this.http.get( this.salaPruebaURL )
        .map( res=>{
            console.log(res.json().datos);
            return res.json().datos;
        });
  }

  getSalas(){
    return this.http.get( this.salasUrl )
        .map( res=>{
          // console.log(res.json().datos);
          return res.json().datos;
        })
  }


}
