import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
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
export class AdvertsComponent implements OnInit, AfterViewInit {
  list: IAdvert[] = [];
  initLoading = true;
  isShowMoreButton = false;
  pageNumber = 1;
  isAnyAdverts = false;
  @ViewChildren('cardImage') cardImages: QueryList<ElementRef>;
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  };
  loadImage = (entries) => {
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
  ngAfterViewInit(): void {
    this.cardImages.changes.subscribe(()=>{
      const targets = document.querySelectorAll('[data-src]');
      const observer = new IntersectionObserver(this.loadImage, this.options);
      targets.forEach(target => {
        observer.observe(target);
      });
    })
  }

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
