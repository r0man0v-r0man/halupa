import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.model';
import { Destroyer } from 'src/app/modules/destroyer/destroyer.helper';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActions } from 'src/app/store/Auth/auth.action';
import { AuthState } from 'src/app/store/Auth/auth.state';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ],
  providers:[
    LoginFormService
  ]
})
export class LoginComponent extends Destroyer {

  loading$: Observable<boolean> = this._store.select(AuthState.loading).pipe(takeUntil(this.destroy$));

  constructor(
    private _loginFormService: LoginFormService,
    private _store: Store
  ) { super(); }

  get form() {
    return this._loginFormService.form;
  }
  get isValid() {
    return this._loginFormService.isValid;
  }
  login(user: IUser){
    this._store.dispatch(new AuthActions.Login(user));
  }
}
