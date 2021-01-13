import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertCardComponent } from './advert-card.component';
import {PriceModule} from "../price/price.module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdvertCardComponent
  ],
  imports: [
    CommonModule,
      PriceModule,
      RouterModule
  ],
  exports:[
    AdvertCardComponent
  ]
})
export class AdvertCardModule { }
