import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sport-kategorija',
  templateUrl: './sport-kategorija.component.html',
  styleUrls: ['./sport-kategorija.component.css']
})
export class SportKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'sport';
  
  constructor() { }

  ngOnInit() {
    if(this.kategorija === undefined || this.kategorija.length === 0 || this.kategorija !== this.naziv){
      this.kategorija = this.naziv;
    }
  }
}
