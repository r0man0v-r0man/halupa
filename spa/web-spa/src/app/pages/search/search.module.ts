import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {SwapOutline} from "@ant-design/icons-angular/icons";
import { AdvertsListBoxModule } from 'src/app/modules/adverts-list-box/adverts-list-box.module';

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
      AdvertsListBoxModule,
      NzIconModule.forChild(icons),
      NzButtonModule
  ]
})
export class SearchModule { }
