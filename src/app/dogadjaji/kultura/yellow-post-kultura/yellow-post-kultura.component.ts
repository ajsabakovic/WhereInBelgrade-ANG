import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-yellow-post-kultura',
  templateUrl: './yellow-post-kultura.component.html',
  styleUrls: ['./yellow-post-kultura.component.css']
})
export class YellowPostKulturaComponent implements OnInit {
  @Input() dogadjaj: Dogadjaj;
  constructor() { }

  ngOnInit() {
  }

}
