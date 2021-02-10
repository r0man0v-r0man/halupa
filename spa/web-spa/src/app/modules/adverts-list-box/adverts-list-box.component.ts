import { IntersectionService } from './../../services/intersection.service';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';

@Component({
  selector: 'app-adverts-list-box',
  templateUrl: './adverts-list-box.component.html',
  styleUrls: ['./adverts-list-box.component.less'],
  providers:[
    IntersectionService
  ]
})
export class AdvertsListBoxComponent implements OnInit, AfterViewInit {
  @Input()   list: IAdvert[] = [];

  @ViewChildren('cardImage') cardImages: QueryList<ElementRef>;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private _intersectionService: IntersectionService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.cardImages.changes.subscribe(()=>{
        const targets = document.querySelectorAll('[data-src]');
        const observer = new IntersectionObserver(this._intersectionService.loadImage, this._intersectionService.options);
        targets.forEach(target => {
          observer.observe(target);
        });
      })
    }
    
  }
}
