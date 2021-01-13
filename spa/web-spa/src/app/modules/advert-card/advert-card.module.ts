import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertCardComponent } from './advert-card.component';
import {PriceModule} from "../price/price.module";


@NgModule({
  declarations: [
    AdvertCardComponent
  ],
  imports: [
    CommonModule,
      PriceModule
  ],
  exports:[
    AdvertCardComponent
  ]
})
export class AdvertCardModule { }
