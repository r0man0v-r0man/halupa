import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  toggleMenu = false;
  hideButtonsLabel:boolean;
  isMobileMenu = false;
  constructor(
    public _authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.getHideButtons(window.innerWidth);
      window.addEventListener('resize', () => {
        this.getHideButtons(window.innerWidth);
      })
    }
    
  }
  private getHideButtons(width: number) {
    this.hideButtonsLabel = width < 800;
    this.isMobileMenu = width < 620; // переключение в мобильное меню
  }

  onToggle() {
    this.toggleMenu = !this.toggleMenu;
  }
  onClickLink(){
    if(this.isMobileMenu){
      this.toggleMenu = !this.toggleMenu;
    }
  }
}
