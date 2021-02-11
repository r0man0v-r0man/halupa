import { Component, OnInit } from '@angular/core';
import {SearchBoxFormService} from "./search-box-form.service";
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
}
