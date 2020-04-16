import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Dogadjaj } from '../_model/dogadjaj';
import { Injectable } from '@angular/core';
import { EventsService } from '../_services/events.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class EventsResolver implements Resolve<Dogadjaj[]>{
    page = 1;
    itemsPerPage = 6;

    constructor(private eventsService: EventsService,
        private router: Router,
        private alertify: AlertifyService){

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Dogadjaj[]>{
        return this.eventsService.getAll(this.page, this.itemsPerPage)
        .pipe(
            catchError(error =>{
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['']);
                return of(null);
            })
        )
    }
}