import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzIconModule,
    NzTypographyModule,
    NzButtonModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
