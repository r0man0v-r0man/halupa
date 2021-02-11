import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PriceComponent} from "./price.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
      PriceComponent,
      PricePipe
  ],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
  exports:[
      PriceComponent,
      PricePipe
  ]
})
export class PriceModule { }
