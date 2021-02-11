import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from 'src/app/services/advert.service';
import { Location } from '@angular/common';
import { IAdvert } from 'src/app/models/advert.model';
import { IUploadImage } from 'src/app/models/uploadImage';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.less' ],
  providers:[
    AdvertService
  ]
})
export class AdvertComponent implements OnInit {
  advert: IAdvert;
  /** изображения для слайдера */
  images: Array<{ url: string; alt: string; isVisible: boolean; id: number }> = [];
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
        if(response) {
          this.advert = response;
          this.initSlides(this.advert.images);
        }
    });
  }

  /** инициализация страницы */
  private initPage() {
    this.route.params.subscribe((params: Params) => {
      this.getAdvert(params['id']);
    });
  }
  /** преобразование картинок в слайды */
  private initSlides(images: IUploadImage[]) {
    const slides: Array<{ url: string; alt: string; isVisible: boolean; id: number; src: string; }> = [];
    images.forEach((image, index) => {
      const img = {
        url: '/img/600/' + image.fileName,
        alt: this.advert.yandexAddress.geoObject.name,
        isVisible: false,
        id: index,
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' // для лайтхауса
      };
      slides.push(img);
    });
    this.images = [...slides];
  }
  onBack(): void {
    this.location.back();
  }
}
