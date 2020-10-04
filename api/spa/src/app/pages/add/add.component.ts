import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAdvert } from 'src/app/models/advert.model';
import { GeocoderService } from './services/geocoder.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
  providers:[
    GeocoderService
  ]
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public geocoderService: GeocoderService
  ) {
    this.form = this.fb.group({
      address: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  submitForm(){
    const advert: IAdvert = { ...this.form.value };
    console.log(advert);
    
  }
}
