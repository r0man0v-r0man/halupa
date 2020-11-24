import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceInputComponent } from './price-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
  declarations: [
    PriceInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzFormModule,
    NzInputNumberModule
  ],
  exports:[
    PriceInputComponent
  ]
})
export class PriceInputModule { }
