import { Component, Input, OnInit } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';
import { AdvertService } from 'src/app/services/advert.service';

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
 constructor(
   private _advertService: AdvertService
 ) { }

 ngOnInit(): void {
 }

 /** переход на страницу с информацией об объявлении */
 onCardClick(item: IAdvert) {
   this._advertService.navigateToAdvert(item);
 }
}
