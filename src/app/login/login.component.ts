import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: string = null;
  public password: string = null;
  public loading = false

  constructor(
    private loginService: LoginService,
    private router: Route,
    private route: ActivatedRoute 
    
    
    ) { }

  ngOnInit() {
  }
  autenticar()
  {
    console.log('autenticando')
    this.loginService.autenticarSer('gabriel')
  }
   public login(){
     this.loading = true;
     const formLogin={
       user : this.user,
       password : this.password
     }




   }










}
