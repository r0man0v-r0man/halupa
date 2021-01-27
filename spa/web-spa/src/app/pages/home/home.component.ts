import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('card') card: ElementRef;
  @ViewChild('card_top') cardTop: ElementRef;
  @ViewChild('card_icon') cardIcon: ElementRef;
  @ViewChild('card_blip1') card_blip1: ElementRef;
  @ViewChild('card_blip2') card_blip2: ElementRef;
  @ViewChild('card_blip3') card_blip3: ElementRef;
  @ViewChild('card_blip4') card_blip4: ElementRef;
  @ViewChild('card_blip5') card_blip5: ElementRef;
  @ViewChild('whole_card') whole_card: ElementRef;
  @ViewChild('cta') cta: ElementRef;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { 
  }
  ngAfterViewInit(): void {
    const card: Element = this.card.nativeElement;
    const cardTop: Element = this.cardTop.nativeElement;
    const cardIcon: Element = this.cardIcon.nativeElement;
    const card_blip1: Element = this.card_blip1.nativeElement;
    const card_blip2: Element = this.card_blip2.nativeElement;
    const card_blip3: Element = this.card_blip3.nativeElement;
    const card_blip4: Element = this.card_blip4.nativeElement;
    const card_blip5: Element = this.card_blip5.nativeElement;
    const whole_card: Element = this.whole_card.nativeElement;
    const cta: Element = this.cta.nativeElement;

    const timeline = gsap.timeline();
    const timeline2 = gsap.timeline({defaults:{duration: 1.5, delay: 3.7}});
    const timeline3 = gsap.timeline();
    if(isPlatformBrowser(this.platformId)){
      timeline3
      .from(cta, {
        duration: 1,
        delay: 1,
        css:{
          opacity: 0,
          translateX: 50
        }
      });
    }
    
    timeline2
    .to(whole_card,{
       repeat: -1,
       yoyo: true,
       css: {
         translateX: -10,
         translateY: -10
       }
    });
    timeline
    .from(card, {
      duration: 1,
      ease: "back.inOut(3)",
      delay: 1,
      css: {
        opacity: 0,
        scale: .2,
        transformOrigin: 'center',
      }
    },"=.2")
    .from(cardTop, {
      css:{
        scaleY: 0,
        transformOrigin: 'top'
      }
    })
    .from(cardIcon, {
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

  ngOnInit(): void {
    
  }

}
