import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GsapService } from 'src/app/services/gsap.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [
    GsapService
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('logo') logo: ElementRef;
  @ViewChild('nav_btn') nav_btn: ElementRef;
  constructor(
    public _authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: any,
    private _gsapService: GsapService
  ) { }
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this._gsapService.applyLogoAnimation(
        this.logo.nativeElement,
        this.nav_btn.nativeElement)
    }
  }

  ngOnInit(): void {
  }
}
