import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

// including animation modules
import { trigger, transition, useAnimation } from "@angular/animations";
import { slideInRight } from "ng-animate";
// including service
import { CountriesApiService } from "../../countries-api.service";
//including interface
import { CountriesOfRegion } from "./region";
import { empty } from "rxjs";

@Component({
  selector: "app-region",
  templateUrl: "./region.component.html",
  styleUrls: ["./region.component.css"],
  animations: [
    trigger("slideInRight", [transition("* => *", useAnimation(slideInRight))])
  ],
  providers: [Location]
})

export class RegionComponent implements OnInit {

  public slideInRight: any;
  public info: any;
  public regionName: any;

  // search filter functionality
  public userFilter: any = { name: "" };

  // sort functionality
  key: string = "name"; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // pagination functionality
  p: number = 1;

  constructor(
    private location: Location,
    private _route: ActivatedRoute,
    private router: Router,
    private countryService: CountriesApiService
  ) {}


  ngOnInit() {
    // capture the name of the region
    this.regionName = this._route.snapshot.paramMap.get("region");

    // calling the function to data 
    this.functionToGetDataFromService ();

  }


  public functionToGetDataFromService () {
     // pass regionName to api request function
     this.countryService.fetchCountriesOfRegion(this.regionName).subscribe(

      (data: any) => {

        // emptying the Array to get fresh value
        this.info = [];

        // implementing interface
        for (let i of data) {
          let countryData: CountriesOfRegion = {
            name: i.name,
            capital: i.capital,
            alpha2Code: i.alpha2Code,
            flag: i.flag,
            subregion: i.subregion,
            currencies: i.currencies,
            timezones: i.timezones
          };

          // pushing values to info array
          this.info.push(countryData);

        }
      },

      error => {

        console.log(error.errorMessage);
        
      }
    );
  }


  backButton() {

    this.location.back();

  }

}
