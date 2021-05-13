import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceInputModule } from 'src/app/modules/price-input/price-input.module';
import { AreaInputModule } from 'src/app/modules/area-input/area-input.module';
import { ContactInputModule } from 'src/app/modules/contact-input/contact-input.module';
import { AdvertService } from 'src/app/services/advert.service';
import { HttpHelperService } from 'src/app/services/http.service';
import { NgxsModule } from '@ngxs/store';
import { AdvertState } from 'src/app/store/advert/advert.state';

@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PriceInputModule,
    AreaInputModule,
    ContactInputModule,
    NgxsModule.forFeature([AdvertState])
  ],
  exports:[
    AddComponent
  ],
  providers:[
    AdvertService,
    HttpHelperService
  ]
})
export class AddModule { }
