import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../_services/events.service';
import { AlertifyService } from '../_services/alertify.service';
import { Dogadjaj } from '../_model/dogadjaj';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() kategorija: string;
  dogadjaji: Dogadjaj[];

  constructor(private eventsService: EventsService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadEvents();
  }

  hasEvents() {
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

  loadEvents() {
    this.eventsService.getAll().subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    }, error => {
      this.alertify.error(error);
    });
  }

}
