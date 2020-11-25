import { Component, Input, OnInit } from '@angular/core';
import { CurrencyType, IPrice, IPriceView } from 'src/app/models/price.model';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.less']
})
export class PriceInputComponent implements OnInit {
  @Input() price: IPriceView;
  listOfCurrencies: Array<{ label: string; value: number}> = [];
  constructor() { }

  ngOnInit(): void {
    this.listOfCurrencies.push(
      { label: CurrencyType[CurrencyType.BYN], value: CurrencyType.BYN },
      { label: CurrencyType[CurrencyType.USD], value: CurrencyType.USD },
      { label: CurrencyType[CurrencyType.RUB], value: CurrencyType.RUB },
      { label: CurrencyType[CurrencyType.EUR], value: CurrencyType.EUR }
    )
  }

}
