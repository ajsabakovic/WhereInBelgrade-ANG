import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-fav-event',
  templateUrl: './fav-event.component.html',
  styleUrls: ['./fav-event.component.css']
})
export class FavEventComponent implements OnInit {
  @Input()dogadjaj: Dogadjaj;

  constructor() { }

  ngOnInit() {
  }

}
