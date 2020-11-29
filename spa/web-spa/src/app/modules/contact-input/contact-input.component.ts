import { Component, Input, OnInit } from '@angular/core';
import { ContactType, IContact } from 'src/app/models/contacts.model';
import { ISelectValue } from 'src/app/models/select.model';

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.less']
})
export class ContactInputComponent implements OnInit {
  @Input() contact: IContact;
  listOfContacts: ISelectValue[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listOfContacts.push(
      { label: 'Тел.', value: ContactType.PHONE },
      { label: 'E-Mail', value: ContactType.EMAIL }
    )
  }

}
