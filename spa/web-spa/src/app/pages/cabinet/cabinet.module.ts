import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  LogoutOutline
} from '@ant-design/icons-angular/icons';
const icons = [
  LogoutOutline
]
@NgModule({
  declarations: [CabinetComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    NzButtonModule,
    NzIconModule.forChild(icons)
  ],
  exports:[
    CabinetComponent
  ]
})
export class CabinetModule { }
