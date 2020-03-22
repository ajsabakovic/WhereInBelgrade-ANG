import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zabava-kategorija',
  templateUrl: './zabava-kategorija.component.html',
  styleUrls: ['./zabava-kategorija.component.css']
})
export class ZabavaKategorijaComponent implements OnInit {
  @Output() kategorija = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  metoda(kategorija: string) {
    this.kategorija.emit(kategorija);
  }
}
