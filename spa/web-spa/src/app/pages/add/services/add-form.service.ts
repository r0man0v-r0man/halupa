import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyType, IPrice } from 'src/app/models/price.model';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AddFormService {
  form: FormGroup;
  formPrice: FormGroup;
  listOfPrice: Array<IPrice> = [];
  listOfPriceControl: FormControl[] = [];
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService) {
    this.formPrice = this._fb.group({});
    this.initForm();
  }
  
  addPriceField(index?: number){
    
    
    this.listOfPrice.push({ currency: CurrencyType.USD, value: 15000 });
    const controls = this.listOfPrice.map((i)=>new FormControl(i,Validators.required))
    this.listOfPriceControl = [ ...controls ];
    this.form.setControl('prices', this._fb.array(this.listOfPriceControl))
  }

  initForm() {
    this.form = this._fb.group({
      appUserId: [ this._authService.currentUser.sub, [Validators.required]],
      isActive:[true, [Validators.required]],
      address: [ '', [Validators.required]],
      images: [ null, [Validators.required]],
      prices: this._fb.array(this.listOfPriceControl),
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
    this.addPriceField();
  }
}
