import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Headers } from '@angular/http';
import { Route, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, catchError} from  'rxjs/operators';
import {pipe} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
     private http: Http,
     private httpClient : HttpClient,
     private router : Router,
    


  ) { }

  autenticarSer(data:string){
    console.log('metodo en serivio '+ data)
  }

  
  private headersREST(): Headers{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type','applicatio/json');
    return myHeaders;
  }
  return

  
  public obtenerProductos(): Observable<any> {
    //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
   const url='https://api-rest-mantenimiento.herokuapp.com/api/usuarios'

    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  } 
 
  


 // Erros
  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
  }


}
