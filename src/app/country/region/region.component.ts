import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , Router } from "@angular/router";
import { CountriesApiService } from '../../countries-api.service'

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers:[Location]
})
export class RegionComponent implements OnInit {

  public info:any;
  public regionName:any;
  constructor(private location: Location, private _route:ActivatedRoute, private router:Router, private countryService: CountriesApiService) { }

  ngOnInit() {

    // capture the name of the region
    this.regionName = this._route.snapshot.paramMap.get('region');

    // pass regionName to api request function
    this.countryService.fetchCountriesOfRegion(this.regionName).subscribe(
      data =>{
        this.info = data;
        console.log(this.info);
      },
      error =>{
        console.log(error.errorMessage);
      },
    )
  }

  backButton() {
    this.location.back();
  }
}
