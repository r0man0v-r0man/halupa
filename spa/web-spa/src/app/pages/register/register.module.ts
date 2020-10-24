import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  UserOutline,
  LockOutline
} from '@ant-design/icons-angular/icons';
const icons = [
  UserOutline,
  LockOutline
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NzFormModule,
    NzSpinModule,
    NzButtonModule,
    NzInputModule,
    NzTypographyModule,
    NzIconModule.forChild(icons)
  ]
})
export class RegisterModule { }
