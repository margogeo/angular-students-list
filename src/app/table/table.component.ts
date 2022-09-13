import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {DataService} from "../data.service";

export interface TableRow {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource: MatTableDataSource<TableRow> = new MatTableDataSource();
  rows: TableRow[] = [];
  columns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  value: string | undefined;

  constructor(private dataService: DataService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;

  ngOnInit() {
      this.rows = this.dataService.getData();
      this.dataSource = new MatTableDataSource(this.rows);
      // @ts-ignore
      this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateSearchInput() {
    this.value = '';
    // @ts-ignore
    this.dataSource.filter = '';
  }

}
