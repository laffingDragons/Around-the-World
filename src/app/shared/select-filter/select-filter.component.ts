import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from "@angular/router";
import { CountriesApiService } from '../../countries-api.service'


@Component({
  selector: 'select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit {

  @Output()
  notify: EventEmitter<String> = new EventEmitter<String>();

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
     }

  fetchCountriesForLang(event){
    this.notify.emit(this.selectedValueLang);
    this.router.navigate(['/filter', this.selectedValueLang]);
    
  }

  fetchCountriesForCurrency(event){
    this.notify.emit(this.selectedValueCurrency);
    this.router.navigate(['/filter', this.selectedValueCurrency]);
  }
}