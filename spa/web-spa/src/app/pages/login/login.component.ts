import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ],
  providers:[
    LoginFormService
  ]
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  constructor(
    private _loginFormService: LoginFormService,
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  get form() {
    return this._loginFormService.form;
  }
  get isValid() {
    return this._loginFormService.isValid;
  }
  signIn(user: IUser){
    if(user){
      this.isLoadingSwitch();
      this._authService.login(user)
      .subscribe(response => { 
        if(response){
          let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
          this._router.navigate([returnUrl || '/']);
        }
      })
    }
    setTimeout(() => {
      this.isLoadingSwitch();
    }, 3000);
  }
  isLoadingSwitch(){
    this.isLoading = !this.isLoading;
  }
}
