import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterFormService } from './services/register-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.less' ],
  providers:[
    RegisterFormService
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: boolean = false;
  constructor(
    private _registerFormService: RegisterFormService,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get form() {
    return this._registerFormService.form;
  }
  get isValid() {
    return this._registerFormService.isValid;
  }
  /** регистрация пользователя */
  submitForm(user: IUser){
    if(user){
      this.isLoadingSwitch();
      this._authService.registerUser(user)
        .subscribe(response => {
          if(response){
            this._router.navigate(['/login']);
          }
        })
    }
    setTimeout(() => {
      this.isLoadingSwitch();
    }, 3000);
  }
  /** переключение спиннера */
  isLoadingSwitch(){
    this.isLoading = !this.isLoading;
  }
  
}
