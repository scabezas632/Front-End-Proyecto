import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Sala } from '../../interfaces/sala.interface';
import { SalasService } from '../../services/salas.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styles: []
})
export class SalaComponent implements OnInit {

  private sala:Sala = {
    nombre:null
  }

  nuevo:boolean = false;
  id:string = "";

  constructor(  private _salasService:SalasService,
                private router:Router,
                private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params
        .subscribe( parametros=>{

          this.id = parametros['id']
          if(this.id !=="nueva" ){
            this._salasService.getSala( this.id )
                  .subscribe( profesor => this.sala = profesor)
          }
        } );
  }

  ngOnInit() {
  }


  guardar(){
    console.log(this.sala);

    if(this.id == "nueva"){
      //insertando
      this._salasService.nuevaSala( this.sala )
            .subscribe( data=>{
              this.router.navigate(['/sala',data.name])
            },
          error=> console.error(error));
    }else{
      //actualizando
      this._salasService.actualizarSala( this.sala, this.id )
            .subscribe( data=>{
              console.log(data);
            },
          error=> console.error(error));
    }
  }

  agregarNuevo( forma:NgForm ){
    this.router.navigate(['/sala','nueva']);

    forma.reset();

  }

}
