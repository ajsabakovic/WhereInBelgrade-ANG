import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.component.html',
  styleUrls: ['./kategorije.component.css']
})
export class KategorijeComponent implements OnInit {
  @Output() kategorija = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  metoda(kategorija: string) {
    console.log(kategorija);
    this.kategorija.emit(kategorija);
  }

}
