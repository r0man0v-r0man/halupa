import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<mat-slider min="1" max="100" step="1" value="1"></mat-slider>`,
  styles: []
})
export class AppComponent {
  title = 'spa';
}
