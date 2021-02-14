import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { FeatureMember, YandexResponseGeocoder } from 'src/app/models/yandex';

@Injectable()
export class GeocoderService {
  url = 'https://geocode-maps.yandex.ru/1.x/';
  apiKey = '85e03f02-25be-40b3-971e-733f2a03e620';
  format = 'json';
  /** значение поля ввода адреса */
  searchChange$ = new Subject<string>();
  optionList: FeatureMember[];
  constructor(
    private httpClient: HttpClient
  ) { 
    const getList = (value: string) =>
      this.httpClient
        .get<YandexResponseGeocoder>(`${this.url}?apikey=${this.apiKey}&format=${this.format}&geocode=${value}`)
        .pipe(map((res) => res ));
    const optionList$: Observable<YandexResponseGeocoder> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(1000), distinctUntilChanged())
      .pipe(filter( val => val.length > 5 ))
      .pipe(switchMap(getList));
    optionList$.subscribe(data => {
      this.optionList = data.response.GeoObjectCollection.featureMember;
    });
  }
  onSearch(value: string) {
    this.searchChange$.next(value);
  }
}
