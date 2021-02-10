import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, ElementRef, QueryList, ViewChildren, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { IntersectionService } from 'src/app/services/intersection.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less' ],
  providers:[
    IntersectionService
  ]
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
    /** картинки для карусели */
    @Input() images: Array<{ url: string; alt: string; isVisible: boolean; id: number; src: string; }> = [];
    /** номер слайдера */
    slideNo: number = 0;
    @ViewChildren('slideImage') slideImages: QueryList<ElementRef>;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private _intersectionService: IntersectionService
    ) { }
    ngAfterViewInit(): void {
        if(isPlatformBrowser(this.platformId)){
                const targets = document.querySelectorAll('[data-src]');
                const observer = new IntersectionObserver(this._intersectionService.loadImage, this._intersectionService.options);
                targets.forEach(target => {
                  observer.observe(target);
                });
        }
    }

    ngOnInit(): void {
        this.сarousel(this.slideNo);
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
    }
}
