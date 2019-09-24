import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'apploguin';
  public User: "daniela";
  public password: "1234";
  public verBoton= true;
  
  

  login(event, Event){
    console.log(this.User+"  "+this.password);
  }
}
