import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-whole-event',
  templateUrl: './whole-event.component.html',
  styleUrls: ['./whole-event.component.css']
})
export class WholeEventComponent implements OnInit {
  @Input()dogadjaj: Dogadjaj;

  constructor() { }

  ngOnInit() {
  }

}
