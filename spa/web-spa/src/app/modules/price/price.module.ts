import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PriceComponent} from "./price.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PricePipe } from './price.pipe';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {SwapOutline} from "@ant-design/icons-angular/icons";

const icons = [
    SwapOutline
]
@NgModule({
  declarations: [
      PriceComponent,
      PricePipe
  ],
  imports: [
    CommonModule,
      NzTypographyModule,
      FormsModule,
      ReactiveFormsModule,
      NzButtonModule,
      NzIconModule.forChild(icons)
  ],
  exports:[
      PriceComponent,
      PricePipe
  ]
})
export class PriceModule { }
