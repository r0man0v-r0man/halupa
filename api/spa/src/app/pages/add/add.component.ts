import { Component, OnInit } from '@angular/core';
import { IAdvert } from 'src/app/models/advert.model';
import { AddFormService } from './services/add-form.service';
import { GeocoderService } from './services/geocoder.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
  providers:[
    GeocoderService,
    AddFormService
  ]
})
export class AddComponent implements OnInit {
  constructor(
    public geocoderService: GeocoderService,
    private addFormService: AddFormService
  ) {
   }
  get form() {
    return this.addFormService.form;
  }
  get isValid() {
    return this.addFormService.isValid;
  }
  ngOnInit(): void {
  }
  submitForm(){
    const advert: IAdvert = { ...this.form.value };
    console.log(advert);
    
  }
}
