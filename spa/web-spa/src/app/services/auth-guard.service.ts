import { Injectable } from '@angular/core';
import { RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _store: Store
  ) { }
  canActivate(router, state: RouterStateSnapshot):Observable<boolean>{
    return new Observable<boolean>(observer => {
      const isAuthenticated = this._store.selectSnapshot(AuthState.isAuthenticated);
      if(isAuthenticated){
        return observer.next(true);
      } else {
        this._router.navigate(['/login'], { queryParams : { returnUrl: state.url }});
        return observer.next(false);
      }
    });
  }
}