import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { AdvertsListBoxModule } from 'src/app/modules/adverts-list-box/adverts-list-box.module';

@NgModule({
  declarations: [
      SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
      AdvertsListBoxModule
  ]
})
export class SearchModule { }
