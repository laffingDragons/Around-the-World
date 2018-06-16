import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CountriesApiService } from './countries-api.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public selectedValueLang : string;
  public tempArrayForLang : any;
  public langCode = [];
  public uniqueLangCode :any;

  public selectedValueCurrency : string;
  public tempArrayForCurrency : any;
  public currencyCode = [];
  public uniqueCurrencyCode :any;

  constructor( public router:Router, private countryService: CountriesApiService) {}
  
  ngOnInit(){   

      this.countryService.fetchAll().subscribe(
        data=>{
          this.tempArrayForLang = data;
          // console.log(this.tempArray);
          this.langIteration();
          this.currencyIteration();
        }
      ); //get request ends here
    }
  

    langIteration(){

      for(let i of this.tempArrayForLang){
        for(let j of i.languages){
          this.langCode.push(j.iso639_1);
        }
      }
       this.uniqueLangCode = Array.from(new Set(this.langCode))
      //  console.log("!!!!!", this.tempArrayForLang);
     }

     currencyIteration(){
      for(let m of this.tempArrayForLang){
        for(let n of m.currencies){
           this.currencyCode.push(n.code);
          }
        }
        this.uniqueCurrencyCode = Array.from(new Set(this.currencyCode))
        console.log("!!!!!",this.uniqueCurrencyCode);
     }

  fetchCountriesForLang(event){
    this.router.navigate(['/filter', this.selectedValueLang]);
    
  }

  fetchCountriesForCurrency(event){
    this.router.navigate(['/filter', this.selectedValueCurrency]);
  }
}