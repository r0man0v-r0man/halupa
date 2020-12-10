import {Component, Input, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
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
  constructor(
      private _clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }
  onCopyPhone() {
    this._clipboard.copy(`${this.contacts[0].value}\n\скопировано с halupa.by`);
    this.isCopied = !this.isCopied;
    setTimeout(() => {
      this.isCopied = !this.isCopied;
    }, 3500)
  }
  onShowPhone(){
    this.isShowPhone = !this.isShowPhone;
    setTimeout(() => {
      this.isShowPhone = !this.isShowPhone;
    }, 10000);
  }
}
