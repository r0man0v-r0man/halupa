import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsViewComponent} from "./contacts-view.component";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";



@NgModule({
  declarations: [
      ContactsViewComponent
  ],
  imports: [
    ClipboardModule,
    CommonModule,
      NzButtonModule,
      NzIconModule
  ],
  exports: [
      ContactsViewComponent
  ]
})
export class ContactsViewModule { }
