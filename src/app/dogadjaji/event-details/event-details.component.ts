import { Component, OnInit, ViewChild } from '@angular/core';
import { DogadjajService } from 'src/app/_services/dogadjaj.service';
import { Dogadjaj } from 'src/app/_model/dogadjaj';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/_services/auth.service';
import { LikeEventService } from 'src/app/_services/like-event.service';
import { RegisterModalComponent } from 'src/app/register-modal/register-modal.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @ViewChild(RegisterModalComponent) register;
  dogadjaj: Dogadjaj;
  admin: boolean;
  // isAdmin = false;

  constructor(private dogadjajService: DogadjajService, private alertify: AlertifyService, 
              private route: ActivatedRoute, private datePipe: DatePipe, private authService: AuthService,
              private likeService: LikeEventService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    if (!this.authService.loggedIn()){
      this.dogadjajService.getEventsById(+this.route.snapshot.params['id']).subscribe((dogadjaj: Dogadjaj) =>{
        this.dogadjaj = dogadjaj;
        console.log(this.dogadjaj.naziv);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.dogadjajService.getEventsByIdLogged(+this.route.snapshot.params['id'], this.authService.decodedToken.nameid)
      .subscribe((dogadjaj: Dogadjaj) => {
        this.dogadjaj = dogadjaj;
        if(this.authService.isAdmin()){
          this.admin = true;
        }
        else{
          this.admin = false;
        }
        console.log(this.dogadjaj.naziv);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

  getOnlyDate(date: Date){
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  getOnlyTime(date: Date){
    return this.datePipe.transform(date, 'HH:mm');
  }

  likeEvent() {
    if (this.authService.loggedIn()) {
      this.likeService.likeEvent(this.authService.decodedToken.nameid, this.dogadjaj.dogadjajID)
      .subscribe(() => {
        this.dogadjaj.lajkovan = true;
        this.alertify.success('Dodali ste dogadjaj u omiljene');
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.openModalWithComponent(false);
    }
  }

  dislikeEvent(){
    this.likeService.dislikeEvent(this.authService.decodedToken.nameid, this.dogadjaj.dogadjajID)
    .subscribe(() => {
      this.dogadjaj.lajkovan = false;
      this.alertify.message('Izbacili ste dogadjaj iz omiljenih');
    }, error => {
      this.alertify.error(error);
    })
  }

  openModalWithComponent(provera: boolean) {
    this.register.provera = provera;
    this.register.ShowComponent();
  }
}
