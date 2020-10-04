import { Injectable } from '@angular/core';
import { URLs } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uploadURL = URLs.addImageURL;
  constructor() { }
}
