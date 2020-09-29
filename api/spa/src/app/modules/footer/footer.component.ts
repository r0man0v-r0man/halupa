import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    halupa.by - Сайт по аренде и продаже недвижимости, {{ currentYear }} - Created by <a [href]="linkedInUrl" rel="noreferrer" target="_blank">Романов Роман</a>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  linkedInUrl: string = 'https://www.linkedin.com/in/roman-romanov-276b0417a';
  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
