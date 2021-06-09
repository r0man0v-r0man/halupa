import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SeoService } from './services/seo.service';
import { filter } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private _oidcSecurityService: OidcSecurityService
  ){ }
  ngOnInit() {
    this.getCurrentUrl();
    this._oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
      console.log('app authenticated', isAuthenticated);
      const at = this._oidcSecurityService.getToken();
      console.log(`Current access token is '${at}'`);
    });

  }
  /** текущий URL */
  private getCurrentUrl(){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      var routes = this.getChild(this.activatedRoute);
      routes.data.subscribe(data => {
        this.seoService.setMetaInfo(data);
      })
    });
  }

  private getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
