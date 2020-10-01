import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';


@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
