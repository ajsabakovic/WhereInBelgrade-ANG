import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kultura-kategorija',
  templateUrl: './kultura-kategorija.component.html',
  styleUrls: ['./kultura-kategorija.component.css']
})
export class KulturaKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'kultura';
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.kategorija === undefined || this.kategorija.length === 0 || this.kategorija !== this.naziv){
      this.kategorija = this.naziv;
    }
  }

  proveraKategorije(){
    const url = this.route.snapshot['_routerState'].url;
    const category = url.substring(17 , url.length);
    if(category == undefined || 
      category === null || category === '')
      return false;
    return 'kultura' === category;
  }
}
