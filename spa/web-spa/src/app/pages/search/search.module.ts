import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzListModule} from "ng-zorro-antd/list";
import {AdvertCardModule} from "../../modules/advert-card/advert-card.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {SwapOutline} from "@ant-design/icons-angular/icons";

const icons = [
  SwapOutline
]

@NgModule({
  declarations: [
      SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
      NzTypographyModule,
      NzListModule,
      AdvertCardModule,
      NzIconModule.forChild(icons),
    NzGridModule,
      NzButtonModule
  ]
})
export class SearchModule { }
