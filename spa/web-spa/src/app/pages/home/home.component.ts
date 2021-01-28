import { GsapService } from 'src/app/services/gsap.service';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [
    GsapService
  ]
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
  @ViewChild('cta_action') cta_action: ElementRef;
  @ViewChild('cta_h1') cta_h1: ElementRef;
  @ViewChild('cta_subhead') cta_subhead: ElementRef;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private _gsapService: GsapService
  ) { }
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this._gsapService.applyHeroCtaAnimation(
        this.card.nativeElement, 
        this.cardTop.nativeElement, 
        this.cardIcon.nativeElement, 
        this.card_blip1.nativeElement, 
        this.card_blip2.nativeElement, 
        this.card_blip3.nativeElement, 
        this.card_blip4.nativeElement, 
        this.card_blip5.nativeElement,
        this.cta_action.nativeElement,
        this.cta_h1.nativeElement,
        this.cta_subhead.nativeElement)
    }
  }

  ngOnInit(): void {
  }

}
