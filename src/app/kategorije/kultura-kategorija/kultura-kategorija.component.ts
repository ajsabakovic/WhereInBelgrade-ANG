import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kultura-kategorija',
  templateUrl: './kultura-kategorija.component.html',
  styleUrls: ['./kultura-kategorija.component.css']
})
export class KulturaKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'kultura';
  
  constructor() { }

  ngOnInit() {
    if(this.kategorija === undefined || this.kategorija.length === 0 || this.kategorija !== this.naziv){
      this.kategorija = this.naziv;
    }
  }
}
