import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from 'src/app/services/advert.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styles: [
  ],
  providers:[
    AdvertService
  ]
})
export class AdvertComponent implements OnInit {
  advert;
  constructor(
    private route: ActivatedRoute,
    private advertService: AdvertService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initPage();
  }
  private getAdvert(id: number) {
    this.advertService.getAdvert(id).subscribe(response => {
      this.advert = response;
    });
  }

  /** инициализация страницы */
  private initPage() {
    this.route.params.subscribe((params: Params) => {
      this.getAdvert(params['id']);
    });
  }
  onBack(): void {
    this.location.back();
  }
}
