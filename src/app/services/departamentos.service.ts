import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class DepartamentosService {

  departamentosUrl:string = "http://localhost:8000/departamentos";

  constructor( private http:Http ) { }

  getDepartamentos(){

    return this.http.get( this.departamentosUrl )
        .map( res=>res.json().datos );
  }

}
