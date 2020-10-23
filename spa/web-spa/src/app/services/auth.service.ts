import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
  login(user: IUser){
    return this._httpService.post(URLs.loginURL, user)
      .pipe(
        map((response:any)=>{
          let token = response.access_token;
          if(token){
            this._localStorage.setItem('access_token', token);
            return true;
          }
          else{
            return false;
          }
        })
      )
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
  registerUser(user: IUser){
    return this._httpService.post<boolean>(URLs.registerURL, user, { headers: this.headers })
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
