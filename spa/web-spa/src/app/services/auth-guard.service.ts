import { Injectable } from '@angular/core';
import { RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) { }
  canActivate(router, state: RouterStateSnapshot):Observable<boolean>{
    return new Observable<boolean>(observer => {
      this._authService.isLogedIn().subscribe((response:boolean)=>{
        if(response){
          return observer.next(true);
        }
        else{
          this._router.navigate(['/login'], { queryParams : { returnUrl: state.url }});
          return observer.next(false);
        }
      })
    });
  }
}