import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    NzListModule,
    NzButtonModule,
    NzGridModule
  ],
  exports:[
    AdvertsComponent
  ]
})
export class AdvertsModule { }
