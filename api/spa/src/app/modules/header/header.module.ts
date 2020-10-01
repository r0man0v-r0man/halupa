import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzTypographyModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
