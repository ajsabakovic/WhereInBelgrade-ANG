import { Component, OnInit } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { DogadjajService } from 'src/app/_services/dogadjaj.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-blue-posts-sport',
  templateUrl: './blue-posts-sport.component.html',
  styleUrls: ['./blue-posts-sport.component.css']
})
export class BluePostsSportComponent implements OnInit {
  dogadjaji: Dogadjaj[];

  constructor(private eventService: DogadjajService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEventsByCategory('sport').subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    }, error => {
      this.alertify.error(error);
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }
}
