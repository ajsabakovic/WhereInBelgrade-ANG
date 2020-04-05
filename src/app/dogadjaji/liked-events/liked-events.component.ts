import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { LikeEventService } from 'src/app/_services/like-event.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-liked-events',
  templateUrl: './liked-events.component.html',
  styleUrls: ['./liked-events.component.css']
})
export class LikedEventsComponent implements OnInit {
  dogadjaji: Dogadjaj[];

  constructor(private likedEventsService: LikeEventService, private alertify: AlertifyService,
    private authService: AuthService) { 
      this.loadEvents();
    }

  ngOnInit() {
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }
  
  loadEvents(){
    this.likedEventsService.getAllLikedEvents(this.authService.decodedToken.nameid).subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    }, error => {
      this.alertify.error(error);
    });
  }

}
