import { PriceModule } from './../../modules/price/price.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzIconModule} from "ng-zorro-antd/icon";
import {SwapOutline} from "@ant-design/icons-angular/icons";
import { RouterModule } from '@angular/router';

const icons = [
  SwapOutline
]
@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    NzButtonModule,
    PriceModule,
    RouterModule,
    NzIconModule.forChild(icons)
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
