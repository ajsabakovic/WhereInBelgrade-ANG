import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-pink-post-porodica',
  templateUrl: './pink-post-porodica.component.html',
  styleUrls: ['./pink-post-porodica.component.css']
})
export class PinkPostPorodicaComponent implements OnInit {
  @Input() dogadjaj: Dogadjaj;
  constructor() { }

  ngOnInit() {
  }

}
