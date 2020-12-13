import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {IAdvert} from "../../models/advert.model";
import {ISearch} from "../../models/search.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  providers: [
      AdvertService
  ]
})
export class SearchComponent implements OnInit {
  initLoading = true;
  isShowMoreButton = false;
  constructor(
      private _advertService: AdvertService,
      private route: ActivatedRoute
  ) { }

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
