import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-pink-post-festivali',
  templateUrl: './pink-post-festivali.component.html',
  styleUrls: ['./pink-post-festivali.component.css']
})
export class PinkPostFestivaliComponent implements OnInit {
  @Input()dogadjaj: Dogadjaj;
  constructor() { }

  ngOnInit() {
  }

}
