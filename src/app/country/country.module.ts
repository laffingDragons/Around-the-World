import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { CountryInfoComponent } from './country-info/country-info.component';
import { MatProgressSpinnerModule, MatTooltipModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    FilterPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    WavesModule,
    RouterModule.forChild([
      {path: 'region/:region', component: RegionComponent},
      {path: 'country/:country', component: CountryInfoComponent}    
    ])
  ],
  declarations: [RegionComponent, CountryInfoComponent]
})
export class CountryModule { }
