import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../_services/events.service';
import { AlertifyService } from '../_services/alertify.service';
import { Dogadjaj } from '../_model/dogadjaj';
import { PaginatedResult, Pagination } from '../_model/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() kategorija: string;
  dogadjaji: Dogadjaj[];
  pagination: Pagination;
  criteria: string;

  constructor(private eventsService: EventsService, 
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dogadjaji = data['events'].result;
      this.pagination = data['events'].paginaton;
    })
  }

  hasEvents() {
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

  loadEvents() {
    if(this.criteria === undefined){
      this.pagination.criteria = '';
    }else{
      this.pagination.criteria = this.criteria;
    }
    this.eventsService.getAll(this.pagination.currentPage, this.pagination.itemsPerPage, this.pagination.criteria).subscribe((res: PaginatedResult<Dogadjaj[]>) => {
      this.dogadjaji = res.result;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadSecond(){
    if(this.criteria === undefined){
      this.pagination.criteria = '';
    }else{
      this.pagination.criteria = this.criteria;
    }
    this.pagination.currentPage = 1;
    this.eventsService.getAll(this.pagination.currentPage, this.pagination.itemsPerPage, this.pagination.criteria).subscribe((res: PaginatedResult<Dogadjaj[]>) => {
      this.dogadjaji = res.result;
      this.pagination = res.paginaton;
      console.log(res.paginaton.totalItems);
    }, error => {
      this.alertify.error(error);
    });
  }


  
  pageChanged(event: any){
    if(this.criteria !== undefined){
      this.pagination.criteria = this.criteria;
    }
    this.pagination.currentPage = event.page;
    console.log(this.criteria);
    console.log(this.pagination.currentPage);
    this.loadEvents();
  }

}
