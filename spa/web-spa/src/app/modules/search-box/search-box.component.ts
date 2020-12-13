import { Component, OnInit } from '@angular/core';
import {SearchBoxFormService} from "./search-box-form.service";
import {Subject} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {SearchBoxService} from "./search-box.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less'],
  providers:[
      SearchBoxFormService,
      SearchBoxService
  ]
})
export class SearchBoxComponent implements OnInit {
  constructor(
      private _searchBoxFormService: SearchBoxFormService,
      private _searchBoxService: SearchBoxService
  ) { }

  ngOnInit(): void {
  }
  get form(){
    return this._searchBoxFormService.form;
  }

  submitSearch(value: { inputValue: string }) {
    this._searchBoxService.search(value);
  }

  onClear() {
    this._searchBoxFormService.resetForm();
  }
  // onChangedSearchInput(value: string) {
  //   this.inputValue$.next(value);
  // }
  // updateNote(){
  //   this.noteChange$.asObservable().pipe(
  //       debounceTime(2000),
  //       map(note => this._favoriteService.updateNote(note.id, note.note))
  //   ).subscribe();
  // }
}
