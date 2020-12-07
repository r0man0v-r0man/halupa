import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertComponent } from './advert.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ImageSliderModule } from 'src/app/modules/image-slider/image-slider.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { 
  PhoneOutline, 
  CopyOutline, 
  EnvironmentOutline,
  ArrowLeftOutline,
SwapOutline} from '@ant-design/icons-angular/icons';
import { YandexMapModule } from 'src/app/modules/yandex-map/yandex-map.module';
import {PriceModule} from "../../modules/price/price.module";

const icons: IconDefinition[] = [ 
  PhoneOutline, 
  CopyOutline, 
  EnvironmentOutline,
  ArrowLeftOutline,
  SwapOutline
];


@NgModule({
  declarations: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzTypographyModule,
    ImageSliderModule,
    NzModalModule,
    YandexMapModule,
    PriceModule
  ],
  exports: [
    AdvertComponent
  ]
})
export class AdvertModule { }
