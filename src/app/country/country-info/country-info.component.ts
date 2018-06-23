import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY } from 'ng-animate';
import { Location } from '@angular/common';
import { ActivatedRoute , Router } from "@angular/router";
import { CountriesApiService } from '../../countries-api.service';
import { CountryData } from "./country";

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
  animations: [
    trigger('flipInY', [transition('* => *', useAnimation(flipInY))])
  ],
  providers: [Location]
})
export class CountryInfoComponent implements OnInit {

  public flipInY:any;
  public info:any;
  constructor(private location: Location, private _route: ActivatedRoute, private countryService: CountriesApiService) { }

  ngOnInit() {

    // capture name of country
    let countryName = this._route.snapshot.paramMap.get('country');


    // pass countryName to api request function
    this.countryService.fetchCountryInfo(countryName).subscribe(
      (data:any) => {

        this.info = [];
          
            let countryData: CountryData = {
              name: data.name,
              capital: data.capital,
              flag: data.flag,
              subregion: data.subregion,
              currencies: data.currencies,
              timezones: data.timezones,
              population: data.population,
              area: data.area,
              region: data.region,
              borders: data.borders,
              languages: data.languages
            }
            this.info.push(countryData);
            
      },
      error => {
        console.log(error.errorMessage)
      },
    )

  }

  backButton () {
    this.location.back();
  }
}
