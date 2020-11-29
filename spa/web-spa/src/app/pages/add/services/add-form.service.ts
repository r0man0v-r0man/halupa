import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyType, IPrice } from 'src/app/models/price.model';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AddFormService {
  form: FormGroup;
  priceLimitLength = Object.keys(CurrencyType).map(key => CurrencyType[key]).filter(x => !(parseInt(x) >= 0)).length - 1;
  listOfPrice: Array<IPrice> = [];
  listOfPriceControl: FormControl[] = [];
  isDisabledAddPriceButton = false;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService) {
    this.initForm();
  }
  removePriceField(index: number) {
    if(index > 0) {
      this.isDisabledAddPriceButton = false;
      this.listOfPrice.splice(index, 1);
      this.updatePriceFormArray();
    }
  }
  
  addPriceField(){
    if(!this.isDisabledAddPriceButton) this.listOfPrice.push(this.getDefaultPrice());
    if(this.listOfPrice.length - 1 == this.priceLimitLength) this.isDisabledAddPriceButton = true;
    this.updatePriceFormArray();
  }
  private updatePriceFormArray() {
    const controls = this.listOfPrice.map((i) => new FormControl(i, Validators.required));
    this.listOfPriceControl = [...controls];
    this.form.setControl('prices', this._fb.array(this.listOfPriceControl));
  }
  private getDefaultPrice(){
    return { currency:CurrencyType.BYN, value: 40000};
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
