import { HttpHelperService } from './../../services/http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { AdvertService } from 'src/app/services/advert.service';
@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule
  ],
  exports:[
    CabinetComponent
  ],
  providers: [
    AdvertService,
    HttpHelperService
  ]
})
export class CabinetModule { }
