import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Dogadjaj } from '../_model/dogadjaj';
import { EventsService } from '../_services/events.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DogadjajKategorijeResolver implements Resolve<Dogadjaj[]>{
    page = 1;
    itemsPerPage = 6;
    constructor(private eventsService: EventsService,
        private alertify: AlertifyService,
        private router: Router) {} 

        resolve(route: ActivatedRouteSnapshot): Observable<Dogadjaj[]>{
            return this.eventsService.getEventsByCategory(route.params['kategorija'], this.page, this.itemsPerPage, "")
            .pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving data');
                    this.router.navigate(['']);
                    return of(null);
                })
            )
        }
}