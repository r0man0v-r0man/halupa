import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
  form: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) { 
    this.initForm();
  }
  initForm() {
    this.form = this._fb.group({
      userName:[null, [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      password:[null, [Validators.required]]
    })
  }
  get isValid() {
    return this.form.valid;
  }
}
