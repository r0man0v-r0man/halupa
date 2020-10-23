import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isLogIn = false;
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.isLogedIn().subscribe(response => {
      console.log(response);
      this.isLogIn = response
    })
  }

}
