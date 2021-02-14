import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../../models/contacts.model";

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.less']
})
export class ContactsViewComponent implements OnInit {
  @Input() contacts: IContact[];
  isShowPhone = false;
  isCopied = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onShowPhone(){
    this.isShowPhone = !this.isShowPhone;
    setTimeout(() => {
      this.isShowPhone = !this.isShowPhone;
    }, 10000);
  }
}
