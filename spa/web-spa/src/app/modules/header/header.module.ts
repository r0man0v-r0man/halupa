import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  PlusOutline
} from '@ant-design/icons-angular/icons';
const icons = [
  PlusOutline
]
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzIconModule.forChild(icons),
    NzButtonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
