import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBoxComponent} from "./search-box.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";



@NgModule({
  declarations: [
      SearchBoxComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NzButtonModule,
      NzIconModule,
      NzInputModule
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class SearchBoxModule { }
