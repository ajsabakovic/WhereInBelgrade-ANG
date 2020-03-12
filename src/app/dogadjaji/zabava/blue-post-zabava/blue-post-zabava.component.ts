import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from '../../../_model/dogadjaj';

@Component({
  selector: 'app-blue-post-zabava',
  templateUrl: './blue-post-zabava.component.html',
  styleUrls: ['./blue-post-zabava.component.css']
})
export class BluePostZabavaComponent implements OnInit {
  @Input()dogadjaj: Dogadjaj;

  constructor() { }

  ngOnInit() {
  }

}
