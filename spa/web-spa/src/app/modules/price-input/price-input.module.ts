import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceInputComponent } from './price-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PriceInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PriceInputComponent
  ]
})
export class PriceInputModule { }
