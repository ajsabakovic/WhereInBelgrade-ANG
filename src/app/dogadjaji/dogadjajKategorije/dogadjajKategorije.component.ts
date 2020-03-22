import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { EventsService } from 'src/app/_services/events.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Dogadjaj } from 'src/app/_model/dogadjaj';

@Component({
  selector: 'app-dogadjajKategorije',
  templateUrl: './dogadjajKategorije.component.html',
  styleUrls: ['./dogadjajKategorije.component.css']
})
export class DogadjajKategorijeComponent implements OnInit {
  @Input() kategorija: string;

  dogadjaji: Dogadjaj[];
  constructor(private eventsService: EventsService, private alertify: AlertifyService) { }

  ngOnInit() {
      this.loadEvents();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.kategorija);
    this.selectedCategory();
  }

  loadEvents(){
    this.eventsService.getAll().subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    }, error => {
      this.alertify.error(error);
    });
  }

  selectedCategory(){
    console.log(this.kategorija);
    this.eventsService.getEventsByCategory(this.kategorija).subscribe((dogadjaji: Dogadjaj[]) => {
      this.dogadjaji = dogadjaji;
    }, error => {
      this.alertify.error(error);
    });
  }

  hasEvents(){
    return this.dogadjaji !== undefined && this.dogadjaji.length !== 0;
  }
}
