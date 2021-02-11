import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaInputComponent } from './area-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AreaInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AreaInputComponent
  ]
})
export class AreaInputModule { }
