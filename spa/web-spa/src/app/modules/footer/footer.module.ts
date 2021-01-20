import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
