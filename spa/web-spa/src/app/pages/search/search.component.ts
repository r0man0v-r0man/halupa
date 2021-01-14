import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {ActivatedRoute} from "@angular/router";
import {ISearch} from "../../models/search.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  providers: [
      AdvertService
  ]
})
export class SearchComponent implements OnInit, AfterViewInit {
  initLoading = true;
  isShowMoreButton = false;
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
      private route: ActivatedRoute,
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
    this.route.queryParams.subscribe(params => {
      this._advertService.search(params as ISearch)
    })
    this.initLoading = false;
  }
  get searchResult(){
    return this._advertService.searchResult;
  }



  /** Загрузить еще объявляений */
  onLoadMore() {
    this.initLoading = true;
    // this.pageNumber++;
    // if (this.isAnyAdverts) {
    //   this._advertService.getAnyAdverts(this.pageNumber).subscribe(response => {
    //     this.addLoadMoreAdvertsToList(response);
    //   });
    // }
    // else {
    //   this._advertService.getAnyAdverts(this.pageNumber, this.filterOption).subscribe(response => {
    //     this.addLoadMoreAdvertsToList(response);
    //   });
    // }
    this.initLoading = false;
  }
}
