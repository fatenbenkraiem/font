import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Reservation {
  demandeur: string;
  ressource: string;
  date_debut: Date;
  date_fin: Date;
  etat: string;
}

const DATA: Reservation[] = [
  { demandeur: 'John Doe', ressource: 'Salle A', date_debut: new Date('2023-03-15T09:00:00'), date_fin: new Date('2023-03-15T12:00:00'), etat: 'En attente' },
  { demandeur: 'Jane Smith', ressource: 'Salle B', date_debut: new Date('2023-03-16T13:00:00'), date_fin: new Date('2023-03-16T16:00:00'), etat: 'Validée' },
  { demandeur: 'Bob Johnson', ressource: 'Salle C', date_debut: new Date('2023-03-17T09:00:00'), date_fin: new Date('2023-03-17T12:00:00'), etat: 'Refusée' },
  { demandeur: 'Alice Brown', ressource: 'Salle A', date_debut: new Date('2023-03-18T13:00:00'), date_fin: new Date('2023-03-18T16:00:00'), etat: 'Validée' },
  { demandeur: 'James Wilson', ressource: 'Salle D', date_debut: new Date('2023-03-19T09:00:00'), date_fin: new Date('2023-03-19T12:00:00'), etat: 'En attente' },
];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //columns: string[] = ['Column 1', 'Column 2', 'Column 3','Column 4','Column 5'];
  displayedColumns: string[] = ['demandeur', 'ressource', 'date_debut', 'date_fin', 'etat'];
  dataSource = new MatTableDataSource<Reservation>([]);
  totalItems: number = DATA.length;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  startDate!: Date ;
  endDate!: Date;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter() {
    const startDate = this.startDate.getTime();
    const endDate = this.endDate.getTime();
    this.dataSource.data = DATA.filter(reservation => reservation.date_debut.getTime() >= startDate && reservation.date_fin.getTime() <= endDate);
    this.totalItems = this.dataSource.data.length;
    this.dataSource.paginator?.firstPage();
  }

  reset() {
    this.startDate = new Date;
    this.endDate = new Date;
    this.dataSource.data = DATA;
    this.totalItems = DATA.length;
    this.dataSource.paginator?.firstPage();
  }

  pageChanged(event: any) {
   // this.dataSource.paginator?.pageIndex = event.pageIndex;
   // this.dataSource.paginator?.pageSize = event.pageSize;
  }
 
}
