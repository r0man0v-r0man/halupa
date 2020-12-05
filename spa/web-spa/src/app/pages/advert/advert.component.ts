import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from 'src/app/services/advert.service';
import { Location } from '@angular/common';
import { IAdvert } from 'src/app/models/advert.model';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { YandexMapComponent } from 'src/app/modules/yandex-map/yandex-map.component';
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
  isShowPhone = false;
  /** изображения для слайдера */
  images: Array<{ url: string; alt: string; isVisible: boolean; id: number }> = [];
  constructor(
    private route: ActivatedRoute,
    private advertService: AdvertService,
    private location: Location,
    private _modalService: NzModalService
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
  private initSlides(images: NzUploadFile[]) {
    const slides: Array<{ url: string; alt: string; isVisible: boolean; id: number }> = [];
    images.forEach((image, index) => {
      const img = {
        url: image.linkProps.download,
        alt: this.advert.address.geoObject.name,
        isVisible: false,
        id: index
      };
      slides.push(img);
    });
    this.images = [...slides];
  }
  onBack(): void {
    this.location.back();
  }
  onShowPhone(){
    this.isShowPhone = !this.isShowPhone;
    setTimeout(() => {
      this.isShowPhone = !this.isShowPhone;
    }, 10000);
  }
  onShowMap(){
    const modal: NzModalRef = this._modalService.create({
      nzTitle: `${this.advert.address.geoObject.name}`,
      nzContent: YandexMapComponent,
      nzComponentParams: {
        advert: this.advert
      },
      nzFooter: [
        {
          label: 'Закрыть',
          onClick: () => modal.destroy()
        }
      ]
    })
  }
}
