import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {IAdvert} from "../../models/advert.model";
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
    private _authService: AuthService,
    private _advertService: AdvertService
  ) { }

  ngOnInit(): void {
    this._advertService.getUserAdverts();
  }

  onLogOut(){
    this._authService.logOut();
  }
  get adverts(){
    return this._advertService.userAdverts;
  }
}
