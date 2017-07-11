import { Component, OnInit } from '@angular/core';
import { SalasService } from '../../services/salas.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
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

}
