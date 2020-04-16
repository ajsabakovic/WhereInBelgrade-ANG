import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { LikeEventService } from 'src/app/_services/like-event.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { PaginatedResult, Pagination } from 'src/app/_model/pagination';
import { PaginationModule } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liked-events',
  templateUrl: './liked-events.component.html',
  styleUrls: ['./liked-events.component.css']
})
export class LikedEventsComponent implements OnInit {
  dogadjaji: Dogadjaj[];
  pagination: Pagination;

  constructor(private likedEventsService: LikeEventService, private alertify: AlertifyService,
    private authService: AuthService, private route: ActivatedRoute) { 
    }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dogadjaji = data['events'].result;
      this.pagination = data['events'].paginaton;
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }
  
  loadEvents(){
    this.likedEventsService.getAllLikedEvents(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage)
    .subscribe((res: PaginatedResult<Dogadjaj[]>) => {
      this.dogadjaji = res.result;
      this.pagination = res.paginaton;
    }, error => {
      this.alertify.error(error);
    });
  }

  pageChanged(event: any){
    this.pagination.currentPage = event.page;
    this.loadEvents();
  }
}
