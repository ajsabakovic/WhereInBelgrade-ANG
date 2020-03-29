import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { EventsComponent } from 'src/app/events/events.component';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-events',
  templateUrl: './category-events.component.html',
  styleUrls: ['./category-events.component.css']
})
export class CategoryEventsComponent implements OnInit {
  @ViewChild(EventsComponent) dogadjaji;
  kategorija: string;

  constructor(private alertify: AlertifyService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }

  ngOnInit() {
    this.postaviKategoriju();
  }

  postaviKategoriju(){
    this.kategorija = this.route.snapshot.params['kategorija'];
  }

}
