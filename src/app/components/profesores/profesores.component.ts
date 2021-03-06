import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores:any[] = [];
  loading:boolean = true;

  constructor( private _profesoresServices:ProfesoresService ) {

    this._profesoresServices.getProfesores()
          .subscribe( data => {
              this.profesores = data;
              this.loading = false;
          })
  }

  ngOnInit() {
  }
}
