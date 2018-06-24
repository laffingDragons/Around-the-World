import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { trigger, transition, useAnimation } from '@angular/animations'; //External animation module
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class HomeComponent implements OnInit {

  public fadeIn: any;

  constructor( public route: Router ) { 

  }

  ngOnInit() {
  }

 
  public routeToRegion() {

    this.route.navigate(['/region']);
        
  }

}
