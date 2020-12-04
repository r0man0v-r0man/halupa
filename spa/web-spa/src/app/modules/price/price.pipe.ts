import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyType} from "../../models/price.model";

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(currencyType: CurrencyType) {
    if (currencyType === CurrencyType.BYN){
      return 'BYN'
    }
    if (currencyType === CurrencyType.USD){
      return 'USD'
    }
    if (currencyType === CurrencyType.RUB){
      return 'RUB'
    }
    if (currencyType === CurrencyType.EUR){
      return 'EUR'
    }

  }

}
  