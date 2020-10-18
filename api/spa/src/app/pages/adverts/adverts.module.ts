import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AdvertCardModule } from 'src/app/modules/advert-card/advert-card.module';

@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    NzListModule,
    NzButtonModule,
    NzGridModule,
    AdvertCardModule
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
