import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from '../../../_model/dogadjaj';
import { DogadjajService } from '../../../_services/dogadjaj.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-blue-posts-zabava',
  templateUrl: './blue-posts-zabava.component.html',
  styleUrls: ['./blue-posts-zabava.component.css']
})
export class BluePostsZabavaComponent implements OnInit {
  dogadjaji: Dogadjaj[];

  constructor(private eventService: DogadjajService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEventsByCategoryMainPage('zabava').subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }

}
