import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('nav_links') nav_links: ElementRef;
  @ViewChild('app_menu') app_menu: ElementRef;
  isToggleMenu: boolean;

  constructor(
    public _authService: AuthService,
    private _gsapService: GsapService,
    private _renderer: Renderer2
  ) { }
  onLogoClick(){
    this._gsapService.applyLogoAnimation(this.logo.nativeElement)
    this.onToggleMenu(true);
  }
  ngOnInit(): void {
  }
  onToggleMenu(isLogoClick?: boolean){
    if(isLogoClick){
      this.isToggleMenu = false;
      this._renderer.setStyle(this.nav_links.nativeElement, 'display', 'none');
      this._renderer.setStyle(this.app_menu.nativeElement, 'transform','unset')
    } else {
      this.isToggleMenu = !this.isToggleMenu;
      this._renderer.setStyle(this.nav_links.nativeElement, 'display', this.isToggleMenu?'block':'none');
      this._renderer.setStyle(this.app_menu.nativeElement, 'transform', this.isToggleMenu?'rotate(90deg)':'unset')
    }
  }
  onLogOut(){
    this.onToggleMenu(false);
    this._authService.logOut();
  }
}
