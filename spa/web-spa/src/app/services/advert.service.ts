import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IAdvert } from '../models/advert.model';
import { URLs } from '../urls';
import {ISearch, ISearchResult} from "../models/search.model";
import {AuthService} from "./auth.service";

@Injectable()
export class AdvertService {
  
  userAdverts: IAdvert[] = [];
  searchResult: ISearchResult;
  /** for SSR */
  private baseUrl: string;
  headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(
    private _httpClient: HttpClient,
    private router: Router,
    private _authService: AuthService
  ) { }

  getUserAdverts(){
    this._httpClient
        .get<IAdvert[]>(URLs.advert.getUserAdverts, {headers: this._authService.SecureHeaders})
        .subscribe(response => {
          this.userAdverts = [...response]
        });
  }
  
  addAdvert(advert: IAdvert){
    this._httpClient.post<number>(URLs.addAdvertURL, advert, {headers: this.headers })
      .pipe(map((response: number) => this.goToAdvert(response))).subscribe();
  }

  getAdvert(id: number){
    let params = new HttpParams();
    params = params.append("id", id.toString());
    return this._httpClient.get<IAdvert>(URLs.getAdvertURL, { params : params});
  }
  private goToAdvert(response: number) {
    this.router.navigate(['adverts', response]);
  }
  navigateToAdvert(item: IAdvert) {
    this.router.navigate(['adverts', item.id]);
  }
  getAnyAdverts(pageNumber: number){
    const params = this.setHttpParams(pageNumber);
    return this._httpClient.get<IAdvert[]>(
      URLs.getAnyAdvertsURL,
      { params: params });
  }
  /**
   * установка HttpParams
   * @param pageNumber Номер страницы
   */
  private setHttpParams(pageNumber: number) {
    return new HttpParams().set('pageNumber', pageNumber.toString());
  }

  search(value: ISearch) {
    let params = new HttpParams();
    params = params.append("locality", value.locality);
    params = params.append("pageNumber", value.pageNumber.toString());
    this._httpClient.get<IAdvert[]>(
        URLs.search.searchByLocality,
        {params: params}
    ).subscribe(response => {
      this.searchResult = {
        searchRequest: value.locality,
        advertsByLocality: [...response]
      }
    });
  }
  remove(advertId: number) {
    this._httpClient
    .delete(URLs.advert.deleteAdvert + advertId, {headers:this._authService.SecureHeaders})
    .subscribe();
  }
}
