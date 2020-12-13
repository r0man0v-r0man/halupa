import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SearchBoxService {

  constructor(
      private _httpClient: HttpClient
  ) { }

  search(value: { inputValue: string }) {
    console.log(value.inputValue)
  }
}
