import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SeoService } from './services/seo.service';
import { filter } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { LocalStorageService } from './services/local-storage.service';
import { AuthActions } from './store/auth/auth.action';

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
    private _oidcSecurityService: OidcSecurityService,
    private _store: Store
  ){ }
  ngOnInit() {
    this.getCurrentUrl();
    this._oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
      console.log('app authenticated', isAuthenticated);
      this._store.dispatch(new AuthActions.Logined())
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
