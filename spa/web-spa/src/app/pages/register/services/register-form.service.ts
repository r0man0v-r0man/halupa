import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserNameValidators } from 'src/app/validators/user-name.validators';

@Injectable()
export class RegisterFormService {
  form: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {
    this.initForm();
   }
  initForm() {
    this.form = this._fb.group({
      userName:
        [null, 
          {
          validators: [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')],
          asyncValidators: [UserNameValidators.duplicated(this._authService)],
          updateOn: 'blur'
          } 
        ],
      password:[null, [Validators.required]]
    })
  }
  get isValid() {
    return this.form.valid;
  }
}
