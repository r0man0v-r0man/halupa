import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { IAdvert } from 'src/app/models/advert.model';
import { CurrencyType } from 'src/app/models/price.model';
import { IUploadImage } from 'src/app/models/uploadImage';
import { AdvertService } from 'src/app/services/advert.service';
import { ImageService } from 'src/app/services/image.service';
import { AddFormService } from './services/add-form.service';
import { GeocoderService } from './services/geocoder.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
  providers:[
    GeocoderService,
    AddFormService,
    AdvertService
  ]
})
export class AddComponent implements OnInit {
  limitOfPricesArray = Object.keys(CurrencyType).map(key => CurrencyType[key]).filter(x => !(parseInt(x) >= 0)).length - 1;
  /** фото к объявлению */
  images: NzUploadFile[] = [];
  imageList: NzUploadFile[] = [];
  imageList2: IUploadImage[]=[];
  
  constructor(
    public geocoderService: GeocoderService,
    private addFormService: AddFormService,
    private _imageService: ImageService,
    private cd: ChangeDetectorRef,
    private advertService: AdvertService
  ) {
   }
  get form() {
    return this.addFormService.form;
  }
  get isDisabledAddPriceButton() {
    return this.addFormService.isDisabledAddPriceButton;
  }
  get disabledAddAreaFieldButton() {
    return this.addFormService.disabledAddAreaFieldButton;
  }
  get disabledAddContactFieldButton() {
    return this.addFormService.disabledAddContactFieldButton;
  }
  get previews(){
    return this._imageService.previews;
  }
  // get imageList2(){
  //   return this._imageService.imageList2;
  // }
  ngOnInit(): void {
    this._imageService.imageList2$.asObservable()
    .subscribe(data => {
      this.imageList2.push(data);
      this.setFormControlValue('images', this.imageList2);
      this.cd.detectChanges();
    })
  }
  submitForm(){
    const advert: IAdvert = { ...this.form.value };
    this.advertService.addAdvert(advert);
  }
 
  /** Delete file */
  onDelete = (file: NzUploadFile): Observable<boolean> => {
    return new Observable(observer => {
      if (file) {
        this._imageService.delete(file.response.deleteHash)
        .subscribe(response => {
          if (response) {
          const index = this.images.findIndex(x => x.uid === file.response.uid);
          if (index > -1) {
            this.images.splice(index, 1);
          }
          this.setFormControlValue('images', this.images);
          observer.next(response);
          observer.complete();
          }
        });
      }
    });
  }
  /**
   * установка значения для поля формы
   * @param formControlName имя поля
   * @param value значение
   */
  private setFormControlValue(formControlName: string, value: any) {
    this.form.controls[formControlName].setValue(value);
  }
  onAddPrice(){
    this.addFormService.addPriceField();
  }
  onRemovePrice(index: number){
    this.addFormService.removePriceField(index);
  }
  onAddArea(){
    this.addFormService.addAreaField();
  }
  onRemoveArea(index: number){
    this.addFormService.removeAreaField(index);
  }
  onAddContact(){
    this.addFormService.addContactField();
  }
  onRemoveContact(index: number){
    this.addFormService.removeContactField(index);
  }
  onFileChanged(event) {
    this._imageService.onFileChange(event);
  }

}
