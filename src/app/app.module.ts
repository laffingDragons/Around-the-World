import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MatInputModule,MatButtonModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatTooltipModule, MatAutocompleteModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryModule } from './country/country.module'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from './shared/shared.module';
import { CountriesApiService } from './countries-api.service';
import { MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    CountryModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatInputModule,
    WavesModule,    
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'filter/:lang', component: FilterComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: '**', component:HomeComponent}
    ]),
    SharedModule
  ],
  providers: [
    CountriesApiService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
