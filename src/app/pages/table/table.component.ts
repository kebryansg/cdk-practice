import {Component, OnInit} from '@angular/core';
import {PersonDatasource} from "./person-datasource";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'lastName',
    'age',
    'email',
    'birthdate',
  ];
  dataSource = new PersonDatasource();

  constructor() {
  }

  ngOnInit(): void {

  }

}


