import { Component, OnInit } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { DogadjajService } from 'src/app/_services/dogadjaj.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-pink-posts-porodica',
  templateUrl: './pink-posts-porodica.component.html',
  styleUrls: ['./pink-posts-porodica.component.css']
})
export class PinkPostsPorodicaComponent implements OnInit {
  dogadjaji: Dogadjaj[];

  constructor(private eventService: DogadjajService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEventsByCategoryMainPage('porodica').subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

}
