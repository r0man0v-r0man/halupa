import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertCardComponent } from './advert-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzTagModule} from "ng-zorro-antd/tag";
import {PriceModule} from "../price/price.module";


@NgModule({
  declarations: [
    AdvertCardComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
      PriceModule
  ],
  exports:[
    AdvertCardComponent
  ]
})
export class AdvertCardModule { }
