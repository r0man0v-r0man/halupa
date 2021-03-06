import { IAdvert } from './../models/advert.model';
import { HttpHelperService } from './http.service';
import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { URLs } from '../urls';
import {ISearch, ISearchResult} from "../models/search.model";
import {AuthService} from "./auth.service";

@Injectable()
export class AdvertService {

  
  userAdverts: IAdvert[] = [];
  searchResult: ISearchResult;
  headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(
    private _httpClient: HttpClient,
    private router: Router,
    private _authService: AuthService,
    private _httpHelper: HttpHelperService
  ) { }

  fetchAdverts(pageNumber: number){
    const params = this._httpHelper.createRequestParams({pageNumber});
    return this._httpClient.get<Set<IAdvert>>(URLs.fetchAdvertsURL, { params });
  }

  create(advert: IAdvert) {
    return this._httpClient.post<IAdvert>(URLs.addAdvertURL, advert, {headers: this.headers})
  }

  getAdvert(id: IAdvert['id']) {
    const params = this._httpHelper.createRequestParams({id});
    return this._httpClient.get<IAdvert>(URLs.getAdvertURL, {params})
  }






  // depricated

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

  private goToAdvert(response: number) {
    this.router.navigate(['adverts', response]);
  }
  navigateToAdvert(item: IAdvert) {
    this.router.navigate(['adverts', item.id]);
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
    .delete(URLs.advert.deleteAdvert + advertId, {headers:this._authService.SecureHeaders, observe: 'response'})
    .subscribe(response => {
      if(response.status == 204){
        this.userAdverts.splice(this.userAdverts.findIndex(x => x.id == advertId),1);
      }
    });
  }
}
