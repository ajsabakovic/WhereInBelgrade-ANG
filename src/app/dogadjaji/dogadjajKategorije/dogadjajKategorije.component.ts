import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { EventsService } from 'src/app/_services/events.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { PaginatedResult, Pagination } from 'src/app/_model/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogadjajKategorije',
  templateUrl: './dogadjajKategorije.component.html',
  styleUrls: ['./dogadjajKategorije.component.css']
})
export class DogadjajKategorijeComponent implements OnInit {
  @Input() kategorija: string;
  dogadjaji: Dogadjaj[];
  pagination: Pagination;
  criteria: string;

  constructor(private eventsService: EventsService, private alertify: AlertifyService,
    private route: ActivatedRoute) {
      this.route.data.subscribe(data => {
        this.dogadjaji = data['events'].result;
        this.pagination = data['events'].paginaton;
        console.log(data['events'].pagination);
      });
     }

  ngOnInit() {
      
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pagination.currentPage = 1;
    this.selectedCategory();
  }

  selectedCategory(){
    console.log(this.kategorija);
    if(this.criteria === undefined){
      this.pagination.criteria = '';
    }else{
      this.pagination.criteria = this.criteria;
    }
    this.eventsService.getEventsByCategory(this.kategorija, this.pagination.currentPage, this.pagination.itemsPerPage, this.pagination.criteria)
    .subscribe((res: PaginatedResult<Dogadjaj[]>) => {
      this.dogadjaji = res.result;
    }, error => {
      this.alertify.error(error);
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

  // pageChanged(event: any) {
  //   this.pagination.currentPage = event.page;
  //   this.selectedCategory();
  // }

  pageChanged(event: any){
    if(this.criteria !== undefined){
      this.pagination.criteria = this.criteria;
    }
    this.pagination.currentPage = event.page;
    console.log(this.criteria);
    console.log(this.pagination.currentPage);
    this.selectedCategory();
  }

  loadSecond(){
    if(this.criteria === undefined){
      this.pagination.criteria = '';
    }else{
      this.pagination.criteria = this.criteria;
    }
    this.pagination.currentPage = 1;
    this.eventsService.getEventsByCategory(this.kategorija, this.pagination.currentPage, this.pagination.itemsPerPage, this.pagination.criteria).subscribe((res: PaginatedResult<Dogadjaj[]>) => {
      this.dogadjaji = res.result;
      this.pagination = res.paginaton;
      console.log(res.paginaton.totalItems);
    }, error => {
      this.alertify.error(error);
    });
  }


  // loadEvents(){
  //   this.eventsService.getAll().subscribe((dogadjaji: Dogadjaj[]) => {
  //     this.dogadjaji = dogadjaji;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
}
