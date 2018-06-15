import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public route: Router ) { 

  }

  ngOnInit() {
  }

  /**
   * name
   */
  public routeToRegion() {
    this.route.navigate(['/region'])    
  }

}
