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
  constructor(private location: Location, private _route:ActivatedRoute, private router:Router, private countryService: CountriesApiService) { }

  ngOnInit() {
    let lang = this._route.snapshot.paramMap.get('lang');

    // pass regionName to api request function
    this.countryService.fetchCountriesOfRegion(lang).subscribe(
      data =>{
        this.info = data;
      },
      error =>{
        console.log(error.errorMessage);
      },
    )
  


  }

}
