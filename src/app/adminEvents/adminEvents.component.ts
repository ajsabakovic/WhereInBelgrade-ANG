import { Component, OnInit, ViewChild } from '@angular/core';
import { InsertEventComponent } from '../insert-event/insert-event.component';

@Component({
  selector: 'app-adminEvents',
  templateUrl: './adminEvents.component.html',
  styleUrls: ['./adminEvents.component.css']
})
export class AdminEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  edit(event: Event){
      
  }
}
