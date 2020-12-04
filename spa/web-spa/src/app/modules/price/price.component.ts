import {Component, Input, OnInit} from '@angular/core';
import {IPrice} from "../../models/price.model";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent implements OnInit {
  @Input() prices: IPrice[] = [];
  priceView: IPrice;
  index = 0;
  constructor() { }

  ngOnInit(): void {
    this.onSwitchPriceCurrency();
  }

  onSwitchPriceCurrency() {
      this.priceView = this.prices[this.index]
      this.index += 1;
      if (this.index >= this.prices.length){
        this.index=0;
      }
    
    console.log(this.index)
  }
}
