import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerLocalStorageService {
  store: {[key: string]: string} = {};
  constructor() { }
  
  getItem(key: string): string | null{
    return this.store[key];
  }
  setItem(key: string, value: string){
    this.store[key] = value;
  }
  removeItem(key: string){
    delete this.store[key]
  }
}
