import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInUp } from 'ng-animate';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesApiService } from '../countries-api.service';
import { FilterData } from "./filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp))])
  ],
})

export class FilterComponent implements OnInit {

  public fadeInUp:any;
  public info: any;
  public title: any;

  constructor(private location: Location, private _route: ActivatedRoute, private router: Router, private countryService: CountriesApiService) { }

  ngOnInit() {

    this.functionToGetDataFromService();

  }


// Function to get data from service
public functionToGetDataFromService():any{
  this.info=[];

  let lang = this._route.snapshot.paramMap.get('lang');
  
    if (lang.length == 2) {
      this.title = "Language";
      this.countryService.fetchCountriesForLang(lang).subscribe(
        (data:any) => {
          this.info = [];
          for (let i of data) {
            let countryData: FilterData = {
              name: i.name,
              capital: i.capital,
              alpha2Code: i.alpha2Code,
              flag: i.flag,
              subregion: i.subregion,
              currencies: i.currencies,
              timezones: i.timezones,
            }
            this.info.push(countryData);
          }
        },
        error => {
          console.log(error.errorMessage);
        },
      )
    } else {
      this.title = "Currency";
      this.countryService.fetchCountriesForCurrency(lang).subscribe(
        data => {
          this.info = data;
        },
        error => {
          console.log(error.errorMessage);
        },
      )

    }
    // pass regionName to api request function
}

// Function to get value from select and get data from service

public function(value):any{
  this.info=[];

  let lang = value;
  
    if (lang.length == 2) {
      this.title = "Language";
      this.countryService.fetchCountriesForLang(lang).subscribe(
        (data:any) => {
          this.info = [];
          for (let i of data) {
            let countryData: FilterData = {
              name: i.name,
              capital: i.capital,
              alpha2Code: i.alpha2Code,
              flag: i.flag,
              subregion: i.subregion,
              currencies: i.currencies,
              timezones: i.timezones,
            }
            this.info.push(countryData);
          }
        },
        error => {
          console.log(error.errorMessage);
        },
      )
    } else {
      this.title = "Currency";
      this.countryService.fetchCountriesForCurrency(lang).subscribe(
        data => {
          this.info = data;
        },
        error => {
          console.log(error.errorMessage);
        },
      )

    }
    // pass regionName to api request function
}

  backButton() {

    this.location.back();
    
  }

  public getValue = (value:string)=>{
    
    this.function(value);
     
  }


}
