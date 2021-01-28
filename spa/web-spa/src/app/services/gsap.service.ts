import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable()
export class GsapService {
  timeline = gsap.timeline();
  constructor() { }
  applyLogoAnimation(el: Element){
    this.timeline.from(el, {
      repeat: 0,
      duration: .9,
      ease: "back.inOut(1)",
      css:{
        translateY: -90
      }
    })
  }
  applyHeroCtaAnimation(
    card: Element, 
    cardTop: Element, 
    cardIcon: Element,
    card_blip1: Element, 
    card_blip2: Element,
    card_blip3: Element, 
    card_blip4: Element,
    card_blip5: Element){
      this.timeline
      .from(card, {
        repeat: 0,
        duration: 1,
        ease: "back.inOut(3)",
        css: {
          opacity: 0,
          scale: .2,
          transformOrigin: 'center',
        }
      },"=.2")
      .from(cardTop, {
        css:{
          scaleY: 0,
          transformOrigin: 'bottom'
        }
      })
      .from(cardIcon, {
        delay:.5,
        css:{
          scale: 0,
          transformOrigin: 'center'
        }
      }, "-=.7")
      .from(card_blip1,{
        css:{
          scaleX: 0
        }
      })
      .from(card_blip2,{
        css:{
          scaleX: 0
        }
      }, "-=.2")
      .from(card_blip3,{
        css:{
          scaleX: 0
        }
      }, "-=.3")
      .from(card_blip4,{
        css:{
          scaleX: 0
        }
      }, "-=.6")
      .from(card_blip5,{
        css:{
          scaleX: 0
        }
      }, "-=.7")
  }
}
