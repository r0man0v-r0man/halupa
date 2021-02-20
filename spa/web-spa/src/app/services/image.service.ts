import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, Observer } from 'rxjs';
import { IUploadImage } from '../models/uploadImage';
import { URLs } from '../urls';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  uploadURL = URLs.addImageURL;
  headers = new HttpHeaders().set('content-type', 'application/json');
  uploadButtonsOptions = { showPreviewIcon: false, showRemoveIcon: false, showDownloadIcon: false };
  constructor(
    private _httpService: HttpClient
  ) { }
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this._httpService.post<IUploadImage>(this.uploadURL, formData);
  }
  /**
   * By Ken Fyrstenberg Nilsen
   *
   * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
   *
   * If image and context are only arguments rectangle will equal canvas
  */
  private drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
  
    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }
  
    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;
  
    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;
  
    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;
  
    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;
  
    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);
  
    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;
  
    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;
  
    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
  }
 
  /** удалить изображение */
  delete(deleteHash: string){
    return this._httpService.delete<boolean>(URLs.deleteImageURL + '/' + deleteHash, { headers: this.headers })
  }

  onFileChange = (file: any) => {
    return new Observable((observer: Observer<File>) => {
    const width = 1000; // разрешение картинки
    const reader = new FileReader();
    reader.readAsDataURL(file as any);
    reader.onload = () => {
      const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result as string;
        img.onload = () => {
        const scale = width / img.naturalHeight;
        canvas.width = width;
        canvas.height = img.naturalHeight * scale;
          const ctx = canvas.getContext('2d')!;
          var offsetX = 0.5;   // center x
          var offsetY = 0.5;   // center y
          this.drawImageProp(ctx, img, 0, 0, width, img.naturalHeight * scale, offsetX, offsetY);
          ctx.font = "40px Verdana";
          ctx.fillStyle = "white";
          ctx.globalAlpha = 0.5;
          ctx.fillText('halupa.by', 20 , width - 20);
            canvas.toBlob(blob => {
              observer.next(new File([blob], 'file.jpg', {type: 'image/jpeg'}));
              observer.complete();
            })
        }
      }
    })
  }  
}
