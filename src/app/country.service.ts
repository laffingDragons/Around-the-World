import { Injectable } from '@angular/core';
// importing http and client to make request
import{ HttpClient, HttpErrorResponse } from '@angular/common/http'
// import observeable related code
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class CountryService {

  public baseUrl = 'https://restcountries.eu/rest/v2';

  constructor( private _http:HttpClient) { }


  // exception error handler
  // private handleError(err: HttpErrorResponse){
  //   console.log("Handle error Http Calls");
  //   console.log(err.message);
  //   return Observable.throw(err.message);   
  // }

  // fetch Character data
  public getCountries():any{
    let myResponse =  this._http.get(`${this.baseUrl}/region/europe`);
    return myResponse;
  }


}