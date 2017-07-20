import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class LoginService {

  userUrl:string = "http://localhost:8000/api/profesores";

  constructor( private http:Http ) { }

  getUser( key$:string ){

    let url = `${ this.userUrl }/${ key$ }`;
    return this.http.get( url )
        .map( res=>res.json().datos );
  }

}
