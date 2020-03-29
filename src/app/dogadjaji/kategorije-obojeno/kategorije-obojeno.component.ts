import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kategorije-obojeno',
  templateUrl: './kategorije-obojeno.component.html',
  styleUrls: ['./kategorije-obojeno.component.css']
})
export class KategorijeObojenoComponent implements OnInit {
  @Input() kategorija: any;

  constructor() { }

  ngOnInit() {
  }

}
