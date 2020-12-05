import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AdvertCardModule } from 'src/app/modules/advert-card/advert-card.module';
import {NzIconModule} from "ng-zorro-antd/icon";
import {SwapOutline} from "@ant-design/icons-angular/icons";

const icons = [
  SwapOutline
]
@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    NzListModule,
    NzButtonModule,
    NzGridModule,
    AdvertCardModule,
      NzIconModule.forChild(icons)
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
