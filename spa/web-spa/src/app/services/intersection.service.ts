import { Injectable } from '@angular/core';

@Injectable()
export class IntersectionService {
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  };
  constructor() { }
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
}
