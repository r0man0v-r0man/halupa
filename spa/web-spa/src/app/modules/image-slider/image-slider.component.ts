import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';
import { IntersectionService } from 'src/app/services/intersection.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less' ],
  providers:[
    IntersectionService
  ]
})
export class ImageSliderComponent implements OnInit {
    imgWidth: number;

    /** картинки для карусели */
    images: Array<{ 
        url: string; 
        alt?: string; 
        isVisible: boolean; 
        id: number; 
        src: string; 
        width: number}> = [];
    @Input() advert: IAdvert;
    /** номер слайдера */
    slideNo: number = 0;
    constructor( 
        @Inject(PLATFORM_ID) private platformId: any
    ) { }
    ngOnInit(): void {
        this.getWindowWidth();
        this.initSlides(this.advert);
        this.сarousel(this.slideNo);
    }
    private getWindowWidth(){
        if(isPlatformBrowser(this.platformId)){
          this.imgWidth = window.innerWidth < 660 
          ? window.innerWidth - 49
          : 600;
        }
      }
  /** преобразование картинок в слайды */
  private initSlides(advert: IAdvert) {
    const slides: Array<{ url: string; alt?: string; isVisible: boolean; id: number; src: string; width: number;}> = [];
    advert.images.forEach((image, index) => {
      const img = {
        width: this.imgWidth,
        url: `/img/${this.imgWidth}/${image.fileName}`,
        alt: advert.yandexAddress.geoObject.name,
        isVisible: false,
        id: index,
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' // для лайтхауса
      };
      slides.push(img);
    });
    this.images = [...slides];
  }
    /** предыдущее изображение */
    prev(){
        this.slideNo === 0 ? this.slideNo : this.slideNo--;
        this.сarousel(this.slideNo);
    }
    /** следующее изображение */
    next(){
        this.slideNo === this.images.length - 1 ? this.slideNo : this.slideNo++;
        this.сarousel(this.slideNo);
    }
    /** инициализация карусели изображений */
    сarousel(index: number){
        const activeSlideIndex = this.images.findIndex(img => img.id === index);
        this.showSlide(activeSlideIndex);
    }

    /** показать слайд */
    private showSlide(activeSlideIndex: number) {
        this.images.map((image) => {
            image.id === activeSlideIndex ? image.isVisible = true : image.isVisible = false;
        });
        this.replaceSrcByUrl(activeSlideIndex); 
    }
    /**
     * Замена заглушек настоящими ссылками на изображения
     * для сео оптимизации
     * @param activeSlideIndex номер слайда
     */
    private replaceSrcByUrl(activeSlideIndex: number) {
        if (this.images[activeSlideIndex].src !== this.images[activeSlideIndex].url) {
            this.images[activeSlideIndex].src = this.images[activeSlideIndex].url;
        }
    }
}
