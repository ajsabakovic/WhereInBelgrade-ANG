import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sport-kategorija',
  templateUrl: './sport-kategorija.component.html',
  styleUrls: ['./sport-kategorija.component.css']
})
export class SportKategorijaComponent implements OnInit {
  @Output() kategorija = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  metoda(kategorija: string) {
    this.kategorija.emit(kategorija);
  }
}
