import { Component } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  constructor( private _route:ActivatedRoute, private router:Router) { }



  fetchCountriesForLang(value){

    console.log("<<<",value);
    this.router.navigate(['/filter',value]);
    
  }

}
