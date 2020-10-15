import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertComponent } from './advert.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PhoneOutline, CopyOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ImageSliderModule } from 'src/app/modules/image-slider/image-slider.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
const icons: IconDefinition[] = [ PhoneOutline, CopyOutline ];
@NgModule({
  declarations: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    NzPageHeaderModule,
    NzTagModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzTypographyModule,
    ImageSliderModule,
    NzDescriptionsModule
  ],
  exports: [
    AdvertComponent
  ]
})
export class AdvertModule { }
