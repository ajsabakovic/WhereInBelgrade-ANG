import { Component, OnInit } from '@angular/core';
import { DogadjajService } from 'src/app/_services/dogadjaj.service';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  dogadjaj: Dogadjaj;

  constructor(private dogadjajService: DogadjajService, private alertify: AlertifyService, 
    private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.dogadjajService.getEventsById(+this.route.snapshot.params['id']).subscribe((dogadjaj: Dogadjaj) =>{
      this.dogadjaj = dogadjaj;
      console.log(this.dogadjaj.naziv);
    }, error => {
      this.alertify.error(error);
    });
  }

  getOnlyDate(date: Date){
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  getOnlyTime(date:Date){
    return this.datePipe.transform(date, 'HH:mm');
  }
}
