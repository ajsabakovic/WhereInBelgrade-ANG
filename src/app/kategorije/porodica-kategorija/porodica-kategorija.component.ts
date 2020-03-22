import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-porodica-kategorija',
  templateUrl: './porodica-kategorija.component.html',
  styleUrls: ['./porodica-kategorija.component.css']
})
export class PorodicaKategorijaComponent implements OnInit {
  @Output() kategorija = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  metoda(kategorija: string) {
    console.log(kategorija);
    this.kategorija.emit(kategorija);
  }
}
