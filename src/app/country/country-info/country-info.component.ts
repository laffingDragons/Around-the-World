import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , Router } from "@angular/router";
import { CountriesApiService } from '../../countries-api.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
  providers: [Location]
})
export class CountryInfoComponent implements OnInit {

  public info:any;
  constructor(private location: Location, private _route: ActivatedRoute, private countryService: CountriesApiService) { }

  ngOnInit() {

    // capture name of country
    let countryName = this._route.snapshot.paramMap.get('country');


    // pass countryName to api request function
    this.countryService.fetchCountryInfo(countryName).subscribe(
      data => {
        this.info = data;
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
