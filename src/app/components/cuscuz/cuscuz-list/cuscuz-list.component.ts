import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuscuz } from '../../../models/cuscuz';
import { CuscuzService } from '../../../services/cuscuz.service';

@Component({
  selector: 'app-cuscuz-list',
  templateUrl: './cuscuz-list.component.html',
  styleUrls: ['./cuscuz-list.component.css']
})

export class CuscuzListComponent implements OnInit {


  ELEMENT_DATA: Cuscuz[] = []

position
  displayedColumns: string[] = ['id', 'titulo', 'texto', 'dataCriacao', 'acoes'];
  dataSource = new MatTableDataSource<Cuscuz>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: CuscuzService
  ) { }

  ngOnInit(): void {
    this.findAll();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
         this.ELEMENT_DATA = resposta
         this.dataSource = new MatTableDataSource<Cuscuz>(resposta);
         this.dataSource.paginator = this.paginator;
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

