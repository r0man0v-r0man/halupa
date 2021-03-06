import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { URLs } from '../urls';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(
    private _httpService: HttpClient,
    private _localStorage: LocalStorageService
  ) { }

  /**login user */
  login(user: IUser):Observable<any>{
    return this._httpService.post(URLs.loginURL, user)
  }
  /**logout user */
  logOut(){
    this._localStorage.removeItem("access_token");
  }
  /**check the existing username */
  IsUserNameExist(userName: string){
    return this._httpService.get(URLs.isUserNameExistURL + '/' + userName);
  }
  /** register new user */
  registerUser(user: IUser): Observable<boolean>{
    return this._httpService.post<boolean>(URLs.registerURL, user, { headers: this.headers })
  }
  /** Is User Login */
  isLogedIn(): Observable<boolean>{
    
    return new Observable<boolean>(observer => {
      const jwtHelper = new JwtHelperService();
      let token = this._localStorage.getItem('access_token');
      
      if(!token) return observer.next(false);

      const isExpired = jwtHelper.isTokenExpired(token);
  
      return observer.next(!isExpired);
    })
  }
  /**
  * текущий пользователь
  */
  get currentUser(){
    const token = this._localStorage.getItem('access_token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }
  get Token(){
    const token = this._localStorage.getItem('access_token');
    if(!token) return null;
    const XCMG = `Bearer ${token}`;
    return {
      Authorization: XCMG
    }
  }
  get SecureHeaders(){
    const token = this._localStorage.getItem('access_token');
    if(!token) return null;

    return this.headers.append("Authorization", 'Bearer ' + token);
  }
}
