import { Component, Input, OnInit } from '@angular/core';
import { AreaType, IArea } from 'src/app/models/area.model';
import { ISelectValue } from 'src/app/models/select.model';

@Component({
  selector: 'app-area-input',
  templateUrl: './area-input.component.html',
  styleUrls: ['./area-input.component.less']
})
export class AreaInputComponent implements OnInit {
  @Input() area: IArea;
  listOfAreas: ISelectValue[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getListOfAreas();
  }


  private getListOfAreas() {
    this.listOfAreas.push(
      { label: 'Дома/квартиры, кв.м.', value: AreaType.HOUSEFLAT },
      { label: 'Участка, сот.', value: AreaType.SECTOR }
    );
  }
}
