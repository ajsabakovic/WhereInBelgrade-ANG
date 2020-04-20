import { Component, OnInit } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { DogadjajService } from 'src/app/_services/dogadjaj.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-yellow-posts-kultura',
  templateUrl: './yellow-posts-kultura.component.html',
  styleUrls: ['./yellow-posts-kultura.component.css']
})
export class YellowPostsKulturaComponent implements OnInit {
  dogadjaji: Dogadjaj[];

  constructor(private eventService: DogadjajService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEventsByCategoryMainPage('kultura').subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

}
