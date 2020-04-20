import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-festival-kategorija',
  templateUrl: './festival-kategorija.component.html',
  styleUrls: ['./festival-kategorija.component.css']
})
export class FestivalKategorijaComponent implements OnInit {
  @Input() kategorija: any;
  naziv = 'festival';

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
    return 'festivali' === category;
  }

}
