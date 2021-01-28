import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable()
export class GsapService {
  timeline = gsap.timeline();
  constructor() { }
  applyLogoAnimation(el: Element, el2: Element){
    this.timeline.from([el, el2], {
      duration: 1,
      ease: "back.inOut(2)",
      delay: 0,
      css:{
        opacity: 0,
        scale: .2,
        transformOrigin: 'center',
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
    card_blip5: Element,
    cta_action: Element,
    cta_h1: Element,
    cta_subhead: Element){
      this.timeline
      .from(card, {
        duration: 1,
        ease: "back.inOut(3)",
        delay: .5,
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
      .from(cta_action, {
        duration: .5,
        ease: "back.inOut(2)",
        css:{
          opacity: 0,
          translateY: 50
        }
      })
      .from([cta_h1,cta_subhead],{
        ease: "back.inOut(1)",
        css: {
          opacity: 0,
          translateY: -50
        }
      }, "-=.5")
  }
}
