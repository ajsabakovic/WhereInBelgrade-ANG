import { Component, OnInit } from '@angular/core';
import { EventsService } from '../_services/events.service';
import { AlertifyService } from '../_services/alertify.service';
import { Dogadjaj } from '../_model/dogadjaj';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  kategorija: string;

  constructor() { }

  ngOnInit() {
  }

  getEvents(kategorija: string) {
    console.log(kategorija);
    this.kategorija = kategorija;
  }

}
