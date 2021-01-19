import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {SearchBoxModule} from "../search-box/search-box.module";
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    InlineSVGModule,
      SearchBoxModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
