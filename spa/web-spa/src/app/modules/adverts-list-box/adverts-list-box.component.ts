import { Destroyer } from './../destroyer/destroyer.helper';
import { IntersectionService } from './../../services/intersection.service';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdvertState } from 'src/app/store/advert/advert.state';

@Component({
  selector: 'app-adverts-list-box',
  templateUrl: './adverts-list-box.component.html',
  styleUrls: ['./adverts-list-box.component.less'],
  providers:[
    IntersectionService
  ]
})
export class AdvertsListBoxComponent extends Destroyer implements AfterViewInit {
  adverts$: Observable<IAdvert[]> = this._store.select(AdvertState.getAdverts).pipe(takeUntil(this.destroy$));

  @ViewChildren('cardImage') cardImages: QueryList<ElementRef>;
  
  constructor(
    private _store: Store,
    @Inject(PLATFORM_ID) private platformId: any,
    private _intersectionService: IntersectionService
  ) { super(); }

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
