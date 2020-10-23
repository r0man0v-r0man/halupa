import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { URLs } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(
    private _httpService: HttpClient
  ) { }

  /**check the existing username */
  IsUserNameExist(userName: string){
    return this._httpService.get(URLs.isUserNameExistURL + '/' + userName);
  }
  /** register new user */
  registerUser(user: IUser){
    return this._httpService.post<boolean>(URLs.registerURL, user, { headers: this.headers })
  }
}
