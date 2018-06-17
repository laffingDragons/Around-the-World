import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , Router } from "@angular/router";
import { CountriesApiService } from '../countries-api.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public info:any;
  public title:any;
  constructor(private location: Location, private _route:ActivatedRoute, private router:Router, private countryService: CountriesApiService) { }

  ngOnInit() {
    let lang = this._route.snapshot.paramMap.get('lang');

    if(lang.length == 2){
      this.title = "Language";
      this.countryService.fetchCountriesForLang(lang).subscribe(
        data =>{
          this.info = data;
        },
        error =>{
          console.log(error.errorMessage);
        },
      )
    }else{
      this.title = "Currency";
      this.countryService.fetchCountriesForCurrency(lang).subscribe(
        data =>{
          this.info = data;
        },
        error =>{
          console.log(error.errorMessage);
        },
      )

    }
    // pass regionName to api request function
  }
      backButton() {
        this.location.back();
      }

}
