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
    this.httpClient.get<IAdvert>(URLs.getAdvertURL).subscribe();
  }

  private goToAdvert(response: number) {
    this.router.navigate(['adverts', response]);
  }
}
