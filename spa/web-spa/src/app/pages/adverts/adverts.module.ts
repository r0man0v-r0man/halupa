import { HttpHelperService } from './../../services/http.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './adverts.component';
import { AdvertsListBoxModule } from 'src/app/modules/adverts-list-box/adverts-list-box.module';
import { NgxsModule } from '@ngxs/store';
import { AdvertState } from 'src/app/store/advert/advert.state';
import { AdvertService } from 'src/app/services/advert.service';

@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule,
    AdvertsListBoxModule,
    NgxsModule.forFeature([AdvertState])
  ],
  exports:[
    AdvertsComponent
  ],
  providers:[
    AdvertService,
    HttpHelperService
  ]
})
export class AdvertsModule { }
