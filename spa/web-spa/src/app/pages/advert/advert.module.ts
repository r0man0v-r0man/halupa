import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertComponent } from './advert.component';
import { ImageSliderModule } from 'src/app/modules/image-slider/image-slider.module';
import { YandexMapModule } from 'src/app/modules/yandex-map/yandex-map.module';
import {PriceModule} from "../../modules/price/price.module";
import {ContactsViewModule} from "../../modules/contacts-view/contacts-view.module";
import { NgxsModule } from '@ngxs/store';
import { AdvertState } from 'src/app/store/advert/advert.state';
import { AdvertService } from 'src/app/services/advert.service';
import { HttpHelperService } from 'src/app/services/http.service';


@NgModule({
  declarations: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    ImageSliderModule,
    YandexMapModule,
    PriceModule,
    ContactsViewModule,
    NgxsModule.forFeature([AdvertState])
  ],
  exports: [
    AdvertComponent
  ],
  providers:[
    AdvertService,
    HttpHelperService
  ]
})
export class AdvertModule { }
