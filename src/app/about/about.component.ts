import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  covidData: any;
  serbia: any;

  constructor() { }

  ngOnInit() {
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {this.setData(data); });
  }

  setData(data: any) {
    this.covidData = data;
    const countries = data.Countries;
    countries.forEach(country => {
      if (country.CountryCode === 'RS')
      {
        this.covidData.UkupnoObolelih = country.TotalConfirmed;
        this.covidData.UkupnoMrtvih = country.TotalDeaths;
        this.covidData.UkupnoOporavljenih = country.TotalRecovered;
      }
    });
    console.log(this.covidData);
  }
}
