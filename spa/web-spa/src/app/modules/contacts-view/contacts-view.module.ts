import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsViewComponent} from "./contacts-view.component";
import {ClipboardModule} from "@angular/cdk/clipboard";



@NgModule({
  declarations: [
      ContactsViewComponent
  ],
  imports: [
    ClipboardModule,
    CommonModule
  ],
  exports: [
      ContactsViewComponent
  ]
})
export class ContactsViewModule { }
