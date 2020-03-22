import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-festival-kategorija',
  templateUrl: './festival-kategorija.component.html',
  styleUrls: ['./festival-kategorija.component.css']
})
export class FestivalKategorijaComponent implements OnInit {
  @Output() kategorija = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  metoda(kategorija: string) {
    this.kategorija.emit(kategorija);
  }
}
