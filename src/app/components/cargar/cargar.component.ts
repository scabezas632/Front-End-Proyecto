import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenerarService } from '../../services/generar.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  cargando:boolean = true;

  constructor(private _generarService:GenerarService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {

    this._generarService.cargarBD( )
          .subscribe( data=>{
            console.log(data);
            this.cargando = false;
          },
        error=> {
          console.error(error)
        });


 }

  ngOnInit() {
  }

}
