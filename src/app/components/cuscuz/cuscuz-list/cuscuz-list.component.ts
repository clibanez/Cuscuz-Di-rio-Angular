import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuscuz } from '../../../models/cuscuz';

@Component({
  selector: 'app-cuscuz-list',
  templateUrl: './cuscuz-list.component.html',
  styleUrls: ['./cuscuz-list.component.css']
})
export class CuscuzListComponent implements OnInit {

  ELEMENT_DATA: Cuscuz[] = [
{
    id: 1,
    titulo: 'GÊNESIS',
    texto: 'hduhduhd dudhuhduhddu ddududoododoe',
    dataCriacao: '05/02/2022'
}
  ]


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Cuscuz>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




}

