import { isPlatformBrowser } from '@angular/common';
import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {IAdvert} from 'src/app/models/advert.model';
import {AdvertService} from 'src/app/services/advert.service';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: [ './advert-card.component.less' ],
  providers: [
    AdvertService
  ]
})
export class AdvertCardComponent implements OnInit {
 /** объявление */
 @Input() item: IAdvert;
 options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05
};
loadImage = (entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')){
          entry.target.src = entry.target.getAttribute('data-src');
          entry.target.onload = () => {
              entry.target.parentNode.classList.remove('loading');
              entry.target.removeAttribute('data-src');
          };
      }
  });
};
 constructor(
   private _advertService: AdvertService,
   @Inject(PLATFORM_ID) private platformId: any
 ) { }

 ngOnInit(): void {
  if(isPlatformBrowser(this.platformId)){
    const targets = document.querySelectorAll('[data-src]');
    const observer = new IntersectionObserver(this.loadImage, this.options);
    targets.forEach(target => {
      observer.observe(target);
    });
  }
 }


 /** переход на страницу с информацией об объявлении */
 onCardClick(item: IAdvert) {
   this._advertService.navigateToAdvert(item);
 }
}
