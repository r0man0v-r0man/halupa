import { Component, Input, OnInit } from '@angular/core';
import { CurrencyType, IPrice } from 'src/app/models/price.model';
import { ISelectValue } from 'src/app/models/select.model';



@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.less']
})
export class PriceInputComponent implements OnInit {
  @Input() price: IPrice;
  listOfCurrencies: Array<ISelectValue> = [];
  constructor() { }

  ngOnInit(): void {
    this.getListOfCurrencies();
  }


  private getListOfCurrencies() {
    this.listOfCurrencies.push(
      { label: CurrencyType[CurrencyType.BYN], value: CurrencyType.BYN },
      { label: CurrencyType[CurrencyType.USD], value: CurrencyType.USD },
      { label: CurrencyType[CurrencyType.RUB], value: CurrencyType.RUB },
      { label: CurrencyType[CurrencyType.EUR], value: CurrencyType.EUR }
    );
  }
}
