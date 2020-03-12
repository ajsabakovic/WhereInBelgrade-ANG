import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-blue-post-sport',
  templateUrl: './blue-post-sport.component.html',
  styleUrls: ['./blue-post-sport.component.css']
})
export class BluePostSportComponent implements OnInit {
  @Input() dogadjaj: Dogadjaj;
  constructor() { }

  ngOnInit() {
  }

}
