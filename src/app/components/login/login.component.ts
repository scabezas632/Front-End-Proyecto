import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  forma:FormGroup;

  user:string[] = ["api@utem.cl","secret"];

  //Activa la alerta de usuario o pass invalida
  userError = false;

  constructor(private auth: AuthService,
              private router: Router) {
    if( this.auth.loggedIn()){
      router.navigate(['profesores']);
    }

    //Validadores
    this.forma = new FormGroup({
      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")
                                    ]),
      'password': new FormControl('', [
                                        Validators.required
                                      ] )
    })
  }

  onLogin(e) {
    //RESETEA LA ALERTA
    this.cambiarVariableAlerta();
    let email = e.target.elements[0].value.toLowerCase();
    let password = e.target.elements[1].value;

    let x= JSON.stringify({email,password});

    if(email==this.user[0] && password==this.user[1]){
      this.auth.login(email,password);
      this.router.navigate(['/profesores']);
    }if(email!=this.user[0] || password!=this.user[1]){
      this.userError = true;
    }
  }

  cambiarVariableAlerta(){
    this.userError = false;
  }

}
