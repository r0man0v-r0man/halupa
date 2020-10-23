import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IAdvert } from '../models/advert.model';
import { URLs } from '../urls';

@Injectable()
export class AdvertService {
  /** for SSR */
  private baseUrl: string;
  headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
  }
  addAdvert(advert: IAdvert){
    this.httpClient.post<number>(URLs.addAdvertURL, advert, {headers: this.headers })
      .pipe(map((response: number) => {
        this.goToAdvert(response);
      })).subscribe();
  }

  getAdvert(id: number){
    let params = new HttpParams();
    params = params.append("id", id.toString());
    return this.httpClient.get<IAdvert>(URLs.getAdvertURL, { params : params});
  }

  private goToAdvert(response: number) {
    this.router.navigate(['adverts', response]);
  }
  navigateToAdvert(item: IAdvert) {
    this.router.navigate(['adverts', item.id]);
  }
  getAnyAdverts(pageNumber: number){
    const params = this.setHttpParams(pageNumber);
    return this.httpClient.get<IAdvert[]>(
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
}
