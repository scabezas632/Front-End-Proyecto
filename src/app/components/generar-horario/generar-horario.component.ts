import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenerarService } from '../../services/generar.service';


@Component({
  selector: 'app-generar-horario',
  templateUrl: './generar-horario.component.html',
  styleUrls: ['./generar-horario.component.css']
})
export class GenerarHorarioComponent implements OnInit {

  generando:boolean = true;

  constructor(private _generarService:GenerarService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {


    this._generarService.generarHorario( )
          .subscribe( data=>{
            this.generando = false;
          },
        error=> {
          console.error(error)
        });

 }

  ngOnInit() {
  }

}
