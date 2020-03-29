import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-festival-kategorija',
  templateUrl: './festival-kategorija.component.html',
  styleUrls: ['./festival-kategorija.component.css']
})
export class FestivalKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'festival';

  constructor() { }

  ngOnInit() {
    if(this.kategorija === undefined || this.kategorija.length === 0 || this.kategorija !== this.naziv){
      this.kategorija = this.naziv;
    }
  }

}
