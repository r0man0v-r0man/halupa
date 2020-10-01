import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  PlusCircleOutline
} from '@ant-design/icons-angular/icons';
const icons = [
  PlusCircleOutline
]
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzTypographyModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class HeaderModule { }
