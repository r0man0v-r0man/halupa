import { Component, OnInit } from '@angular/core';
import {SearchBoxFormService} from "./search-box-form.service";
import {AdvertService} from "../../services/advert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less'],
  providers:[
      SearchBoxFormService,
  ]
})
export class SearchBoxComponent implements OnInit {
  constructor(
      private _searchBoxFormService: SearchBoxFormService,
      private _router: Router
  ) { }

  ngOnInit(): void {
  }
  get form(){
    return this._searchBoxFormService.form;
  }

  submitSearch(value: { locality: string; pageNumber: number }) {
    this._router.navigate(['search'], {queryParams: value, queryParamsHandling: "merge"})
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
