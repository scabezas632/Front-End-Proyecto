import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Sala } from '../interfaces/sala.interface';
import 'rxjs/Rx'

@Injectable()
export class SalasService {

  constructor( private http:Http ) { }

  salasUrl:string = "https://paralela-2fcd6.firebaseio.com/Salas.json";
  salaUrl:string = "https://paralela-2fcd6.firebaseio.com/Salas/";

  nuevaSala( sala:Sala ){

    let body = JSON.stringify( sala );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.salasUrl, body, { headers } )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })
  }

  actualizarSala( sala:Sala, key$:string ){

    let body = JSON.stringify( sala );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.salaUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })
  }

  getSala( key$:string ){
    let url = `${ this.salaUrl }/${ key$ }.json`;
    return this.http.get( url )
        .map( res=>res.json() );
  }

  getSalas(){

    return this.http.get( this.salasUrl )
        .map( res=>res.json() );
  }

  borrarSala( key$:string ){

    let url = `${ this.salaUrl }/${ key$ }.json`;
    return this.http.delete( url )
          .map( res=> res.json() )

  }


}
