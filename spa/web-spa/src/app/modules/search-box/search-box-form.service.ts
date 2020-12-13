import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable()
export class SearchBoxFormService {
  form: FormGroup;
  constructor(
      private _fb: FormBuilder
  ) {
    this.initForm();
  }

  private initForm() {
    this.form = this._fb.group({
      locality:[null],
      pageNumber: [1]
    })
  }

  resetForm() {
    this.initForm()
  }
}
