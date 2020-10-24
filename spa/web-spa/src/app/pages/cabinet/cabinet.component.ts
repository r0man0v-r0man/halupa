import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: [ './cabinet.component.less' ]
})
export class CabinetComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this._authService.logOut();
  }
}
