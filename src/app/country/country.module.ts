import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { CountryInfoComponent } from './country-info/country-info.component';
import { MatTooltipModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    RouterModule.forChild([
      {path: 'region/:region', component: RegionComponent},
      {path: 'country/:country', component: CountryInfoComponent}    
    ])
  ],
  declarations: [RegionComponent, CountryInfoComponent]
})
export class CountryModule { }
