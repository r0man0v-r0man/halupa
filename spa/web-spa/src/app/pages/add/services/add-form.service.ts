import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyType, IPrice, IPriceView } from 'src/app/models/price.model';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AddFormService {
  form: FormGroup;
  priceLimitLength = Object.keys(CurrencyType).map(key => CurrencyType[key]).filter(x => !(parseInt(x) >= 0)).length - 1;
  listOfPrice: Array<IPriceView> = [];
  listOfPriceControl: FormControl[] = [];
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService) {
    this.initForm();
  }
  
  addPriceField(index?: number, e?: MouseEvent){
    if(e){
      this.listOfPrice[index].disabled = false;  
    }
    this.listOfPrice.push(this.getDefaultPrice(index));
    // у последнего элемента установить disabled false
    const controls = this.listOfPrice.map((i)=>new FormControl(i,Validators.required))
    this.listOfPriceControl = [ ...controls ];
    this.form.setControl('prices', this._fb.array(this.listOfPriceControl))
  }
  private getDefaultPrice(index?: number){
    if(index){
      const price = { currency:CurrencyType.RUB, value: 40000, disabled: true };
      return price;
    } else {
      const price = { currency:CurrencyType.BYN, value: 40000, disabled: false };
      return price;
    }
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
    this.addPriceField(1);
  }
}
