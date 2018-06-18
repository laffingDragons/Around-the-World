import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesApiService } from '../../countries-api.service';
import { CountriesOfRegion } from './region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [Location]
})

export class RegionComponent implements OnInit {

  public info: any;
  public regionName: any;
  public userFilter: any = { name: '' };
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  p: number = 1;

  constructor(private location: Location, private _route: ActivatedRoute, private router: Router, private countryService: CountriesApiService) { }

  ngOnInit() {

    // capture the name of the region
    this.regionName = this._route.snapshot.paramMap.get('region');   

    // pass regionName to api request function
    this.countryService.fetchCountriesOfRegion(this.regionName).subscribe(
      (data: CountriesOfRegion) => {
        this.info = data;
        console.log(data);
      },
      error => {
        console.log(error.errorMessage);
      },
    )
  }

  backButton() {
    this.location.back();
  }
}
