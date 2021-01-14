import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsListBoxComponent } from './adverts-list-box.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PriceModule } from '../price/price.module';



@NgModule({
  declarations: [AdvertsListBoxComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    PriceModule,
    RouterModule
  ],
  exports: [
    AdvertsListBoxComponent
  ]
})
export class AdvertsListBoxModule { }
