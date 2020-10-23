import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerLocalStorageService {
  store: {[key: string]: string} = {};
  constructor() { }
  
  getitem(key: string): string | null{
    return this.store[key];
  }
  setItem(key: string, value: string){
    this.store[key] = value;
  }
}
