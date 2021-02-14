import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsViewComponent} from "./contacts-view.component";



@NgModule({
  declarations: [
      ContactsViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ContactsViewComponent
  ]
})
export class ContactsViewModule { }
