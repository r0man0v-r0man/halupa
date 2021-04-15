import { Destroyer } from './../../modules/destroyer/destroyer.helper';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { IAdvert } from 'src/app/models/advert.model';
import { Store } from '@ngxs/store';
import { AdvertActions } from 'src/app/store/advert/advert.action';
import { takeUntil } from 'rxjs/operators';
import { AdvertState } from 'src/app/store/advert/advert.state';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.less' ]
})
export class AdvertComponent extends Destroyer implements OnInit {

  advert$: Observable<IAdvert> = this._store.select(AdvertState.getAdvert).pipe(takeUntil(this.destroy$));

  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
    private location: Location
  ) { super(); }

  ngOnInit(): void {
    this.initPage();
  }
  
  /** инициализация страницы */
  private initPage() {
    this._route.params.subscribe((params: Params) => {
      this._store.dispatch(new AdvertActions.Select(params['id']))
    });
  }

  onBack(): void {
    this.location.back();
  }
}
