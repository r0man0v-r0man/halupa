import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertComponent } from './advert.component';


@NgModule({
  declarations: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    NzPageHeaderModule
  ],
  exports: [
    AdvertComponent
  ]
})
export class AdvertModule { }
