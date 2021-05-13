import { AuthActions } from 'src/app/store/auth/auth.action';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { IUser } from 'src/app/models/user.model';
import { RegisterFormService } from './services/register-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.less' ],
  providers:[
    RegisterFormService
  ]
})
export class RegisterComponent  {
  constructor(
    private _registerFormService: RegisterFormService,
    private _store: Store
  ) { }

  get form() {
    return this._registerFormService.form;
  }
  get userName() { 
    return this._registerFormService.form.get('userName'); 
  }
  /** регистрация пользователя */
  submitForm(user: IUser){
    this._store.dispatch(new AuthActions.Register(user))
  }
  
}
