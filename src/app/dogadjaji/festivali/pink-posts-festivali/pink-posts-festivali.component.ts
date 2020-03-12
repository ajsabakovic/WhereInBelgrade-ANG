import { Component, OnInit } from '@angular/core';
import { DogadjajService } from 'src/app/_services/dogadjaj.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-pink-posts-festivali',
  templateUrl: './pink-posts-festivali.component.html',
  styleUrls: ['./pink-posts-festivali.component.css']
})
export class PinkPostsFestivaliComponent implements OnInit {
  dogadjaji: Dogadjaj[];

  constructor(private eventService: DogadjajService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEventsByCategory('festivali').subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    }, error => {
      this.alertify.error(error);
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

}
