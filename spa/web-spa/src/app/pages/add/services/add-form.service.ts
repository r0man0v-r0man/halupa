import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AreaType, IArea } from 'src/app/models/area.model';
import { ContactType, IContact } from 'src/app/models/contacts.model';
import { CurrencyType, IPrice } from 'src/app/models/price.model';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AddFormService {
  form: FormGroup;
  // цена
  priceLimitLength = Object.keys(CurrencyType).map(key => CurrencyType[key]).filter(x => !(parseInt(x) >= 0)).length - 1;
  listOfPrice: Array<IPrice> = [];
  listOfPriceControl: FormControl[] = [];
  isDisabledAddPriceButton = false;
  // площадь 
  listOfArea: Array<IArea> = [];
  listOfAreaControl: FormControl[] = [];
  disabledAddAreaFieldButton: boolean = false;
  // контакты
  listOfContact: IContact[] = [];
  listOfContactControl: FormControl[] = [];
  disabledAddContactFieldButton = false;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService) {
    this.initForm();
  }
  removePriceField(index: number) {
    if(index > 0) {
      this.isDisabledAddPriceButton = false;
      this.listOfPrice.splice(index, 1);
      this.updateFormArray(this.listOfPrice, this.listOfPriceControl, 'prices');
    }
  }
  
  addPriceField(){
    if(!this.isDisabledAddPriceButton) this.listOfPrice.push(this.getDefaultPrice());
    if(this.listOfPrice.length - 1 == this.priceLimitLength) this.isDisabledAddPriceButton = true;
    this.updateFormArray(this.listOfPrice, this.listOfPriceControl, 'prices');
  }
  private updateFormArray(arr: any[], formControls: FormControl[], controlName: string){
    const controls = arr.map((i) => new FormControl(i, Validators.required));
    formControls = [...controls];
    this.form.setControl(controlName, this._fb.array(formControls));
  }
  private getDefaultPrice(){
    return { currency:CurrencyType.BYN, value: 40000};
  }
  addAreaField(){
    if(this.listOfArea.length == 0) {
      this.listOfArea.push({ kind: AreaType.HOUSEFLAT, value: 100});
    } else {
      this.listOfArea.push({ kind: AreaType.SECTOR, value: 6});
      this.disabledAddAreaFieldButton = true;
    }
    this.updateFormArray(this.listOfArea, this.listOfAreaControl, 'areas');
  }
  removeAreaField(index: number){
    this.listOfArea.splice(index, 1);
    this.disabledAddAreaFieldButton = false;
    this.updateFormArray(this.listOfArea, this.listOfAreaControl, 'areas');
  }
  addContactField(){
    this.listOfContact.push({ kind: ContactType.PHONE, value: ''})
    if(this.listOfContact.length > 4) this.disabledAddContactFieldButton = true;
    this.updateFormArray(this.listOfContact, this.listOfContactControl, 'contacts');
  }
  removeContactField(index: number){
    if(index > 0){
      this.listOfContact.splice(index, 1);
    }
    this.updateFormArray(this.listOfContact, this.listOfContactControl, 'contacts');
  }
  initForm() {
    this.form = this._fb.group({
      appUserId: [ this._authService.currentUser.sub, [Validators.required]],
      isActive:[true, [Validators.required]],
      yandexAddress: [ '', [Validators.required]],
      images: [ null, [Validators.required]],
      prices: this._fb.array(this.listOfPriceControl),
      description: this._fb.group({
        value: [ '' , [Validators.required]]
      }),
      areas: this._fb.array(this.listOfAreaControl),
      contacts: this._fb.array(this.listOfContactControl)
    })
    this.addPriceField();
    this.addAreaField();
    this.addContactField();
  }
}
