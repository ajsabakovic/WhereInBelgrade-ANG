import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-porodica-kategorija',
  templateUrl: './porodica-kategorija.component.html',
  styleUrls: ['./porodica-kategorija.component.css']
})
export class PorodicaKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'porodica';

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
    return 'porodica' === category;
  }

}
