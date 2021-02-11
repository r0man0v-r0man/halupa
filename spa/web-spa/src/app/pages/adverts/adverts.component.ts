import { Component, OnInit } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: [ './adverts.component.less' ],
  providers:[
    AdvertService
  ]
})
export class AdvertsComponent implements OnInit {
  list: IAdvert[] = [];
  initLoading = true;
  isShowMoreButton = false;
  pageNumber = 1;
  isAnyAdverts = false;
  
  constructor(
    private _advertService: AdvertService
  ) { }


  ngOnInit(): void {
    this.showAnyAdverts();
    
  }
  /** объявления без фильтра, любые */
  showAnyAdverts() {
    this.isAnyAdverts = true;
    this._advertService.getAnyAdverts(this.pageNumber).subscribe(response => {
      this.AddAdvertsToList(response);
    });
  }
  /** добавить объявления */
  private AddAdvertsToList(response: IAdvert[]) {
    if (response && response.length !== 0) {
      this.list = [...response];
      this.initLoading = false;
      this.isShowMoreButton = true;
    } else {
      this.list = [...response];
      this.initLoading = false;
      this.isShowMoreButton = false;
    }
    this.allowToShowMoreButton(response, false);
  }
  /** Определяемся, когда показывать кнопку "загрузить еще" */
  private allowToShowMoreButton(response: IAdvert[], isLoadMore: boolean) {
    if (isLoadMore) {
      response && response.length > 0 ? this.isShowMoreButton = true : this.isShowMoreButton = false;
    } else {
      response && response.length >= 20 ? this.isShowMoreButton = true : this.isShowMoreButton = false;
    }
  }
  /** Загрузить еще объявляений */
  onLoadMore() {
    this.initLoading = true;
    this.pageNumber++;
    if (this.isAnyAdverts) {
      this._advertService.getAnyAdverts(this.pageNumber).subscribe(response => {
        this.addLoadMoreAdvertsToList(response);
      });
    } 
    this.initLoading = false;
  }
  /** Добавить еще объявлений  */
  private addLoadMoreAdvertsToList(response: IAdvert[]) {
    if (response && response.length > 0) {
      response.forEach(advert => {
        this.list.push(advert)
      })
    }
    this.allowToShowMoreButton(response, true);
  }
}
