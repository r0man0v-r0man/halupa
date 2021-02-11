import { Component, OnInit, Input } from '@angular/core';
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
    /** картинки для карусели */
    @Input() images: Array<{ url: string; alt: string; isVisible: boolean; id: number; src: string; }> = [];
    /** номер слайдера */
    slideNo: number = 0;
    constructor( ) { }

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
