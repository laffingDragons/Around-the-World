import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatTooltipModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatOptionModule,
    MatTooltipModule
  ],
  declarations: [SelectFilterComponent],
  exports:[
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule,
    MatSelectModule, 
    MatOptionModule,
    MatTooltipModule,
    SelectFilterComponent
  ]
})
export class SharedModule { }
