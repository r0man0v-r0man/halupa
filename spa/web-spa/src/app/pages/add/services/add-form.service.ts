import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AddFormService {
  form: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {
    this.initForm();
   }
  initForm() {
    this.form = this._fb.group({
      appUserId: [ this._authService.currentUser.sub, [Validators.required]],
      isActive:[true, [Validators.required]],
      address: [ '', [Validators.required]],
      images: [ null, [Validators.required]],
      price: this._fb.group({
        value: [ 15000, [Validators.required]]
      }),
      description: this._fb.group({
        value: [ '' , [Validators.required]]
      }),
      area: this._fb.group({
        value: [ 70, [Validators.required]]
      }),
      contact: this._fb.group({
        phone: [ '', [Validators.required]]
      })
    })
  }
}
