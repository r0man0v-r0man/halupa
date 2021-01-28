import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  @ViewChild('logo') logo: ElementRef;
  constructor(
    public _authService: AuthService,
    private _gsapService: GsapService
  ) { }
  onLogoClick(){
    this._gsapService.applyLogoAnimation(this.logo.nativeElement)
  }
  ngOnInit(): void {
  }
}
