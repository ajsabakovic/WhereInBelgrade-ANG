import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeatherData: any;
  dobaDana: string;

  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.dobaDana);
  }

  getWeatherData(){
    // fetch('http://api.openweathermap.org/data/2.5/weather?id=792680&appid=049b978f0ef25ecaec6846db2ad141cf')
    // .then(response => response.json())
    // .then(data => {this.setWeatherData(data); });
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.temp = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    if (currentDate.getTime() < sunsetTime.getTime()) {
      this.dobaDana = 'dan';
      console.log(this.dobaDana);
    } else {
      this.dobaDana = 'noc';
      console.log(this.dobaDana);
    }
  }
}
