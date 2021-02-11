import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsListBoxComponent } from './adverts-list-box.component';
import { RouterModule } from '@angular/router';
import { PriceModule } from '../price/price.module';
import { DateAgoModule } from 'src/app/pipes/date-ago/date-ago.module';



@NgModule({
  declarations: [AdvertsListBoxComponent],
  imports: [
    CommonModule,
    PriceModule,
    RouterModule,
    DateAgoModule
  ],
  exports: [
    AdvertsListBoxComponent
  ]
})
export class AdvertsListBoxModule { }
