import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactInputComponent } from './contact-input.component';



@NgModule({
  declarations: [
    ContactInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ContactInputComponent
  ]
})
export class ContactInputModule { }
