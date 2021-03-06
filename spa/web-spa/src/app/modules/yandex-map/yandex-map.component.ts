import { isPlatformBrowser } from '@angular/common';
import {AfterContentInit, Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import { YandexMapService } from './yandex-map.service';

@Component({
  selector: 'app-yandex-map',
  template: `
  <div *ngIf="isReady" class="map">
    <ya-map [center]="[mapCenter[1], mapCenter[0]]" [zoom]="14" (load)="yandexMapService.onLoad($event, advert.yandexAddress)" >
    </ya-map>
  </div>
  `,
  styleUrls: [ './yandex-map.component.less' ],
  providers: [
    YandexMapService
  ]
})
export class YandexMapComponent implements AfterContentInit{
  @Input() advert;
  isReady: boolean;
  get mapCenter() {
    return this.yandexMapService.getCoords(this.advert.yandexAddress);
  }
  constructor(
    public yandexMapService: YandexMapService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }
  ngAfterContentInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.isReady = true;
    }
  }

}
