import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import service
import{ CountryService } from './country.service'


import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
