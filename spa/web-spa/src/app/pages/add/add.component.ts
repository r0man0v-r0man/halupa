import { AdvertActions } from 'src/app/store/advert/advert.action';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CurrencyType } from 'src/app/models/price.model';
import { IUploadImage } from 'src/app/models/uploadImage';
import { ImageService } from 'src/app/services/image.service';
import { AddFormService } from './services/add-form.service';
import { GeocoderService } from './services/geocoder.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
  providers:[
    GeocoderService,
    AddFormService
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddComponent implements OnInit {
  limitOfPricesArray = Object.keys(CurrencyType).map(key => CurrencyType[key]).filter(x => !(parseInt(x) >= 0)).length - 1;
  /** фото к объявлению */
  images: any[] = [];
  
  imageList2: IUploadImage[] = [];
  
  constructor(
    public geocoderService: GeocoderService,
    private addFormService: AddFormService,
    public _imageService: ImageService,
    private cd: ChangeDetectorRef,
    private _store: Store
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
  ngOnInit(): void {
  }
  submitForm(){
    this._store.dispatch(new AdvertActions.Create({ ...this.form.value }))
  }
  /** Delete file */
  onDelete = (file: any): Observable<boolean> => {
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
  onDataClick(data, input){
    input.value = data.GeoObject.name + ', ' + data.GeoObject.description;
    this.setFormControlValue('yandexAddress', data);
    this.geocoderService.optionList = [];
  }
  previewImgs = [];
  onSelectFile(files: FileList){
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = () => { 
      this.previewImgs.push(reader.result);
    }
    this.uploadFile(files[0]);
  }
  uploadFile(file: File){
    this._imageService.onFileChange(file).subscribe(file => {
      this._imageService.uploadFile(file).subscribe(response => {
        this.imageList2.push(response);
        this.setFormControlValue('images', this.imageList2);
        this.cd.detectChanges();
      })
    })
  }
}
