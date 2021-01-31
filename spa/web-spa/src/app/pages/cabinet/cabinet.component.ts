import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: [ './cabinet.component.less' ],
  providers:[
      AdvertService
  ]
})
export class CabinetComponent implements OnInit {
  constructor(
    private _advertService: AdvertService
  ) { }

  ngOnInit(): void {
    this._advertService.getUserAdverts();
  }

  get adverts(){
    return this._advertService.userAdverts;
  }
  onRemove(advertId: number){
    this._advertService.remove(advertId);
  }
}
