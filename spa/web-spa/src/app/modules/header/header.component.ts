import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GsapService } from 'src/app/services/gsap.service';
import { AuthActions } from 'src/app/store/auth/auth.action';
import { AuthState } from 'src/app/store/auth/auth.state';
import { Destroyer } from '../destroyer/destroyer.helper';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [
    GsapService
  ]
})
export class HeaderComponent extends Destroyer implements OnInit {

  isAuthenticated$: Observable<boolean> = this._store.select(AuthState.isAuthenticated).pipe(takeUntil(this.destroy$));

  @ViewChild('logo') logo: ElementRef;
  @ViewChild('nav_links') nav_links: ElementRef;
  @ViewChild('app_menu') app_menu: ElementRef;
  isToggleMenu: boolean;

  constructor(
    private _store: Store,
    private _gsapService: GsapService,
    private _renderer: Renderer2
  ) { super(); }
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
    this._store.dispatch(new AuthActions.Logout());
  }
}
