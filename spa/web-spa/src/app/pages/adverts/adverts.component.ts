import { Destroyer } from './../../modules/destroyer/destroyer.helper';
import { Component, OnInit } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';
import { AdvertService } from 'src/app/services/advert.service';
import { Store } from '@ngxs/store';
import { AdvertActions } from 'src/app/store/advert/advert.action';
import { AdvertState } from 'src/app/store/advert/advert.state';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: [ './adverts.component.less' ]
})
export class AdvertsComponent extends Destroyer implements OnInit {

  loading$: Observable<boolean> = this._store.select(AdvertState.loading).pipe(takeUntil(this.destroy$));
  pageNumber: number = 1;

  constructor(
    private _store: Store
  ) { super(); }


  ngOnInit(): void {
    this._store.dispatch(new AdvertActions.Fetch(this.pageNumber))
  }

  onLoadMore() {
    this._store.dispatch(new AdvertActions.Fetch(++this.pageNumber))
  }
  onPrevPage(){
    if(this.pageNumber > 1){
      --this.pageNumber;
      this._store.dispatch(new AdvertActions.Fetch(this.pageNumber))
    }
  }
}
