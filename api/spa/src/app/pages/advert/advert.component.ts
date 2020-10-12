import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-advert',
  template: `
    <p>
      advert works!
    </p>
    <pre>{{ advert | json }}</pre>
  `,
  styles: [
  ],
  providers:[
    AdvertService
  ]
})
export class AdvertComponent implements OnInit {
  advert;
  constructor(
    private advertService: AdvertService
  ) { }

  ngOnInit(): void {
    this.advertService.getAdvert(2).subscribe(response =>{
      console.log(response);
      this.advert = response;
    })
  }

}
