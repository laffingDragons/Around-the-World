import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse } from '@angular/common/http'
// import observeable related code
import { Observable } from 'rxjs'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  public baseUrl = `https://restcountries.eu/rest/v2`

  constructor(private http: HttpClient) { }

  // exception error handler
  private handleError(err: HttpErrorResponse){
    console.log("Handle error Http Calls");
    console.log(err.message);
    return Observable.throw(err.message);   
  }

  // fetch All countries
  public fetchAll() {
    let response = this.http.get(`${this.baseUrl}/all`);
    return response;
  }

  // fetch countries of a region
  public fetchCountriesOfRegion(region) {
    let response = this.http.get(`${this.baseUrl}/region/${region}`);
    return response;
  }

  // fetch country information
  public fetchCountryInfo(country) {
    let response = this.http.get(`${this.baseUrl}/alpha/${country}`)
    return response;
  }

  // fetch countries for language
  public fetchCountriesForLang(lang) {
    let response = this.http.get(`${this.baseUrl}/lang/${lang}`)
    return response;
  }

   // fetch countries for language
   public fetchCountriesForCurrency(currency) {
    let response = this.http.get(`${this.baseUrl}/currency/${currency}`)
    return response;
  }
}
