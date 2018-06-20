import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesApiService } from '../countries-api.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [AppComponent]
})

export class FilterComponent implements OnInit, OnChanges {

  @Input() lang: string;
  
  private _lang:string ;


  public info: any;
  public title: any;

  constructor(private location: Location, private _route: ActivatedRoute, private router: Router, private countryService: CountriesApiService, private AppComponent: AppComponent) { }

  ngOnInit() {
    let lang = this._route.snapshot.paramMap.get('lang');
    this._lang = this.lang

    if (lang.length == 2) {
      this.title = "Language";
      this.countryService.fetchCountriesForLang(lang).subscribe(
        data => {
          this.info = data;
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
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes', changes)
    this.ngOnInit(); 
  }

  backButton() {
    this.location.back();
  }



}
