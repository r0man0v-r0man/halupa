import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
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
    private router: Router,
    private injector: Injector
  ) { 
    this.baseUrl = this.injector.get('BASE_URL');
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
    return this.httpClient.get<IAdvert>(`${this.baseUrl}${URLs.getAdvertURL}`, { params : params});
  }

  private goToAdvert(response: number) {
    this.router.navigate(['adverts', response]);
  }
}
