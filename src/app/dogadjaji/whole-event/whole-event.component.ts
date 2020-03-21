import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { EventsService } from 'src/app/_services/events.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-whole-event',
  templateUrl: './whole-event.component.html',
  styleUrls: ['./whole-event.component.css']
})
export class WholeEventComponent implements OnInit {
  @Input()dogadjaj: Dogadjaj;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }
  getOnlyDate(date: Date){
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
