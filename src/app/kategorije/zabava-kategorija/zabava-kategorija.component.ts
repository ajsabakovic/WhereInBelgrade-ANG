import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-zabava-kategorija',
  templateUrl: './zabava-kategorija.component.html',
  styleUrls: ['./zabava-kategorija.component.css']
})
export class ZabavaKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'zabava';

  constructor() { }

  ngOnInit() {
    if (this.kategorija === undefined || this.kategorija.length === 0 || this.kategorija !== this.naziv){
      this.kategorija = this.naziv;
    }
  }
}
