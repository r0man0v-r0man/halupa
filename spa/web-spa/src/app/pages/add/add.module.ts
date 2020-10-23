import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import {
  UploadOutline,
  DeleteOutline
} from '@ant-design/icons-angular/icons';
const icons = [
  UploadOutline,
  DeleteOutline
]
@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    NzTypographyModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzInputModule,
    NzUploadModule,
    NzInputNumberModule
  ],
  exports:[
    AddComponent
  ]
})
export class AddModule { }
