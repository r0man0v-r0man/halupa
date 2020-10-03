import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    NzTypographyModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule
  ],
  exports:[
    AddComponent
  ]
})
export class AddModule { }
