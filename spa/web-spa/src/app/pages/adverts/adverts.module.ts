
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzIconModule} from "ng-zorro-antd/icon";
import {SwapOutline} from "@ant-design/icons-angular/icons";
import { AdvertsListBoxModule } from 'src/app/modules/adverts-list-box/adverts-list-box.module';

const icons = [
  SwapOutline
]
@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    AdvertsListBoxModule,
    NzButtonModule,
    NzIconModule.forChild(icons)
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
