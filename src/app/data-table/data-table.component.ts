import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource } from './data-table-datasource';
import { Dogadjaj } from '../_model/dogadjaj';
import { EventsService } from '../_services/events.service';
import { DogadjajService } from '../_services/dogadjaj.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router, Route } from '@angular/router';
import { DogadjajKategorijeComponent } from '../dogadjaji/dogadjajKategorije/dogadjajKategorije.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Dogadjaj>;
  dataSource: DataTableDataSource;

  displayedColumns = ['naziv', 'izmeni', 'obrisi'];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  constructor(private eventsServis: EventsService, private dogadjajService: DogadjajService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.eventsServis);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
  }

  deleteEvent(eventID: any, paginator) {
    this.dogadjajService.deleteEvent(eventID).subscribe(() => {
      this.alertify.success('Uspešno obrisan događaj!');

      for (let i = 0; i < this.dataSource.data.length - 1; i++) {
        if (this.dataSource.data[i].dogadjajID === eventID) {
          this.dataSource.data.splice(i, 1);
          this.table.renderRows();
          break;
        }
      }

      this.dataSource.paginator = paginator;
    }, error => {
      this.alertify.error('Greška pri brisanju!');
    });
  }
}
