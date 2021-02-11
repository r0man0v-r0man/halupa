import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertComponent } from './advert.component';
import { ImageSliderModule } from 'src/app/modules/image-slider/image-slider.module';
import { YandexMapModule } from 'src/app/modules/yandex-map/yandex-map.module';
import {PriceModule} from "../../modules/price/price.module";
import {ContactsViewModule} from "../../modules/contacts-view/contacts-view.module";


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
    ContactsViewModule
  ],
  exports: [
    AdvertComponent
  ]
})
export class AdvertModule { }
