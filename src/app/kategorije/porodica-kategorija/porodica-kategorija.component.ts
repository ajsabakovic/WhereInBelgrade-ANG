import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-porodica-kategorija',
  templateUrl: './porodica-kategorija.component.html',
  styleUrls: ['./porodica-kategorija.component.css']
})
export class PorodicaKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'porodica';

  constructor() { }

  ngOnInit() {
    if(this.kategorija === undefined || this.kategorija.length === 0 || this.kategorija !== this.naziv){
      this.kategorija = this.naziv;
    }
  }
}
