import {Component, OnInit} from '@angular/core';
import { YandexMapService } from './yandex-map.service';

@Component({
  selector: 'app-yandex-map',
  template: `
  <div class="container">
    <ya-map [center]="[mapCenter[1], mapCenter[0]]" [zoom]="14" (load)="yandexMapService.onLoad($event, advert.address)" >
    </ya-map>
  </div>
  `,
  styleUrls: [ './yandex-map.component.less' ],
  providers: [
    YandexMapService
  ]
})
export class YandexMapComponent implements OnInit{
  advert;
  get mapCenter() {
    return this.yandexMapService.getCoords(this.advert.address);
  }
  constructor(
    public yandexMapService: YandexMapService
  ) { }

  ngOnInit(): void {
    
  }
}
