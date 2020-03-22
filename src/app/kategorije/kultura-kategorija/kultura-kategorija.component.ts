import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kultura-kategorija',
  templateUrl: './kultura-kategorija.component.html',
  styleUrls: ['./kultura-kategorija.component.css']
})
export class KulturaKategorijaComponent implements OnInit {
  @Output() kategorija = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  metoda(kategorija: string) {
    this.kategorija.emit(kategorija);
  }
}
