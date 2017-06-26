import { Component, OnInit } from '@angular/core';
import { SalasService } from '../../services/salas.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html'
})
export class SalasComponent implements OnInit {

  salas:any[] = [];
  loading:boolean = true;

  constructor( private _salasServices:SalasService ) {

    this._salasServices.getSalas()
          .subscribe( data => {
              this.salas = data;
              this.loading = false;
          })
  }

  ngOnInit() {
  }

  borrarSala( key$:string ){
    this._salasServices.borrarSala( key$ )
        .subscribe( respuesta=>{
          if( respuesta ){
            console.error(respuesta);
          }else{
            //todo bien
            delete this.salas[key$];
          }
        } )
  }

}
