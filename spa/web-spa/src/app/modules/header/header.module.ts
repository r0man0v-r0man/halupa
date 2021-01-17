import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  PlusOutline,
  LoginOutline,
  UserOutline,
    MenuOutline,
    SearchOutline,
    CloseOutline
} from '@ant-design/icons-angular/icons';
import {SearchBoxModule} from "../search-box/search-box.module";
import {LogoModule} from "../logo/logo.module";
import { InlineSVGModule } from 'ng-inline-svg';
const icons = [
  SearchOutline,
  PlusOutline,
  LoginOutline,
  UserOutline,
  MenuOutline,
  CloseOutline
]
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzIconModule.forChild(icons),
    InlineSVGModule,
    NzButtonModule,
      SearchBoxModule,
      LogoModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
