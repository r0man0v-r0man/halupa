import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AddFormService {
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {
    this.initForm();
   }
  initForm() {
    this.form = this.fb.group({
      isActive:[true, [Validators.required]],
      address: [ '', [Validators.required]],
      images: [ null, [Validators.required]],
      price: this.fb.group({
        value: [ 15000, [Validators.required]]
      }),
      description: this.fb.group({
        value: [ '' ]
      }),
      area: this.fb.group({
        value: [ 70, [Validators.required]]
      }),
      contacts: this.fb.array([])
    })
  }
  get isValid() {
    return this.form.valid;
  }
}
