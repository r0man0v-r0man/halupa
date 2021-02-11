
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { AdvertsListBoxModule } from 'src/app/modules/adverts-list-box/adverts-list-box.module';

@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    AdvertsListBoxModule
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
