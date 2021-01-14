import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';

@Component({
  selector: 'app-adverts-list-box',
  templateUrl: './adverts-list-box.component.html',
  styleUrls: ['./adverts-list-box.component.less']
})
export class AdvertsListBoxComponent implements OnInit, AfterViewInit {
  @Input()   list: IAdvert[] = [];

  @ViewChildren('cardImage') cardImages: QueryList<ElementRef>;
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  };
  loadImage = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')){
            entry.target.src = entry.target.getAttribute('data-src');
            entry.target.onload = () => {
                entry.target.parentNode.classList.remove('loading');
                entry.target.removeAttribute('data-src');
            };
        }
    });
  };

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.cardImages.changes.subscribe(()=>{
      const targets = document.querySelectorAll('[data-src]');
      const observer = new IntersectionObserver(this.loadImage, this.options);
      targets.forEach(target => {
        observer.observe(target);
      });
    })
  }
}
